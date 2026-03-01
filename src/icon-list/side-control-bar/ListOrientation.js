import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './side-bar-scss/customOrientation.scss';

const ListOrientation = ( { listOrientation, setAttributes } ) => {
	// 1. Constants to avoid string repetition
	const baseClass = 'custom-orientation-option';

	// 2. Helper function with optional chaining
	const getClassName = ( value ) =>
		`${ baseClass } ${ listOrientation === value ? 'is-active' : '' }`;

	return (
		<ToggleGroupControl
			className="custom-orientation"
			__next40pxDefaultSize
			isBlock
			label={ __( 'List Orientation', 'icon-list' ) }
			value={ listOrientation }
			// 3. Optional chaining on the function call
			onChange={ ( value ) =>
				setAttributes?.( { listOrientation: value } )
			}
		>
			<ToggleGroupControlOption
				className={ getClassName( 'horizontal' ) }
				aria-label="horizontal"
				label={ __( 'Horizontal', 'icon-list' ) }
				value="horizontal"
			/>
			<ToggleGroupControlOption
				className={ getClassName( 'vertical' ) }
				aria-label="vertical"
				label={ __( 'Vertical', 'icon-list' ) }
				value="vertical"
			/>
		</ToggleGroupControl>
	);
};

export default ListOrientation;
