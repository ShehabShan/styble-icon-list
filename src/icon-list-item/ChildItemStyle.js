import {
	BaseControl,
	GradientPicker,
	SelectControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import '../icon-list/side-control-style-bar/customItemstyle.scss';
import '../icon-list/side-control-bar/side-bar-scss/customOrientation.scss';
import '../icon-list/side-control-bar/side-bar-scss/customPopoverContainer.scss';
import '../icon-list/side-control-bar/side-bar-scss/customItemWidth.scss';
import CustomHelperComponent from '../icon-list/side-control-bar/CustomHelperComponent.js';
import RangeControls from '../icon-list/side-control-style-bar/RangeControls.js';
import Typography from '../icon-list/side-control-style-bar/Typography.js';

const ChildItemStyle = ( props ) => {
	const { attributes, setAttributes, resetIcon } = props;

	const IconNone = (
		<span className="border-icon border-none">
			{ __( 'None', 'icon-list' ) }
		</span>
	);
	const IconSolid = <span className="border-icon border-solid"></span>;
	const IconDashed = <span className="border-icon border-dashed"></span>;
	const IconDotted = <span className="border-icon border-dotted"></span>;

	// 1. Define logic at the root level
	const isChild = [ 'advanceText', 'iconPicker' ].includes( props?.type );

	const borderKey = isChild ? 'childBorder' : 'border';
	const typeKey = isChild ? 'childBorderType' : 'borderType';
	const colorKey = isChild ? 'childBorderColor' : 'borderColor';
	const marginKey = isChild ? 'childMargin' : 'margin';
	const paddingKey = isChild ? 'childPadding' : 'padding';
	const borderRadiusKey = isChild ? 'childBorderRadius' : 'borderRadius';

	const hoverMarginKey = isChild ? 'childHoverMargin' : 'hoverMargin';
	const hoverPaddingKey = isChild ? 'childHoverPadding' : 'hoverPadding';
	const hoverBorderRadiusKey = isChild
		? 'childHoverborderRadius'
		: 'hoverborderRadius';
	const hoverBorderkey = isChild ? 'childHoverBorder' : 'hoverBorder';
	const hoverTypeKey = isChild ? 'childBorderType' : 'borderType';
	const hoverColorKey = isChild ? 'childBorderColor' : 'borderColor';

	const getOptionClass = ( value, targetKey ) => {
		const isActive = attributes[ targetKey ] === value;
		return `custom-border-option ${ isActive ? 'is-active' : '' }`;
	};

	return (
		<div>
			{ props?.type === 'iconPicker' && (
				<div className="control-section control-section--view-type">
					<SelectControl
						label="View"
						value={ attributes?.viewType }
						options={ [
							{ label: 'Default', value: 'default' },
							{ label: 'Framed', value: 'framed' },
							{ label: 'Stacked', value: 'Stacked' },
						] }
						onChange={ ( newView ) =>
							setAttributes( { viewType: newView } )
						}
					/>
				</div>
			) }

			{ props?.type === 'advanceText' && (
				<Typography
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			) }

			<ToggleGroupControl
				className="custom-orientation"
				__next40pxDefaultSize
				isBlock
				value={ attributes?.itemStyleType }
				onChange={ ( value ) =>
					setAttributes( { itemStyleType: value } )
				}
			>
				<ToggleGroupControlOption
					className={ `custom-orientation-option ${
						attributes?.itemStyleType === 'normal'
							? 'is-active'
							: ''
					}` }
					aria-label="normal"
					label={ __( 'Normal', 'icon-list' ) }
					value="normal"
				/>
				<ToggleGroupControlOption
					className={ `custom-orientation-option ${
						attributes?.itemStyleType === 'hover' ? 'is-active' : ''
					}` }
					aria-label="hover"
					label={ __( 'Hover', 'icon-list' ) }
					value="hover"
				/>
			</ToggleGroupControl>

			{ attributes?.itemStyleType === 'normal' && (
				<div className="background-control-container">
					{ /* 1. The Toggle Switch (Your Image UI) */ }

					{ props?.type === 'iconPicker' && (
						<div className="control-section control-section--icon-color">
							<CustomHelperComponent
								label={ __( 'Icon Colour', 'icon-list' ) }
								hasColor={ true }
								hasReset={ true }
								icon={ resetIcon }
								resetAttributes="iconColor"
								color={ attributes?.iconColor }
								setAttributes={ setAttributes }
								onColorChange={ ( color ) =>
									setAttributes( {
										iconColor: color,
									} )
								}
							/>
						</div>
					) }

					{ props?.type === 'advanceText' && (
						<div className="control-section control-section--icon-color">
							<CustomHelperComponent
								label={ __( 'Text Color', 'icon-list' ) }
								hasColor={ true }
								hasReset={ true }
								icon={ resetIcon }
								resetAttributes="textColor"
								color={ attributes?.textColor }
								setAttributes={ setAttributes }
								onColorChange={ ( color ) =>
									setAttributes( {
										textColor: color,
									} )
								}
							/>
						</div>
					) }

					<div className="control-section control-section--background-type">
						<BaseControl
							id={ 'lksa' }
							label={ __( 'Background Color', 'icon-list' ) }
						>
							<ToggleGroupControl
								className="background-type-toggel-group"
								value={ attributes?.backgroundType }
								onChange={ ( value ) =>
									setAttributes( {
										backgroundType: value,
									} )
								}
								isBlock
							>
								<ToggleGroupControlOption
									className={ `${
										attributes?.backgroundType === 'solid'
											? 'is-active'
											: ''
									}` }
									value="solid"
									aria-label={ __( 'Solid', 'text-domain' ) }
									icon={ 'square' } // You can use a Dashicon or SVG here
								/>
								<ToggleGroupControlOption
									className={ `${
										attributes?.backgroundType ===
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
					{ /* 2. Conditional Rendering */ }
					{ /*Inconsidaration */ }
					<div className="control-section control-section--background-value">
						{ attributes?.backgroundType === 'solid' ? (
							<CustomHelperComponent
								hasReset={ true }
								icon={ resetIcon }
								resetAttributes="backgroundColor"
								hasColor={ true }
								label={ __( 'Background Color', 'icon-list' ) }
								color={ attributes?.backgroundColor }
								setAttributes={ setAttributes }
								onColorChange={ ( color ) =>
									setAttributes( {
										backgroundColor: color,
										backgroundGradient: undefined,
									} )
								}
							/>
						) : (
							<GradientPicker
								value={ attributes?.backgroundGradient }
								onChange={ ( gradient ) =>
									setAttributes( {
										backgroundGradient: gradient,
										backgroundColor: undefined,
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
								value={ attributes[ typeKey ] }
								onChange={ ( value ) =>
									setAttributes( {
										[ typeKey ]: value,
									} )
								}
							>
								<ToggleGroupControlOption
									className={ getOptionClass(
										'none',
										borderKey
									) }
									value="none"
									label={ IconNone }
									aria-label={ __( 'None', 'icon-list' ) }
								/>
								<ToggleGroupControlOption
									className={ getOptionClass(
										'solid',
										borderKey
									) }
									value="solid"
									label={ IconSolid }
									aria-label={ __( 'Solid', 'icon-list' ) }
								/>
								<ToggleGroupControlOption
									className={ getOptionClass(
										'dashed',
										borderKey
									) }
									s
									value="dashed"
									label={ IconDashed }
									aria-label={ __( 'Dashed', 'icon-list' ) }
								/>
								<ToggleGroupControlOption
									className={ getOptionClass(
										'dotted',
										borderKey
									) }
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
							type={ borderKey }
						/>
					</div>
					<div className="control-section control-section--border-color">
						<CustomHelperComponent
							hasReset={ true }
							resetAttributes="borderColor"
							hasColor={ true }
							icon={ resetIcon }
							label={ __( 'Border Color', 'icon-list' ) }
							color={ attributes[ colorKey ] }
							setAttributes={ setAttributes }
							onColorChange={ ( color ) =>
								setAttributes( {
									[ colorKey ]: color,
								} )
							}
						/>
					</div>
					<div className="control-section control-section--border-radius">
						<RangeControls
							setAttributes={ setAttributes }
							attributes={ attributes }
							title={ 'border Radius' }
							type={ borderRadiusKey }
						/>
					</div>
					<div className="control-section control-section--box-shadow">
						<ToggleControl
							label={ __( 'Box Shadow', 'icon-list' ) }
							className="my-custom-troggle"
							checked={ attributes?.hasBoxShadow }
							onChange={ ( value ) =>
								setAttributes( {
									hasBoxShadow: value,
								} )
							}
						/>
					</div>
					<div className="control-section control-section--padding">
						<RangeControls
							setAttributes={ setAttributes }
							attributes={ attributes }
							title={ 'Padding' }
							type={ paddingKey }
						/>
					</div>
					<div className="control-section control-section--margin">
						<RangeControls
							setAttributes={ setAttributes }
							attributes={ attributes }
							title={ 'Margin' }
							type={ marginKey }
						/>
					</div>
				</div>
			) }

			{ attributes?.itemStyleType === 'hover' && (
				<>
					<div className="background-control-container">
						{ props?.type === 'iconPicker' && (
							<div className="control-section control-section--icon-color">
								<CustomHelperComponent
									label={ __( 'Icon Colour', 'icon-list' ) }
									hasColor={ true }
									hasReset={ true }
									icon={ resetIcon }
									resetAttributes="iconColor"
									color={ attributes?.hoverIconColor }
									setAttributes={ setAttributes }
									onColorChange={ ( color ) =>
										setAttributes( {
											hoverIconColor: color,
										} )
									}
								/>
							</div>
						) }
						{ /* 1. Background Section */ }
						<div className="control-section control-section--background-type">
							<BaseControl
								id={ 'lksa' }
								label={ __( 'Background Color', 'icon-list' ) }
							>
								<ToggleGroupControl
									className="background-type-toggel-group"
									value={ attributes?.hoverBackgroundType }
									onChange={ ( value ) =>
										setAttributes( {
											hoverBackgroundType: value,
										} )
									}
									isBlock
								>
									<ToggleGroupControlOption
										className={ `${
											attributes?.hoverBackgroundType ===
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
											attributes?.hoverBackgroundType ===
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
							{ attributes?.hoverBackgroundType === 'solid' ? (
								<CustomHelperComponent
									hasReset={ true }
									resetAttributes="hoverBackgroundColor"
									hasColor={ true }
									icon={ resetIcon }
									label={ __(
										'Background Color',
										'icon-list'
									) }
									color={ attributes?.hoverBackgroundColor }
									setAttributes={ setAttributes }
									onColorChange={ ( color ) =>
										setAttributes( {
											hoverBackgroundColor: color,
											hoverBackgroundGradient: undefined,
										} )
									}
								/>
							) : (
								<GradientPicker
									value={
										attributes?.hoverBackgroundGradient
									}
									onChange={ ( gradient ) =>
										setAttributes( {
											hoverBackgroundGradient: gradient,
											hoverBackgroundColor: undefined,
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
									value={ attributes[ hoverTypeKey ] }
									onChange={ ( value ) =>
										setAttributes( {
											[ hoverTypeKey ]: value,
										} )
									}
								>
									<ToggleGroupControlOption
										className={ getOptionClass(
											'none',
											hoverBorderkey
										) }
										value="none"
										label={ IconNone }
										aria-label={ __( 'None', 'icon-list' ) }
									/>
									<ToggleGroupControlOption
										className={ getOptionClass(
											'solid',
											hoverBorderkey
										) }
										value="solid"
										label={ IconSolid }
										aria-label={ __(
											'Solid',
											'icon-list'
										) }
									/>
									<ToggleGroupControlOption
										className={ getOptionClass(
											'dashed',
											hoverBorderkey
										) }
										value="dashed"
										label={ IconDashed }
										aria-label={ __(
											'Dashed',
											'icon-list'
										) }
									/>
									<ToggleGroupControlOption
										className={ getOptionClass(
											'dotted',
											hoverBorderkey
										) }
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
								type={ hoverBorderkey }
							/>
						</div>

						{ /* 5. Border Color */ }
						<div className="control-section control-section--border-color">
							<CustomHelperComponent
								hasReset={ true }
								resetAttributes="hoverBorderColor"
								hasColor={ true }
								icon={ resetIcon }
								label={ __( 'Border Color', 'icon-list' ) }
								color={ attributes[ hoverColorKey ] }
								setAttributes={ setAttributes }
								onColorChange={ ( color ) =>
									setAttributes( {
										[ hoverColorKey ]: color,
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
								type={ hoverBorderRadiusKey }
							/>
						</div>

						{ /* 7. Box Shadow */ }
						<div className="control-section control-section--box-shadow">
							<ToggleControl
								label={ __( 'Box Shadow', 'icon-list' ) }
								className="my-custom-troggle"
								checked={ attributes?.hoverHasBoxShadow }
								onChange={ ( value ) =>
									setAttributes( {
										hoverHasBoxShadow: value,
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
								type={ hoverPaddingKey }
							/>
						</div>

						{ /*9.individual Margin */ }

						<div className="control-section control-section--margin">
							<RangeControls
								setAttributes={ setAttributes }
								attributes={ attributes }
								title={ 'Margin' }
								type={ hoverMarginKey }
							/>
						</div>
					</div>
				</>
			) }
		</div>
	);
};

export default ChildItemStyle;
