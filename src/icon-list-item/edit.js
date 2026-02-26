import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	RichText,
} from '@wordpress/block-editor';

import './editor.scss';
import { useParentAttributes } from '../hooks/useParentAttributes.js';
import { useEffect } from '@wordpress/element';
import { PanelBody, RangeControl, TabPanel } from '@wordpress/components';
import { Settings, Palette } from 'lucide-react';
import ChildItemStyle from './ChildItemStyle.js';
import resetIcon from '../assests/reset.svg';
import { getChildBlockStyles } from '../utils/style.js';

import * as LucideIcons from 'lucide-react';

// This is the checkmark icon from your image

export default function Edit( { attributes, setAttributes, clientId } ) {
	const parentAttributes = useParentAttributes( clientId );

	const {
		selectedIcon,
		iconSize,
		itemsWidth,
		textContent,
		itemWidthType,
		iconColor,
	} = parentAttributes;

	const childStyle = getChildBlockStyles( attributes, parentAttributes );

	const SelectedIconComponent = LucideIcons[ selectedIcon ] || null;

	// Helper to check if a specific modal is open

	const blockProps = useBlockProps( {
		style: {
			...childStyle, // This spreads all properties from getChildBlockStyles
		},
	} );

	useEffect( () => {
		setAttributes( {
			selectedIcon,
			iconSize,
			itemsWidth,
			itemWidthType,
			iconColor,
			textContent,
		} );
	}, [
		selectedIcon,
		iconSize,
		itemsWidth,
		textContent,
		itemWidthType,
		iconColor,
	] );

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
										<Settings size={ 16 } />
										{ __( 'Settings', 'icon-list' ) }
									</>
								),
								className: 'tab-settings',
							},
							{
								name: 'styles',
								title: (
									<>
										<Palette size={ 16 } />
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
			{ /* <div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ [
						'create-block/icon-picker',
						'create-block/advanced-text',
					] }
					template={ TEMPLATE }
				/>
			</div> */ }

			<div { ...blockProps }>
				<div className="icon-container">
					{ SelectedIconComponent && <SelectedIconComponent /> }
				</div>

				<RichText
					tagName="h3"
					value={ textContent }
					placeholder={ __( 'List Text Here', 'icon-list' ) }
					onChange={ ( newValue ) =>
						setAttributes( { textContent: newValue } )
					}
				/>
			</div>
		</>
	);
}
