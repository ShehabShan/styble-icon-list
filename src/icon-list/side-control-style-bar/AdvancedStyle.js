import {
	BaseControl,
	GradientPicker,
	RangeControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import './customItemstyle.scss';
import '../side-control-bar/side-bar-scss/customOrientation.scss';
import '../side-control-bar/side-bar-scss/customPopoverContainer.scss';
import '../side-control-bar/side-bar-scss/customItemWidth.scss';
import CustomHelperComponent from '../side-control-bar/CustomHelperComponent.js';
import RangeControls from './RangeControls.js';

import alignmentLeft from '../../assests/section-alignment-left.svg';
import alignmentCenter from '../../assests/section-alignment-center.svg';
import alignmentRight from '../../assests/section-alignment-right.svg';

const AdvancedStyle = ( props ) => {
	const { attributes, setAttributes, resetIcon } = props;

	const IconNone = (
		<span className="border-icon border-none">
			{ __( 'None', 'icon-list' ) }
		</span>
	);
	const IconSolid = <span className="border-icon border-solid"></span>;
	const IconDashed = <span className="border-icon border-dashed"></span>;
	const IconDotted = <span className="border-icon border-dotted"></span>;

	return (
		<div>
			<RangeControl
				__next40pxDefaultSize
				label={ __( 'Width', 'icon-list' ) }
				value={ attributes?.sectionWidth }
				onChange={ ( value ) =>
					setAttributes( { sectionWidth: value } )
				}
				min={ 300 }
				max={ 1200 }
			/>
			<ToggleGroupControl
				className="list-preset"
				label={ __( 'Alignment', 'icon-list' ) }
				value={ attributes?.sectionAlignment }
				onChange={ ( value ) =>
					setAttributes( { sectionAlignment: value } )
				} // Use the new handler
				isBlock
				__next40pxDefaultSize
			>
				<ToggleGroupControlOption
					className={ `list-preset-option alignment-set ${
						attributes?.sectionAlignment === 'flex-start'
							? 'is-active'
							: ''
					}` }
					value="flex-start"
					label={
						<img
							src={ alignmentLeft }
							alt={ __( 'left', 'icon-list' ) }
						/>
					}
					aria-label="left"
				/>
				<ToggleGroupControlOption
					className={ `list-preset-option alignment-set ${
						attributes?.sectionAlignment === 'center'
							? 'is-active'
							: ''
					}` }
					value="center"
					label={
						<img
							src={ alignmentCenter }
							alt={ __( 'Center', 'icon-list' ) }
						/>
					}
					aria-label="center"
				/>
				<ToggleGroupControlOption
					className={ `list-preset-option alignment-set ${
						attributes?.sectionAlignment === 'flex-end'
							? 'is-active'
							: ''
					}` }
					value="flex-end"
					label={
						<img
							src={ alignmentRight }
							alt={ __( 'Right', 'icon-list' ) }
						/>
					}
					aria-label="right"
				/>
			</ToggleGroupControl>

			<ToggleGroupControl
				className="custom-orientation"
				__next40pxDefaultSize
				isBlock
				value={ attributes?.sectionItemStyleType }
				onChange={ ( value ) =>
					setAttributes( { sectionItemStyleType: value } )
				}
			>
				<ToggleGroupControlOption
					className={ `custom-orientation-option ${
						attributes?.sectionItemStyleType === 'normal'
							? 'is-active'
							: ''
					}` }
					aria-label="normal"
					label={ __( 'Normal', 'icon-list' ) }
					value="normal"
				/>
				<ToggleGroupControlOption
					className={ `custom-orientation-option ${
						attributes?.sectionItemStyleType === 'hover'
							? 'is-active'
							: ''
					}` }
					aria-label="hover"
					label={ __( 'Hover', 'icon-list' ) }
					value="hover"
				/>
			</ToggleGroupControl>

			{ attributes?.sectionItemStyleType === 'normal' && (
				<div className="background-control-container">
					{ /* 1. The Toggle Switch (Your Image UI) */ }

					<div className="control-section control-section--background-type">
						<BaseControl
							id={ 'hover-bg-type' }
							label={ __( 'Background Color', 'icon-list' ) }
						>
							<ToggleGroupControl
								className="background-type-toggel-group"
								value={ attributes?.sectionBackgroundType }
								onChange={ ( value ) =>
									setAttributes( {
										sectionBackgroundType: value,
										hoverSectionBackgroundType: value,
									} )
								}
								isBlock
							>
								<ToggleGroupControlOption
									className={ `${
										attributes?.sectionBackgroundType ===
										'solid'
											? 'is-active'
											: ''
									}` }
									value="solid"
									aria-label={ __( 'Solid', 'text-domain' ) }
									icon={ 'square' } // You can use a Dashicon or SVG here
								/>
								<ToggleGroupControlOption
									className={ `${
										attributes?.sectionBackgroundType ===
										'gradient'
											? 'is-active'
											: ''
									}` }
									value="gradient"
									aria-label={ __(
										'Gradient',
										'text-domain'
									) }
									icon={ 'marker' } // Represents the gradient icon
								/>
							</ToggleGroupControl>
						</BaseControl>
					</div>

					<div className="control-section control-section--background-value">
						{ attributes?.sectionBackgroundType === 'solid' ? (
							<CustomHelperComponent
								hasReset={ true }
								icon={ resetIcon }
								resetAttributes={ [
									'sectionBackgroundColor',
									'hoverSectionBackgroundColor',
								] }
								hasColor={ true }
								label={ __( 'Background Color', 'icon-list' ) }
								color={ attributes?.sectionBackgroundColor }
								setAttributes={ setAttributes }
								onColorChange={ ( color ) =>
									setAttributes( {
										sectionBackgroundColor: color,
										sectionBackgroundGradient: undefined,
										hoverSectionBackgroundColor: color,
										hoverSectionBackgroundGradient:
											undefined,
									} )
								}
							/>
						) : (
							<GradientPicker
								value={ attributes?.sectionBackgroundGradient }
								onChange={ ( gradient ) =>
									setAttributes( {
										sectionBackgroundGradient: gradient,
										sectionBackgroundColor: undefined,
										hoverSectionBackgroundGradient:
											gradient,
										hoverSectionBackgroundColor: undefined,
									} )
								}
							/>
						) }
					</div>
					<div className="control-section control-section--separator toggle-group-row">
						<div className="row-label">
							{ __( 'Border', 'icon-list' ) }
						</div>
						<div className="row-control">
							<ToggleGroupControl
								className="custom-border-toggle-group"
								__next40pxDefaultSize
								isBlock={ false }
								value={ attributes?.sectionBorderType }
								onChange={ ( value ) =>
									setAttributes( {
										sectionBorderType: value,
										hoverSectionBorderType: value,
									} )
								}
							>
								<ToggleGroupControlOption
									className={ `custom-border-option ${
										attributes?.sectionBorderType === 'none'
											? 'is-active'
											: ''
									}` }
									value="none"
									label={ IconNone }
									aria-label={ __( 'None', 'icon-list' ) }
								/>
								<ToggleGroupControlOption
									className={ `custom-border-option ${
										attributes?.sectionBorderType ===
										'solid'
											? 'is-active'
											: ''
									}` }
									value="solid"
									label={ IconSolid }
									aria-label={ __( 'Solid', 'icon-list' ) }
								/>
								<ToggleGroupControlOption
									className={ `custom-border-option ${
										attributes?.sectionBorderType ===
										'dashed'
											? 'is-active'
											: ''
									}` }
									value="dashed"
									label={ IconDashed }
									aria-label={ __( 'Dashed', 'icon-list' ) }
								/>
								<ToggleGroupControlOption
									className={ `custom-border-option ${
										attributes?.sectionBorderType ===
										'dotted'
											? 'is-active'
											: ''
									}` }
									value="dotted"
									label={ IconDotted }
									aria-label={ __( 'Dotted', 'icon-list' ) }
								/>
							</ToggleGroupControl>
						</div>
					</div>
					<div className="control-section control-section--border-range">
						<RangeControls
							setAttributes={ setAttributes }
							attributes={ attributes }
							isBorder={ true }
							title={ 'border Width' }
							type="sectionBorder"
						/>
					</div>
					<div className="control-section control-section--border-color">
						<CustomHelperComponent
							hasReset={ true }
							resetAttributes={ [
								'sectionBorderColor',
								'hoverSectionBorderColor',
							] }
							hasColor={ true }
							icon={ resetIcon }
							label={ __( 'Border Color', 'icon-list' ) }
							color={ attributes?.sectionBorderColor }
							setAttributes={ setAttributes }
							onColorChange={ ( color ) =>
								setAttributes( {
									sectionBorderColor: color,
									hoverSectionBorderColor: color,
								} )
							}
						/>
					</div>
					<div className="control-section control-section--border-radius">
						<RangeControls
							setAttributes={ setAttributes }
							attributes={ attributes }
							title={ 'border Radius' }
							type="sectionBorderRadius"
						/>
					</div>
					<div className="control-section control-section--box-shadow">
						<ToggleControl
							label={ __( 'Box Shadow', 'icon-list' ) }
							className="my-custom-troggle"
							checked={ attributes?.sectionHasBoxShadow }
							onChange={ ( value ) =>
								setAttributes( {
									sectionHasBoxShadow: value,
									hoverSectionHasBoxShadow: value,
								} )
							}
						/>
					</div>
					<div className="control-section control-section--padding">
						<RangeControls
							setAttributes={ setAttributes }
							attributes={ attributes }
							title={ 'Padding' }
							type="sectionPadding"
						/>
					</div>
					<div className="control-section control-section--margin">
						<RangeControls
							setAttributes={ setAttributes }
							attributes={ attributes }
							title={ 'Margin' }
							type="sectionMargin"
						/>
					</div>
				</div>
			) }

			{ attributes?.sectionItemStyleType === 'hover' && (
				<>
					<div className="background-control-container">
						{ /* 1. Background Section */ }
						<div className="control-section control-section--background-type">
							<BaseControl
								id={ 'lksa' }
								label={ __( 'Background Color', 'icon-list' ) }
							>
								<ToggleGroupControl
									className="background-type-toggel-group"
									value={
										attributes?.hoverSectionBackgroundType
									}
									onChange={ ( value ) =>
										setAttributes( {
											hoverSectionBackgroundType: value,
										} )
									}
									isBlock
								>
									<ToggleGroupControlOption
										className={ `${
											attributes?.hoverSectionBackgroundType ===
											'solid'
												? 'is-active'
												: ''
										}` }
										value="solid"
										aria-label={ __(
											'Solid',
											'text-domain'
										) }
										icon={ 'square' }
									/>
									<ToggleGroupControlOption
										className={ `${
											attributes?.hoverSectionBackgroundType ===
											'gradient'
												? 'is-active'
												: ''
										}` }
										value="gradient"
										aria-label={ __(
											'Gradient',
											'text-domain'
										) }
										icon={ 'marker' }
									/>
								</ToggleGroupControl>
							</BaseControl>
						</div>

						{ /* 2. Conditional Background Value */ }
						<div className="control-section control-section--background-value">
							{ attributes?.hoverSectionBackgroundType ===
							'solid' ? (
								<CustomHelperComponent
									hasReset={ true }
									resetAttributes="hoverSectionBackgroundColor"
									hasColor={ true }
									icon={ resetIcon }
									label={ __(
										'Background Color',
										'icon-list'
									) }
									color={
										attributes?.hoverSectionBackgroundColor
									}
									setAttributes={ setAttributes }
									onColorChange={ ( color ) =>
										setAttributes( {
											hoverSectionBackgroundColor: color,
											hoverSectionBackgroundGradient:
												undefined,
										} )
									}
								/>
							) : (
								<GradientPicker
									value={
										attributes?.hoverSectionBackgroundGradient
									}
									onChange={ ( gradient ) =>
										setAttributes( {
											hoverSectionBackgroundGradient:
												gradient,
											hoverSectionBackgroundColor:
												undefined,
										} )
									}
								/>
							) }
						</div>

						{ /* 3. Border Section */ }
						<div className="control-section control-section--separator toggle-group-row">
							<div className="row-label">
								{ __( 'Border', 'icon-list' ) }
							</div>
							<div className="row-control">
								<ToggleGroupControl
									className="custom-border-toggle-group"
									__next40pxDefaultSize
									isBlock={ false }
									value={ attributes?.hoverSectionBorderType }
									onChange={ ( value ) =>
										setAttributes( {
											hoverSectionBorderType: value,
										} )
									}
								>
									<ToggleGroupControlOption
										className={ `custom-border-option ${
											attributes?.hoverSectionBorderType ===
											'none'
												? 'is-active'
												: ''
										}` }
										value="none"
										label={ IconNone }
										aria-label={ __( 'None', 'icon-list' ) }
									/>
									<ToggleGroupControlOption
										className={ `custom-border-option ${
											attributes?.hoverSectionBorderType ===
											'solid'
												? 'is-active'
												: ''
										}` }
										value="solid"
										label={ IconSolid }
										aria-label={ __(
											'Solid',
											'icon-list'
										) }
									/>
									<ToggleGroupControlOption
										className={ `custom-border-option ${
											attributes?.hoverSectionBorderType ===
											'dashed'
												? 'is-active'
												: ''
										}` }
										value="dashed"
										label={ IconDashed }
										aria-label={ __(
											'Dashed',
											'icon-list'
										) }
									/>
									<ToggleGroupControlOption
										className={ `custom-border-option ${
											attributes?.hoverSectionBorderType ===
											'dotted'
												? 'is-active'
												: ''
										}` }
										value="dotted"
										label={ IconDotted }
										aria-label={ __(
											'Dotted',
											'icon-list'
										) }
									/>
								</ToggleGroupControl>
							</div>
						</div>

						{ /* 4. Border Width (RangeControls) */ }
						<div className="control-section control-section--border-range">
							<RangeControls
								setAttributes={ setAttributes }
								attributes={ attributes }
								isBorder={ true }
								title={ 'border Width' }
								type="hoverSectionBorder"
							/>
						</div>

						{ /* 5. Border Color */ }
						<div className="control-section control-section--border-color">
							<CustomHelperComponent
								hasReset={ true }
								resetAttributes={ [
									'hoverSectionBorderColor',
								] }
								hasColor={ true }
								icon={ resetIcon }
								label={ __( 'Border Color', 'icon-list' ) }
								color={ attributes?.hoverSectionBorderColor }
								setAttributes={ setAttributes }
								onColorChange={ ( color ) =>
									setAttributes( {
										hoverSectionBorderColor: color,
									} )
								}
							/>
						</div>

						{ /* 6. Border Radius */ }
						<div className="control-section control-section--border-radius">
							<RangeControls
								setAttributes={ setAttributes }
								attributes={ attributes }
								title={ 'border Radius' }
								type="hoverSectionBorderRadius"
							/>
						</div>

						{ /* 7. Box Shadow */ }
						<div className="control-section control-section--box-shadow">
							<ToggleControl
								label={ __( 'Box Shadow', 'icon-list' ) }
								className="my-custom-troggle"
								checked={ attributes?.hoverSectionHasBoxShadow }
								onChange={ ( value ) =>
									setAttributes( {
										hoverSectionHasBoxShadow: value,
									} )
								}
							/>
						</div>
					</div>
				</>
			) }
		</div>
	);
};

export default AdvancedStyle;
