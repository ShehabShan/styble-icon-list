import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';

import './editor.scss';
import { iconLibrary } from '../utils/dataCenter.js';
import { useParentAttributes } from '../hooks/useParentAttributes.js';
import { useEffect, useState } from '@wordpress/element';
import { PanelBody, RangeControl, TabPanel } from '@wordpress/components';
import { Settings, Palette } from 'lucide-react';
import ChildItemStyle from './ChildItemStyle.js';
import resetIcon from '../assests/reset.svg';
import { getChildBlockStyles } from '../utils/style.js';

// This is the checkmark icon from your image

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { textContent } = attributes;
	const parentAttributes = useParentAttributes( clientId );

	const { selectedIcon, iconSize, itemsWidth, itemWidthType, iconColor } =
		parentAttributes;

	const SelectedIconComponent = selectedIcon
		? iconLibrary.find( ( item ) => item.name === selectedIcon )?.icon
		: null;

	const childStyle = getChildBlockStyles( attributes, parentAttributes );

	const [ openModalId, setOpenModalId ] = useState( null );

	const toggleModal = ( id ) => {
		setOpenModalId( ( prev ) => ( prev === id ? null : id ) );
	};

	// Helper to check if a specific modal is open

	const blockProps = useBlockProps( {
		style: {
			...childStyle, // This spreads all properties from getChildBlockStyles
			width:
				itemWidthType === 'custom' && itemsWidth
					? `${ itemsWidth }px`
					: undefined,
		},
	} );

	useEffect( () => {
		setAttributes( {
			selectedIcon,
			iconSize,
			itemsWidth,
			itemWidthType,
			iconColor,
		} );
	}, [ selectedIcon, iconSize, itemsWidth, itemWidthType, iconColor ] );

	const renderTabContent = ( tab ) => {
		if ( tab.name === 'settings' ) {
			return (
				<>
					<ChildItemStyle
						attributes={ attributes }
						setAttributes={ setAttributes }
						toggleModal={ toggleModal }
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
			<div { ...blockProps }>
				<div>
					{ SelectedIconComponent && (
						<SelectedIconComponent
							size={ iconSize }
							color={ iconColor }
						/>
					) }
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
