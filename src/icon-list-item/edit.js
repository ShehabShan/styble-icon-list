import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';

import './editor.scss';

import { PanelBody, RangeControl, TabPanel } from '@wordpress/components';
import settingsIcon from '../assests/setting.svg';
import paletteIcon from '../assests/palette.svg';
import ChildItemStyle from './ChildItemStyle.js';
import resetIcon from '../assests/reset.svg';
import { getBlockStyles } from '../utils/style.js';
import { useParentAttributes } from '../hooks/useParentAttributes.js';
import { useEffect, useRef } from '@wordpress/element';

// This is the checkmark icon from your image

export default function Edit( { attributes, setAttributes, clientId } ) {
	const childStyle = getBlockStyles( attributes );
	const parentLayout = useParentAttributes( clientId );

	const prevLayout = useRef( {} );

	useEffect( () => {
		const current = parentLayout || {};
		const previous = prevLayout.current || {};

		// Find only keys that changed on parent
		const changedKeys = Object.keys( current ).filter(
			( key ) => current[ key ] !== previous[ key ]
		);

		if ( changedKeys.length === 0 ) {
			return;
		}

		const updates = {};

		changedKeys.forEach( ( key ) => {
			// Only update child if value actually differs
			if ( attributes[ key ] !== current[ key ] ) {
				updates[ key ] = current[ key ];
			}
		} );

		if ( Object.keys( updates ).length > 0 ) {
			setAttributes( updates );
		}

		prevLayout.current = { ...current };
	}, [ parentLayout, attributes, setAttributes ] );

	// Helper to check if a specific modal is open

	const blockProps = useBlockProps( {
		style: {
			...childStyle, // This spreads all properties from getChildBlockStyles
		},
	} );

	const renderTabContent = ( tab ) => {
		if ( tab.name === 'settings' ) {
			return (
				<>
					<ChildItemStyle
						attributes={ attributes }
						setAttributes={ setAttributes }
						resetIcon={ resetIcon }
					/>
				</>
			);
		}

		if ( tab.name === 'styles' ) {
			return (
				<>
					<RangeControl
						__next40pxDefaultSize
						label={ __( 'Space Between', 'icon-list' ) }
						min={ 0 }
						max={ 50 }
						step={ 5 }
					/>
				</>
			);
		}

		// NEVER return null here
		return null;
	};

	const TEMPLATE = [
		[ 'create-block/icon-picker', {} ],
		[ 'create-block/advanced-text', { placeholder: 'List Text Here' } ],
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Icon List', 'icon-list' ) }>
					<TabPanel
						className="my-custom-tabs"
						activeClass="is-active"
						tabs={ [
							{
								name: 'settings',
								title: (
									<>
										<img
											src={ settingsIcon }
											width={ 16 }
											height={ 16 }
											alt="Settings"
										/>
										{ __( 'Settings', 'icon-list' ) }
									</>
								),
								className: 'tab-settings',
							},
							{
								name: 'styles',
								title: (
									<>
										<img
											src={ paletteIcon }
											width={ 16 }
											height={ 16 }
											alt="Palette"
										/>
										{ __( 'Style', 'icon-list' ) }
									</>
								),
								className: 'tab-styles',
							},
						] }
					>
						{ renderTabContent }
					</TabPanel>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ [
						'create-block/icon-picker',
						'create-block/advanced-text',
					] }
					template={ TEMPLATE }
				/>
			</div>
		</>
	);
}
