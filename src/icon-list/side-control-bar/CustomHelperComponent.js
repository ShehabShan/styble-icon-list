import { PanelColorSettings } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './side-bar-scss/customHelperComponent.scss';

const CustomHelperComponent = ( props ) => {
	return (
		<div className="custom-sidebar-row">
			<div className="row-label">{ props?.label }</div>
			<div className="row-control">
				{ props?.icon && (
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
						onClick={ props?.toggleModal }
					/>
				) }

				{ props?.hasColor && (
					<PanelColorSettings
						colorSettings={ [
							{
								value: props?.color,
								onChange: props?.onColorChange,
							},
						] }
					/>
				) }

				{ props?.hasText && (
					<Button
						className="custom-helper-button"
						onClick={ props?.onClick }
						variant="secondary" // Use WP secondary style as a base
					>
						{ props?.text }
					</Button>
				) }
			</div>
		</div>
	);
};

export default CustomHelperComponent;
