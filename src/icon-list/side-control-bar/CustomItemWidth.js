import { __ } from '@wordpress/i18n';
import {
	Popover,
	RangeControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import './side-bar-scss/customItemWidth.scss';
import './side-bar-scss/customPopoverContainer.scss';
import './side-bar-scss/customOrientation.scss';

const CustomItemWidth = ( {
	isModalOpen,
	toggleModal,
	closeAllModals,
	attributes,
	setAttributes,
} ) => {
	// 1. Define base class names to avoid repetition
	const baseToggleClass = 'custom-orientation';
	const baseOptionClass = 'custom-orientation-option';

	// 2. Determine active states once
	const isAuto = attributes?.itemWidthType === 'auto';
	const isCustom = attributes?.itemWidthType === 'custom';

	// 3. Helper for generating the class string
	const getOptionClass = ( isActive ) =>
		`${ baseOptionClass } ${ isActive ? 'is-active' : '' }`;

	return (
		<div style={ { position: 'relative' } }>
			<ToggleGroupControl
				className={ baseToggleClass }
				__next40pxDefaultSize
				isBlock
				label={ __( 'Item Width type', 'icon-list' ) }
				value={ attributes?.itemWidthType }
				onChange={ ( value ) =>
					setAttributes( { itemWidthType: value } )
				}
			>
				<ToggleGroupControlOption
					className={ getOptionClass( isAuto ) }
					label={ __( 'Auto', 'icon-list' ) }
					value="auto"
					onClick={ () => toggleModal( 'auto' ) }
				/>
				<ToggleGroupControlOption
					className={ getOptionClass( isCustom ) }
					label={ __( 'Custom', 'icon-list' ) }
					value="custom"
					onClick={ () => toggleModal( 'custom' ) }
				/>
			</ToggleGroupControl>

			{ isModalOpen( 'custom' ) && (
				<Popover
					onClose={ closeAllModals }
					placement="bottom"
					offset={ 15 }
				>
					<div className="custom-popover-container">
						<ToggleGroupControl
							className={ baseToggleClass }
							__next40pxDefaultSize
							isBlock
							label={ __( 'Item Width Type', 'icon-list' ) }
							value={ attributes?.itemWidthType }
							onChange={ ( value ) =>
								setAttributes( { itemWidthType: value } )
							}
						>
							<ToggleGroupControlOption
								className={ getOptionClass( isAuto ) }
								label={ __( 'Auto', 'icon-list' ) }
								value="auto"
								// Note: Fixed potential bug here - should be a function call
								onClick={ closeAllModals }
							/>
							<ToggleGroupControlOption
								className={ getOptionClass( isCustom ) }
								label={ __( 'Custom', 'icon-list' ) }
								value="custom"
							/>
						</ToggleGroupControl>

						<RangeControl
							__next40pxDefaultSize
							value={ attributes?.itemsWidth }
							onChange={ ( value ) =>
								setAttributes( { itemsWidth: value } )
							}
							min={ 50 }
							max={ 600 }
						/>
					</div>
				</Popover>
			) }
		</div>
	);
};

export default CustomItemWidth;
