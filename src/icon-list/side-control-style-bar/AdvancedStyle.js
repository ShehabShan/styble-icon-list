import {
	BaseControl,
	GradientPicker,
	SelectControl,
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
								resetAttributes="sectionBackgroundColor"
								hasColor={ true }
								label={ __( 'Background Color', 'icon-list' ) }
								color={ attributes?.sectionBackgroundColor }
								setAttributes={ setAttributes }
								onColorChange={ ( color ) =>
									setAttributes( {
										sectionBackgroundColor: color,
										sectionBackgroundGradient: undefined,
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
							resetAttributes="sectionBorderColor"
							hasColor={ true }
							icon={ resetIcon }
							label={ __( 'Border Color', 'icon-list' ) }
							color={ attributes?.sectionBorderColor }
							setAttributes={ setAttributes }
							onColorChange={ ( color ) =>
								setAttributes( {
									sectionBorderColor: color,
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
										attributes?.sectionHoverBackgroundType
									}
									onChange={ ( value ) =>
										setAttributes( {
											sectionHoverBackgroundType: value,
										} )
									}
									isBlock
								>
									<ToggleGroupControlOption
										className={ `${
											attributes?.sectionHoverBackgroundType ===
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
											attributes?.sectionHoverBackgroundType ===
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
							{ attributes?.sectionHoverBackgroundType ===
							'solid' ? (
								<CustomHelperComponent
									hasReset={ true }
									resetAttributes="sectionHoverBackgroundColor"
									hasColor={ true }
									icon={ resetIcon }
									label={ __(
										'Background Color',
										'icon-list'
									) }
									color={
										attributes?.sectionHoverBackgroundColor
									}
									setAttributes={ setAttributes }
									onColorChange={ ( color ) =>
										setAttributes( {
											sectionHoverBackgroundColor: color,
											sectionHoverBackgroundGradient:
												undefined,
										} )
									}
								/>
							) : (
								<GradientPicker
									value={
										attributes?.sectionHoverBackgroundGradient
									}
									onChange={ ( gradient ) =>
										setAttributes( {
											sectionHoverBackgroundGradient:
												gradient,
											sectionHoverBackgroundColor:
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
									value={ attributes?.sectionHoverBorderType }
									onChange={ ( value ) =>
										setAttributes( {
											sectionHoverBorderType: value,
										} )
									}
								>
									<ToggleGroupControlOption
										className={ `custom-border-option ${
											attributes?.sectionHoverBorderType ===
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
											attributes?.sectionHoverBorderType ===
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
											attributes?.sectionHoverBorderType ===
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
											attributes?.sectionHoverBorderType ===
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
								type="sectionHoverBorder"
							/>
						</div>

						{ /* 5. Border Color */ }
						<div className="control-section control-section--border-color">
							<CustomHelperComponent
								hasReset={ true }
								resetAttributes="sectionHoverBorderColor"
								hasColor={ true }
								icon={ resetIcon }
								label={ __( 'Border Color', 'icon-list' ) }
								color={ attributes?.sectionHoverBorderColor }
								setAttributes={ setAttributes }
								onColorChange={ ( color ) =>
									setAttributes( {
										sectionHoverBorderColor: color,
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
								type="sectionHoverBorderRadius"
							/>
						</div>

						{ /* 7. Box Shadow */ }
						<div className="control-section control-section--box-shadow">
							<ToggleControl
								label={ __( 'Box Shadow', 'icon-list' ) }
								className="my-custom-troggle"
								checked={ attributes?.sectionHoverHasBoxShadow }
								onChange={ ( value ) =>
									setAttributes( {
										sectionHoverHasBoxShadow: value,
									} )
								}
							/>
						</div>

						{ /* 8. Item Padding */ }
						<div className="control-section control-section--padding">
							<RangeControls
								setAttributes={ setAttributes }
								attributes={ attributes }
								title={ 'Padding' }
								type="sectionHoverPadding"
							/>
						</div>

						{ /*9.individual Margin */ }

						<div className="control-section control-section--margin">
							<RangeControls
								setAttributes={ setAttributes }
								attributes={ attributes }
								title={ 'Margin' }
								type="sectionHoverMargin"
							/>
						</div>
					</div>
				</>
			) }
		</div>
	);
};

export default AdvancedStyle;
