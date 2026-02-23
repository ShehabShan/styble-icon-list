import {
	Popover,
	RangeControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './side-bar-scss/customPopoverContainer.scss';
import CustomHelperComponent from './CustomHelperComponent.js';

const SeparatorModel = ( {
	isModalOpen,
	toggleModal,
	closeAllModals,
	editIcon,
	setAttributes,
	attributes,
} ) => {
	return (
		<div style={ { position: 'relative' } }>
			<CustomHelperComponent
				hasIcon={ true }
				icon={ editIcon }
				toggleModal={ toggleModal }
				label={ __( 'Separator', 'icon-list' ) }
			/>

			{ isModalOpen( 'Separator' ) && (
				// ... imports
				<Popover
					onClose={ () => closeAllModals }
					placement="left-start" // Left-start usually matches the sidebar flyout better
					offset={ 15 }
				>
					<div className="custom-popover-container">
						{ /* Style Section */ }
						<ToggleGroupControl
							className="list-separator-style-toggle-group"
							__next40pxDefaultSize
							isBlock
							label={ __( 'Separator Style', 'icon-list' ) }
							value={ attributes?.separatorType }
							onChange={ ( value ) =>
								setAttributes( { separatorType: value } )
							}
						>
							<ToggleGroupControlOption
								className={ `list-separator-type-option ${
									attributes?.separatorType === 'none'
										? 'is-active'
										: ''
								}` }
								aria-label="none"
								label={ __( 'None', 'icon-list' ) }
								value="none"
							/>
							<ToggleGroupControlOption
								className={ `list-separator-type-option ${
									attributes?.separatorType === 'solid'
										? 'is-active'
										: ''
								}` }
								aria-label="solid"
								label={ __( 'Solid', 'icon-list' ) }
								value="solid"
							/>
							<ToggleGroupControlOption
								className={ `list-separator-type-option ${
									attributes?.separatorType === 'dashed'
										? 'is-active'
										: ''
								}` }
								aria-label="dashed"
								label={ __( 'Dashed', 'icon-list' ) }
								value="dashed"
							/>
							<ToggleGroupControlOption
								className={ `list-separator-type-option ${
									attributes?.separatorType === 'dotted'
										? 'is-active'
										: ''
								}` }
								aria-label="dotted"
								label={ __( 'Dotted', 'icon-list' ) }
								value="dotted"
							/>
						</ToggleGroupControl>

						{ /* Thickness Section */ }
						<RangeControl
							__next40pxDefaultSize
							label={ __( 'Separator Thickness', 'icon-list' ) }
							value={ attributes?.separatorThickness }
							onChange={ ( value ) =>
								setAttributes( { separatorThickness: value } )
							}
							min={ 1 }
							max={ 10 }
						/>

						{ /* Color Section */ }
						<CustomHelperComponent
							label={ __( 'Color', 'icon-list' ) }
							hasColor={ true }
							color={ attributes?.separatorColor }
							onColorChange={ ( value ) =>
								setAttributes( { separatorColor: value } )
							}
						/>
					</div>
				</Popover>
			) }
		</div>
	);
};

export default SeparatorModel;
