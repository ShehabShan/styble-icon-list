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
import { useState } from '@wordpress/element';

import './editor.scss';

import Placeholder from './side-control-bar/Placeholder.js';
import UploadIcon from './side-control-bar/uploadIcon';
import SeparatorModel from './side-control-bar/SeparatorModel.js';

import presetOne from '../assests/List-presets-one.svg';
import presetTwo from '../assests/List-presets-two.svg';
import presetThree from '../assests/List-presets-three.svg';
import editIcon from '../assests/edit-icon.svg';
import CustomItemWidth from './side-control-bar/CustomItemWidth.js';
import ListPreset from './side-control-bar/ListPreset.js';
import { List } from 'lucide-react';
import ListOrientation from './side-control-bar/ListOrientation.js';
import CustomHelperComponent from './side-control-bar/CustomHelperComponent.js';
import Typography from './side-control-style-bar/Typography.js';

export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		preset,
		listOrientation,
		itemsGap,
		hasIcon,
		iconSize,
		separatorColor,
		separatorType,
		separatorThickness,
	} = attributes;

	//Opening modal for icon choose

	const [ isLibaryOpen, setIsLibaryOpen ] = useState( false );
	const [ isCustomIconOpen, setIsCustomIconOpen ] = useState( false );

	const toggleLibaryOpen = () => {
		setIsLibaryOpen( ( prev ) => ! prev );
	};

	const toggleCustomIcon = () => {
		setIsCustomIconOpen( ( prev ) => ! prev );
	};

	// end of opening modal for icon choose

	//opening modal from separator control

	const [ isSeparatorModalOpen, setIsSeparatorModalOpen ] = useState( false );

	const toggleSeparatorModal = () => {
		setIsSeparatorModalOpen( ( prev ) => ! prev );
	};

	//ending modal from separator control

	//opening modal for item width control

	const [ isItemWidthModalOpen, setIsItemWidthModalOpen ] = useState( false );

	const toggleItemWidthModal = () => {
		setIsItemWidthModalOpen( ( prev ) => ! prev );
	};

	const [ isTypographyModalOpen, setIsTypographyModalOpen ] =
		useState( false );

	const toggleTypographyModal = () => {
		setIsTypographyModalOpen( ( prev ) => ! prev );
	};

	//ending modal for item width control

	const blockProps = useBlockProps( {
		className: `parent-contaner is-list-orientation-${ listOrientation } is-items-space-between-${ itemsGap } is-separator-type-${ separatorType }`,

		style: {
			'--separator-thickness': `${ separatorThickness }px`,
			'--separator-color': separatorColor,
			'--separator-style': separatorType,
		},
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
						min={ 10 }
						max={ 50 }
						step={ 10 }
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
								isCustomIconOpen={ isCustomIconOpen }
								toggleCustomIcon={ toggleCustomIcon }
								isLibaryOpen={ isLibaryOpen }
								toggleLibaryOpen={ toggleLibaryOpen }
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
						toggleSeparatorModal={ toggleSeparatorModal }
						editIcon={ editIcon }
						isSeparatorModalOpen={ isSeparatorModalOpen }
						setAttributes={ setAttributes }
						attributes={ attributes }
					/>

					<CustomItemWidth
						isItemWidthModalOpen={ isItemWidthModalOpen }
						toggleItemWidthModal={ toggleItemWidthModal }
						editIcon={ editIcon }
						attributes={ attributes }
						setAttributes={ setAttributes }
					/>
				</>
			);
		}

		if ( tab.name === 'styles' ) {
			return (
				<Typography
					isTypographyModalOpen={ isTypographyModalOpen }
					toggleTypographyModal={ toggleTypographyModal }
					attributes={ attributes }
					setAttributes={ setAttributes }
					clientId={ clientId }
				/>
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
								title: __( 'Settings', 'feature-card-block' ),
								className: 'tab-settings',
							},
							{
								name: 'styles',
								title: __( 'Style', 'feature-card-block' ),
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
