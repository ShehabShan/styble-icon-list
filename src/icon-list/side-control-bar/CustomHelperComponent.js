import { Button, ColorPicker, Dropdown } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './side-bar-scss/customHelperComponent.scss';

const CustomHelperComponent = ( props ) => {
	return (
		<div className="custom-sidebar-row">
			<div className="row-label">{ props?.label }</div>
			<div className="row-control">
				{ props?.hasIcon && (
					<Button
						className="pencil-edit-button"
						icon={
							<img
								src={ props?.icon }
								alt={ __( 'Edit', 'icon-list' ) }
								style={ {
									width: '18px',
									height: '18px',
								} }
							/>
						}
						onClick={ () => props?.toggleModal( props?.label ) }
					/>
				) }

				{ props?.hasReset && (
					<Button
						className="pencil-edit-button"
						icon={
							<img
								src={ props?.icon }
								alt={ __( 'Edit', 'icon-list' ) }
								style={ {
									width: '18px',
									height: '18px',
								} }
							/>
						}
						onClick={ () =>
							props?.setAttributes( {
								[ props?.resetAttributes ]: undefined,
							} )
						}
					/>
				) }

				{ props?.hasColor && (
					<Dropdown
						renderToggle={ ( { isOpen, onToggle } ) => (
							<button
								className="inline-color-indicator"
								onClick={ onToggle }
								aria-expanded={ isOpen }
								style={ {
									backgroundColor: props?.color || '#000',
								} }
							/>
						) }
						renderContent={ () => (
							<div className="inline-color-popover">
								<ColorPicker
									color={ props?.color }
									onChange={ props?.onColorChange }
									enableAlpha={ true }
								/>
							</div>
						) }
					/>
				) }

				{ props?.hasText && (
					<Button
						className="custom-helper-button"
						onClick={ () => props?.toggleModal( props?.label ) }
						variant="secondary"
					>
						{ props?.text }
					</Button>
				) }
			</div>
		</div>
	);
};

export default CustomHelperComponent;
