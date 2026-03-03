import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import {
	PanelBody,
	TabPanel,
	RangeControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	Button,
} from '@wordpress/components';
import { useEffect, useRef, useState } from '@wordpress/element';

import './editor.scss';

import Placeholder from './side-control-bar/Placeholder.js';
import UploadIcon from './side-control-bar/uploadIcon';
import SeparatorModel from './side-control-bar/SeparatorModel.js';

import presetOne from '../assests/List-presets-one.svg';
import presetTwo from '../assests/List-presets-two.svg';
import presetThree from '../assests/List-presets-three.svg';
import editIcon from '../assests/edit-icon.svg';
import resetIcon from '../assests/reset.svg';

import CustomItemWidth from './side-control-bar/CustomItemWidth.js';
import ListPreset from './side-control-bar/ListPreset.js';
import ListOrientation from './side-control-bar/ListOrientation.js';
import Typography from './side-control-style-bar/Typography.js';
import CustomHelperComponent from './side-control-bar/CustomHelperComponent.js';
import { getIconListStyle } from '../utils/style.js';
import { presetData } from '../utils/dataCenter.js';
import RangeControls from './side-control-style-bar/RangeControls.js';
import ItemStyle from './side-control-style-bar/ItemStyle.js';

import settingsIcon from '../assests/setting.svg';
import paletteIcon from '../assests/palette.svg';
import ChildItemStyle from '../icon-list-item/ChildItemStyle.js';
import AdvancedStyle from './side-control-style-bar/AdvancedStyle.js';

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		preset,
		listOrientation,
		itemsGap,
		hasIcon,
		iconSize,
		separatorType,
		iconColor,
	} = attributes;

	const parentStyle = getIconListStyle( attributes );
	const [ activeTab, setActiveTab ] = useState( 'general' );
	const [ openModalId, setOpenModalId ] = useState( null );
	const sidebarRef = useRef( null );

	const toggleModal = ( id ) => {
		setOpenModalId( ( prev ) => ( prev === id ? null : id ) );
	};
	const isModalOpen = ( id ) => openModalId === id;
	const closeAllModals = () => setOpenModalId( null );

	useEffect( () => {
		const handleClick = ( e ) => {
			if ( ! openModalId ) {
				return;
			}

			if ( sidebarRef.current?.contains( e.target ) ) {
				closeAllModals();
			}
		};

		document.addEventListener( 'mousedown', handleClick );
		return () => {
			document.removeEventListener( 'mousedown', handleClick );
		};
	}, [ openModalId ] );

	const blockProps = useBlockProps( {
		className: `parent-contaner advanced-style is-list-orientation-${ listOrientation } is-items-space-between-${ itemsGap } is-separator-type-${ separatorType } is-preset-${ preset }`,

		style: { ...parentStyle },
	} );

	//console text area

	// Preset Handling checking if there are inner blocks to show placeholder or not

	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	const hasInnerBlocks = useSelect(
		( select ) => {
			const block = select( 'core/block-editor' ).getBlock( clientId );
			return block?.innerBlocks?.length > 0;
		},
		[ clientId ]
	);

	const insertPreset = ( value ) => {
		const selectedStyles = presetData[ value ] || {};

		const numberOfItems = value === 'scratch' ? 1 : 3;

		const items = Array.from( { length: numberOfItems } ).map( () =>
			createBlock( 'create-block/icon-list-item' )
		);

		setAttributes( {
			preset: value,
			...selectedStyles,
		} );

		replaceInnerBlocks( clientId, items );
	};

	// Render content for each tab in the inspector controls

	const renderTabContent = ( tab ) => {
		if ( tab.name === 'settings' ) {
			return (
				<>
					<ListPreset
						preset={ preset }
						setAttributes={ setAttributes }
						presetOne={ presetOne }
						presetTwo={ presetTwo }
						presetThree={ presetThree }
					/>

					<ListOrientation
						listOrientation={ listOrientation }
						setAttributes={ setAttributes }
					/>

					<RangeControl
						__next40pxDefaultSize
						label={ __( 'Space Between', 'icon-list' ) }
						value={ itemsGap }
						onChange={ ( value ) =>
							setAttributes( { itemsGap: value } )
						}
						min={ 0 }
						max={ 50 }
					/>

					<ToggleControl
						label={ __( 'Show Icons', 'icon-list' ) }
						className="my-custom-troggle"
						checked={ hasIcon }
						onChange={ ( value ) =>
							setAttributes( { hasIcon: value } )
						}
					/>

					{ hasIcon && (
						<>
							<UploadIcon
								attributes={ attributes }
								setAttributes={ setAttributes }
								isModalOpen={ isModalOpen }
								toggleModal={ toggleModal }
								closeAllModals={ closeAllModals }
							/>

							<RangeControl
								__next40pxDefaultSize
								label={ __( 'Icon Size', 'icon-list' ) }
								value={ iconSize }
								onChange={ ( value ) =>
									setAttributes( {
										iconSize: value,
									} )
								}
								min={ 20 }
								max={ 200 }
							/>
						</>
					) }

					<SeparatorModel
						isModalOpen={ isModalOpen }
						toggleModal={ toggleModal }
						closeAllModals={ closeAllModals }
						editIcon={ editIcon }
						setAttributes={ setAttributes }
						attributes={ attributes }
					/>

					<CustomItemWidth
						isModalOpen={ isModalOpen }
						toggleModal={ toggleModal }
						closeAllModals={ closeAllModals }
						editIcon={ editIcon }
						attributes={ attributes }
						setAttributes={ setAttributes }
					/>
				</>
			);
		}

		if ( tab.name === 'styles' ) {
			return (
				<>
					<Typography
						attributes={ attributes }
						setAttributes={ setAttributes }
					/>

					<CustomHelperComponent
						label={ __( 'Icon Color', 'icon-list' ) }
						hasColor={ true }
						hasReset={ true }
						icon={ resetIcon }
						resetAttributes="iconColor"
						setAttributes={ setAttributes }
						color={ iconColor }
						onColorChange={ ( color ) =>
							setAttributes( { iconColor: color } )
						}
					/>

					<CustomHelperComponent
						label={ __( 'Container Color', 'icon-list' ) }
						hasColor={ true }
						hasReset={ true }
						icon={ resetIcon }
						resetAttributes="containerColor"
						setAttributes={ setAttributes }
						color={ attributes?.containerColor }
						onColorChange={ ( color ) =>
							setAttributes( { containerColor: color } )
						}
					/>

					<RangeControls
						setAttributes={ setAttributes }
						attributes={ attributes }
						title={ 'Padding' }
						type="allPadding"
					/>

					<ItemStyle
						attributes={ attributes }
						setAttributes={ setAttributes }
						resetIcon={ resetIcon }
						editIcon={ editIcon }
						isModalOpen={ isModalOpen }
						toggleModal={ toggleModal }
						closeAllModals={ closeAllModals }
					/>
				</>
			);
		}

		return null;
	};

	if ( ! hasInnerBlocks ) {
		return (
			<Placeholder
				presetOne={ presetOne }
				presetTwo={ presetTwo }
				presetThree={ presetThree }
				insertPreset={ insertPreset }
				blockProps={ blockProps }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		);
	}

	return (
		<>
			<InspectorControls>
				{ /* 1. Top Level Tabs (Custom styled to look like your image) */ }
				<div className="styble-inspector-tabs">
					<Button
						isPressed={ activeTab === 'general' }
						onClick={ () => setActiveTab( 'general' ) }
					>
						{ __( 'General' ) }
					</Button>
					<Button
						isPressed={ activeTab === 'advanced' }
						onClick={ () => setActiveTab( 'advanced' ) }
					>
						{ __( 'Advanced' ) }
					</Button>
				</div>

				{ /* 2. Conditional Rendering of PanelBodies */ }
				{ activeTab === 'general' && (
					<>
						<PanelBody title={ __( 'Icon list' ) }>
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
													width={ 24 }
													height={ 24 }
													alt="Settings"
												/>
												{ __(
													'Settings',
													'icon-list'
												) }
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
						<PanelBody
							title={ __( 'Badge' ) }
							initialOpen={ false }
						>
							{ /* Icon specific stuff */ }
						</PanelBody>
					</>
				) }

				{ activeTab === 'advanced' && (
					<>
						<PanelBody
							title={ __( 'Section Preference', 'icon-list' ) }
						>
							<AdvancedStyle
								attributes={ attributes }
								setAttributes={ setAttributes }
								resetIcon={ resetIcon }
							/>
						</PanelBody>
						<PanelBody title={ __( 'Spacing', 'icon-list' ) }>
							{ /* Margin/Padding controls */ }
						</PanelBody>
					</>
				) }
			</InspectorControls>
			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ [ 'create-block/icon-list-item' ] }
				/>
			</div>
		</>
	);
}
