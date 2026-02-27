import { __ } from '@wordpress/i18n';
import {
	Popover,
	RangeControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import CustomHelperComponent from './CustomHelperComponent';
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
	return (
		<div style={ { position: 'relative' } }>
			<ToggleGroupControl
				className="custom-orientation"
				__next40pxDefaultSize
				isBlock
				label={ __( 'Item Width type', 'icon-list' ) }
				value={ attributes?.itemWidthType }
				onChange={ ( value ) =>
					setAttributes( { itemWidthType: value } )
				}
			>
				<ToggleGroupControlOption
					className={ `custom-orientation-option ${
						attributes?.itemWidthType === 'auto' ? 'is-active' : ''
					}` }
					aria-label="auto"
					label={ __( 'Auto', 'icon-list' ) }
					value="auto"
					onClick={ () => toggleModal( 'auto' ) }
				/>
				<ToggleGroupControlOption
					className={ `custom-orientation-option ${
						attributes?.itemWidthType === 'custom'
							? 'is-active'
							: ''
					}` }
					aria-label="custom"
					label={ __( 'Custom', 'icon-list' ) }
					value="custom"
					onClick={ () => toggleModal( 'custom' ) }
				/>
			</ToggleGroupControl>

			{ isModalOpen( 'custom' ) && (
				<Popover
					onClose={ () => closeAllModals() }
					placement="bottom"
					offset={ 15 }
				>
					<div className="custom-popover-container">
						{ /* Style Section */ }
						<ToggleGroupControl
							className="custom-orientation"
							__next40pxDefaultSize
							isBlock
							label={ __( 'Item Width Type', 'icon-list' ) }
							onChange={ ( value ) =>
								setAttributes( {
									itemWidthType: value,
								} )
							}
						>
							<ToggleGroupControlOption
								className={ `custom-orientation-option ${
									attributes?.itemWidthType === 'auto'
										? 'is-active'
										: ''
								}` }
								aria-label="auto"
								label={ __( 'Auto', 'icon-list' ) }
								value="auto"
								onClick={ () => closeAllModals }
							/>
							<ToggleGroupControlOption
								className={ `custom-orientation-option ${
									attributes?.itemWidthType === 'custom'
										? 'is-active'
										: ''
								}` }
								aria-label="custom"
								label={ __( 'Custom', 'icon-list' ) }
								value="custom"
							/>
						</ToggleGroupControl>

						{ /* Thickness Section */ }
						<RangeControl
							__next40pxDefaultSize
							value={ attributes?.itemsWidth }
							onChange={ ( value ) =>
								setAttributes( {
									itemsWidth: value,
								} )
							}
							min={ 50 }
							max={ 600 }
						/>
						{ /* Color Section */ }
					</div>
				</Popover>
			) }
		</div>
	);
};

export default CustomItemWidth;
