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
} from '@wordpress/components';

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
import { getBlockStyles } from '../utils/style.js';

import RangeControls from './side-control-style-bar/RangeControls.js';
import ItemStyle from './side-control-style-bar/ItemStyle.js';
import { useState } from '@wordpress/element';
import { Palette, Settings } from 'lucide-react';

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

	const parentStyle = getBlockStyles( attributes );

	//Opening modal for icon choose

	// Initial state: null means no modal is open
	const [ openModalId, setOpenModalId ] = useState( null );

	const toggleModal = ( id ) => {
		setOpenModalId( ( prev ) => ( prev === id ? null : id ) );
	};

	// Helper to check if a specific modal is open
	const isModalOpen = ( id ) => openModalId === id;

	const closeAllModals = () => setOpenModalId( null );

	const blockProps = useBlockProps( {
		className: `parent-contaner is-list-orientation-${ listOrientation } is-items-space-between-${ itemsGap } is-separator-type-${ separatorType } is-preset-${ preset }`,

		style: { ...parentStyle },
	} );

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
		const items = [
			createBlock( 'create-block/icon-list-item' ),
			createBlock( 'create-block/icon-list-item' ),
			createBlock( 'create-block/icon-list-item' ),
		];

		setAttributes( { preset: value } );
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
						step={ 5 }
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
									setAttributes( { iconSize: value } )
								}
								min={ 20 }
								max={ 100 }
								step={ 10 }
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
						isModalOpen={ isModalOpen }
						toggleModal={ toggleModal }
						closeAllModals={ closeAllModals }
						attributes={ attributes }
						setAttributes={ setAttributes }
						clientId={ clientId }
					/>

					<CustomHelperComponent
						label={ __( 'Icon Colour', 'icon-list' ) }
						hasColor={ true }
						color={ iconColor }
						onColorChange={ ( color ) =>
							setAttributes( { iconColor: color } )
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
				<InnerBlocks
					allowedBlocks={ [ 'create-block/icon-list-item' ] }
				/>
			</div>
		</>
	);
}
