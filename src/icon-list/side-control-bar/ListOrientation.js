import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './side-bar-scss/customOrientation.scss';

const ListOrientation = ( { listOrientation, setAttributes } ) => {
	return (
		<ToggleGroupControl
			className="custom-orientation "
			__next40pxDefaultSize
			isBlock
			label={ __( 'List Orientation', 'icon-list' ) }
			value={ listOrientation }
			onChange={ ( value ) =>
				setAttributes( { listOrientation: value } )
			}
		>
			<ToggleGroupControlOption
				className={ `custom-orientation-option ${
					listOrientation === 'horizontal' ? 'is-active' : ''
				}` }
				aria-label="horizontal"
				label={ __( 'Horizontal', 'icon-list' ) }
				value="horizontal"
			/>
			<ToggleGroupControlOption
				className={ `custom-orientation-option ${
					listOrientation === 'vertical' ? 'is-active' : ''
				}` }
				aria-label="vertical"
				label={ __( 'Vertical', 'icon-list' ) }
				value="vertical"
			/>
		</ToggleGroupControl>
	);
};

export default ListOrientation;
