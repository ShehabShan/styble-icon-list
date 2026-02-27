import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	TabPanel,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { Palette, Settings } from 'lucide-react';
import { getBlockStyles } from '../utils/style.js';
import './editor.scss';

import '../icon-list/side-control-bar/side-bar-scss/listPreset.scss';

//svg import
import resetIcon from '../assests/reset.svg';
import alignmentRight from '../assests/alignment-right.svg';
import alignmentCenter from '../assests/alignment-center.svg';
import alignmentLeft from '../assests/alignment-left.svg';
import alignmentHorizontal from '../assests/text-orientation-horizontal.svg';
import alignmentVertical from '../assests/text-orientation-vertical.svg';
import alignmentVerticalRotated from '../assests/text-orientation-vertical-rotated.svg';
import ChildItemStyle from '../icon-list-item/ChildItemStyle';

export default function Edit( { attributes, setAttributes } ) {
	const advanceTextStyle = getBlockStyles( attributes );

	const blockProps = useBlockProps( {
		className: 'wp-block-create-block-advanced-text',
		style: { ...advanceTextStyle },
	} );

	const TEXT_HIERARCHY = {
		h1: { size: 44, weight: 700, height: 1.3 },
		h2: { size: 36, weight: 700, height: 1.3 },
		h3: { size: 28, weight: 700, height: 1.3 },
		h4: { size: 24, weight: 700, height: 1.3 },
		h5: { size: 20, weight: 700, height: 1.3 },
		h6: { size: 16, weight: 700, height: 1.3 },
		p: { size: 16, weight: 400, height: 1.6 },
	};

	const renderTabContent = ( tab ) => {
		if ( tab.name === 'settings' ) {
			return (
				<>
					<ToggleGroupControl
						label={ __( 'HTML Tag', 'advanced-text' ) }
						className="custom-orientation"
						value={ attributes?.textType } // e.g., 'h3'
						isBlock
						onChange={ ( newTextType ) => {
							const preset = TEXT_HIERARCHY[ newTextType ];

							setAttributes( {
								textType: newTextType,
								// Automatically update typography based on the image specs
								fontSize: preset.size,
								fontWeight: preset.weight,
								fontHeight: preset.height,
							} );
						} }
					>
						<ToggleGroupControlOption
							value="h1"
							label="H1"
							className={ `custom-orientation-option ${
								attributes?.textType === 'h1' ? 'is-active' : ''
							}` }
						/>
						<ToggleGroupControlOption
							value="h2"
							label="H2"
							className={ `custom-orientation-option ${
								attributes?.textType === 'h2' ? 'is-active' : ''
							}` }
						/>
						<ToggleGroupControlOption
							value="h3"
							label="H3"
							className={ `custom-orientation-option ${
								attributes?.textType === 'h3' ? 'is-active' : ''
							}` }
						/>
						<ToggleGroupControlOption
							value="h4"
							label="H4"
							className={ `custom-orientation-option ${
								attributes?.textType === 'h4' ? 'is-active' : ''
							}` }
						/>
						<ToggleGroupControlOption
							value="h5"
							label="H5"
							className={ `custom-orientation-option ${
								attributes?.textType === 'h5' ? 'is-active' : ''
							}` }
						/>
						<ToggleGroupControlOption
							value="h6"
							label="H6"
							className={ `custom-orientation-option ${
								attributes?.textType === 'h6' ? 'is-active' : ''
							}` }
						/>
						<ToggleGroupControlOption
							value="p"
							label="P"
							className={ `custom-orientation-option ${
								attributes?.textType === 'p' ? 'is-active' : ''
							}` }
						/>
					</ToggleGroupControl>

					{ /* Alignment control */ }

					<ToggleGroupControl
						className="list-preset"
						label={ __( 'Alignment', 'advanced-text' ) }
						value={ attributes?.alignment }
						onChange={ ( value ) =>
							setAttributes( { alignment: value } )
						} // Use the new handler
						isBlock
						__next40pxDefaultSize
					>
						<ToggleGroupControlOption
							className={ `list-preset-option alignment-set ${
								attributes?.alignment === 'left'
									? 'is-active'
									: ''
							}` }
							value="left"
							label={
								<img
									src={ alignmentLeft }
									alt={ __( 'left', 'advanced-text' ) }
								/>
							}
							aria-label="left"
						/>
						<ToggleGroupControlOption
							className={ `list-preset-option alignment-set ${
								attributes?.alignment === 'center'
									? 'is-active'
									: ''
							}` }
							value="center"
							label={
								<img
									src={ alignmentCenter }
									alt={ __( 'Center', 'advanced-text' ) }
								/>
							}
							aria-label="center"
						/>
						<ToggleGroupControlOption
							className={ `list-preset-option alignment-set ${
								attributes?.alignment === 'right'
									? 'is-active'
									: ''
							}` }
							value="right"
							label={
								<img
									src={ alignmentRight }
									alt={ __( 'Right', 'advanced-text' ) }
								/>
							}
							aria-label="right"
						/>
					</ToggleGroupControl>

					{ /* Text Oriantation Control
					  //css is writen in advance text editor.scss
					*/ }

					<ToggleGroupControl
						className="orientation-type"
						label={ __( 'Text Orientation', 'advanced-text' ) }
						value={ attributes?.textOrientation }
						onChange={ ( value ) =>
							setAttributes( { textOrientation: value } )
						} // Use the new handler
						isBlock
						__next40pxDefaultSize
					>
						<ToggleGroupControlOption
							className={ `orientation-type-option ${
								attributes?.textOrientation === 'horizontal'
									? 'is-active'
									: ''
							}` }
							value="horizontal"
							label={
								<img
									src={ alignmentHorizontal }
									alt={ __( 'horizontal', 'advanced-text' ) }
								/>
							}
							aria-label="horizontal"
						/>
						<ToggleGroupControlOption
							className={ `orientation-type-option ${
								attributes?.textOrientation === 'upright'
									? 'is-active'
									: ''
							}` }
							value="upright"
							label={
								<img
									src={ alignmentVertical }
									alt={ __( 'upright', 'advanced-text' ) }
								/>
							}
							aria-label="upright"
						/>
						<ToggleGroupControlOption
							className={ `orientation-type-option ${
								attributes?.textOrientation === 'sideways'
									? 'is-active'
									: ''
							}` }
							value="sideways"
							label={
								<img
									src={ alignmentVerticalRotated }
									alt={ __( 'sideways', 'advanced-text' ) }
								/>
							}
							aria-label="sideways"
						/>
					</ToggleGroupControl>
					<RangeControl
						__next40pxDefaultSize
						label={ __( 'Max Content Width', 'advanced-text' ) }
						value={ attributes?.maxContentWidth }
						onChange={ ( value ) =>
							setAttributes( { maxContentWidth: value } )
						}
						min={ 50 }
						max={ 800 }
					/>
					<RangeControl
						__next40pxDefaultSize
						label={ __( 'Text Limit', 'advanced-text' ) }
						value={ attributes?.textLimit }
						onChange={ ( value ) =>
							setAttributes( { textLimit: value } )
						}
						min={ 5 }
						max={ 50 }
					/>
					<RangeControl
						__next40pxDefaultSize
						label={ __( 'Columns', 'advanced-text' ) }
						value={ attributes?.textColumns }
						onChange={ ( value ) =>
							setAttributes( { textColumns: value } )
						}
						min={ 1 }
						max={ 4 }
					/>
				</>
			);
		}

		if ( tab.name === 'styles' ) {
			return (
				<>
					<ChildItemStyle
						attributes={ attributes }
						setAttributes={ setAttributes }
						resetIcon={ resetIcon }
						type="advanceText"
					/>
				</>
			);
		}

		return null;
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Icon Settings', 'advanced-text' ) }
					className="panel-body-container"
				>
					<TabPanel
						className="my-custom-tabs"
						activeClass="is-active"
						tabs={ [
							{
								name: 'settings',
								title: (
									<>
										<Settings size={ 16 } />
										{ __( 'Settings', 'advanced-text' ) }
									</>
								),
								className: 'tab-settings',
							},
							{
								name: 'styles',
								title: (
									<>
										<Palette size={ 16 } />
										{ __( 'Style', 'advanced-text' ) }
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
				<RichText
					tagName={ attributes?.textType }
					value={ attributes.textContent }
					onChange={ ( content ) =>
						setAttributes( { textContent: content } )
					}
					placeholder={ __( 'List Text Here…', 'advanced-text' ) }
				/>
			</div>
		</>
	);
}
