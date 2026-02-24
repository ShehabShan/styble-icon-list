import {
	BaseControl,
	GradientPicker,
	Popover,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import CustomHelperComponent from '../side-control-bar/CustomHelperComponent';
import { __ } from '@wordpress/i18n';
import './customItemstyle.scss';
import '../side-control-bar/side-bar-scss/customOrientation.scss';
import '../side-control-bar/side-bar-scss/customPopoverContainer.scss';
import '../side-control-bar/side-bar-scss/customItemWidth.scss';

import RangeControls from './RangeControls';

const ItemStyle = ( {
	attributes,
	setAttributes,
	editIcon,
	resetIcon,
	isModalOpen,
	toggleModal,
	closeAllModals,
} ) => {
	const IconNone = (
		<span className="border-icon border-none">
			{ __( 'None', 'icon-list' ) }
		</span>
	);
	const IconSolid = <span className="border-icon border-solid"></span>;
	const IconDashed = <span className="border-icon border-dashed"></span>;
	const IconDotted = <span className="border-icon border-dotted"></span>;

	return (
		<div style={ { position: 'relative' } }>
			<CustomHelperComponent
				hasIcon={ true }
				icon={ editIcon }
				toggleModal={ toggleModal }
				label={ __( 'ItemStyle', 'icon-list' ) }
			/>

			{ isModalOpen( 'ItemStyle' ) && (
				// ... imports
				<Popover
					onClose={ () => closeAllModals }
					placement="left-start" // Left-start usually matches the sidebar flyout better
					offset={ 15 }
				>
					<div className="custom-popover-container">
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
									attributes?.itemStyleType === 'hover'
										? 'is-active'
										: ''
								}` }
								aria-label="hover"
								label={ __( 'Hover', 'icon-list' ) }
								value="hover"
							/>
						</ToggleGroupControl>

						{ attributes?.itemStyleType === 'normal' && (
							<div className="background-control-container">
								{ /* 1. The Toggle Switch (Your Image UI) */ }

								<div className="control-section control-section--background-type">
									<BaseControl
										id={ 'lksa' }
										label={ __(
											'Background Color',
											'icon-list'
										) }
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
													attributes?.backgroundType ===
													'solid'
														? 'is-active'
														: ''
												}` }
												value="solid"
												aria-label={ __(
													'Solid',
													'text-domain'
												) }
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

								<div className="control-section control-section--background-value">
									{ attributes?.backgroundType === 'solid' ? (
										<CustomHelperComponent
											hasReset={ true }
											resetAttributes="backgroundColor"
											hasColor={ true }
											icon={ resetIcon }
											toggleModal={ toggleModal }
											label={ __(
												'Background Color',
												'icon-list'
											) }
											color={
												attributes?.backgroundColor
											}
											setAttributes={ setAttributes }
											onColorChange={ ( color ) =>
												setAttributes( {
													backgroundColor: color,
													backgroundGradient:
														undefined,
												} )
											}
										/>
									) : (
										<GradientPicker
											value={
												attributes?.backgroundGradient
											}
											onChange={ ( gradient ) =>
												setAttributes( {
													backgroundGradient:
														gradient,
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
											value={ attributes?.borderType }
											onChange={ ( value ) =>
												setAttributes( {
													borderType: value,
												} )
											}
										>
											<ToggleGroupControlOption
												className={ `custom-border-option ${
													attributes?.borderType ===
													'none'
														? 'is-active'
														: ''
												}` }
												value="none"
												label={ IconNone }
												aria-label={ __(
													'None',
													'icon-list'
												) }
											/>
											<ToggleGroupControlOption
												className={ `custom-border-option ${
													attributes?.borderType ===
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
													attributes?.borderType ===
													'dashed'
														? 'is-active'
														: ''
												}` }
												s
												value="dashed"
												label={ IconDashed }
												aria-label={ __(
													'Dashed',
													'icon-list'
												) }
											/>
											<ToggleGroupControlOption
												className={ `custom-border-option ${
													attributes?.borderType ===
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

								<div className="control-section control-section--border-range">
									<RangeControls
										setAttributes={ setAttributes }
										attributes={ attributes }
										isBorder={ true }
										title={ 'border Width' }
										isModalOpen={ isModalOpen }
										toggleModal={ toggleModal }
										closeAllModals={ closeAllModals }
										type="border"
									/>
								</div>

								<div className="control-section control-section--border-color">
									<CustomHelperComponent
										hasReset={ true }
										resetAttributes="borderColor"
										hasColor={ true }
										icon={ resetIcon }
										toggleModal={ toggleModal }
										label={ __(
											'Border Color',
											'icon-list'
										) }
										color={ attributes?.borderColor }
										setAttributes={ setAttributes }
										onColorChange={ ( color ) =>
											setAttributes( {
												borderColor: color,
											} )
										}
									/>
								</div>

								<div className="control-section control-section--border-radius">
									<RangeControls
										setAttributes={ setAttributes }
										attributes={ attributes }
										title={ 'border Radius' }
										isModalOpen={ isModalOpen }
										toggleModal={ toggleModal }
										closeAllModals={ closeAllModals }
										type="borderRadius"
									/>
								</div>

								<div className="control-section control-section--box-shadow">
									<ToggleControl
										label={ __(
											'Box Shadow',
											'icon-list'
										) }
										className="my-custom-troggle"
										checked={ attributes?.hasBoxShadow }
										onChange={ ( value ) =>
											setAttributes( {
												hasBoxShadow: value,
											} )
										}
									/>
								</div>

								<div className="control-section control-section--item-padding">
									<RangeControls
										setAttributes={ setAttributes }
										attributes={ attributes }
										title={ 'Padding' }
										type="padding"
									/>
								</div>
							</div>
						) }
						{ attributes?.itemStyleType === 'hover' && (
							<div className="background-control-container">
								{ /* 1. Background Section */ }
								<div className="control-section control-section--background-type">
									<BaseControl
										id={ 'lksa' }
										label={ __(
											'Background Color',
											'icon-list'
										) }
									>
										<ToggleGroupControl
											className="background-type-toggel-group"
											value={
												attributes?.hoverBackgroundType
											}
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
									{ attributes?.hoverBackgroundType ===
									'solid' ? (
										<CustomHelperComponent
											hasReset={ true }
											resetAttributes="hoverBackgroundColor"
											hasColor={ true }
											icon={ resetIcon }
											toggleModal={ toggleModal }
											label={ __(
												'Background Color',
												'icon-list'
											) }
											color={
												attributes?.hoverBackgroundColor
											}
											setAttributes={ setAttributes }
											onColorChange={ ( color ) =>
												setAttributes( {
													hoverBackgroundColor: color,
													hoverBackgroundGradient:
														undefined,
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
													hoverBackgroundGradient:
														gradient,
													hoverBackgroundColor:
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
											value={
												attributes?.hoverBorderType
											}
											onChange={ ( value ) =>
												setAttributes( {
													hoverBorderType: value,
												} )
											}
										>
											<ToggleGroupControlOption
												className={ `custom-border-option ${
													attributes?.hoverBorderType ===
													'none'
														? 'is-active'
														: ''
												}` }
												value="none"
												label={ IconNone }
												aria-label={ __(
													'None',
													'icon-list'
												) }
											/>
											<ToggleGroupControlOption
												className={ `custom-border-option ${
													attributes?.hoverBorderType ===
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
													attributes?.hoverBorderType ===
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
													attributes?.hoverBorderType ===
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
										type="hoverBorder"
									/>
								</div>

								{ /* 5. Border Color */ }
								<div className="control-section control-section--border-color">
									<CustomHelperComponent
										hasReset={ true }
										resetAttributes="hoverBorderColor"
										hasColor={ true }
										icon={ resetIcon }
										toggleModal={ toggleModal }
										label={ __(
											'Border Color',
											'icon-list'
										) }
										color={ attributes?.hoverBorderColor }
										setAttributes={ setAttributes }
										onColorChange={ ( color ) =>
											setAttributes( {
												hoverBorderColor: color,
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
										isModalOpen={ isModalOpen }
										toggleModal={ toggleModal }
										closeAllModals={ closeAllModals }
										type="hoverBorderRadius"
									/>
								</div>

								{ /* 7. Box Shadow */ }
								<div className="control-section control-section--box-shadow">
									<ToggleControl
										label={ __(
											'Box Shadow',
											'icon-list'
										) }
										className="my-custom-troggle"
										checked={
											attributes?.hoverHasBoxShadow
										}
										onChange={ ( value ) =>
											setAttributes( {
												hoverHasBoxShadow: value,
											} )
										}
									/>
								</div>

								{ /* 8. Item Padding */ }
								<div className="control-section control-section--item-padding">
									<RangeControls
										setAttributes={ setAttributes }
										attributes={ attributes }
										title={ 'Padding' }
										type="hoverPadding"
									/>
								</div>
							</div>
						) }
					</div>
				</Popover>
			) }
		</div>
	);
};

export default ItemStyle;
