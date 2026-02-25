import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

import './side-bar-scss/listPreset.scss';
import { __ } from '@wordpress/i18n';
const ListPreset = ( {
	preset,
	setAttributes,
	presetOne,
	presetTwo,
	presetThree,
} ) => {
	// Define the actual values each preset represents
	const presetData = {
		'preset-1': {
			backgroundColor: '#FFFFFF',
			borderColor: '#FFFFFF',
			borderType: 'none',
			hadBoxShadow: false,
			// Define values for preset 1
		},
		'preset-2': {
			backgroundColor: '#F5F5FF',
			borderColor: '#4649FF',
			borderType: 'solid',
			hadBoxShadow: false, // Assuming boolean based on your JSON

			// Border Widths (Individual attributes)
			borderTop: 1,
			borderRight: 1,
			borderBottom: 1,
			borderLeft: 1,

			// Border Radius (Individual attributes)
			borderRadiusTop: 30,
			borderRadiusRight: 30,
			borderRadiusBottom: 30,
			borderRadiusLeft: 30,
		},
		'preset-3': {
			// Define values for preset 3
		},
	};

	const handlePresetChange = ( value ) => {
		const selectedStyles = presetData[ value ];

		if ( selectedStyles ) {
			setAttributes( {
				preset: value,
				...selectedStyles,
			} );
		} else {
			// If they click a preset that isn't defined, just update the name
			setAttributes( { preset: value } );
		}
	};

	return (
		<ToggleGroupControl
			className="list-preset"
			label="List Preset"
			value={ preset }
			onChange={ handlePresetChange } // Use the new handler
			isBlock
			__next40pxDefaultSize
		>
			<ToggleGroupControlOption
				className={ `list-preset-option ${
					preset === 'preset-1' ? 'is-active' : ''
				}` }
				value="preset-1"
				label={
					<img
						src={ presetOne }
						alt={ __( 'Preset 1', 'icon-list' ) }
					/>
				}
				aria-label="Preset-1"
			/>
			<ToggleGroupControlOption
				className={ `list-preset-option ${
					preset === 'preset-2' ? 'is-active' : ''
				}` }
				value="preset-2"
				label={
					<img
						src={ presetTwo }
						alt={ __( 'Preset 2', 'icon-list' ) }
					/>
				}
				aria-label="Preset-2"
			/>
			<ToggleGroupControlOption
				className={ `list-preset-option ${
					preset === 'preset-3' ? 'is-active' : ''
				}` }
				value="preset-3"
				label={
					<img
						src={ presetThree }
						alt={ __( 'Preset 3', 'icon-list' ) }
					/>
				}
				aria-label="Preset-3"
			/>
		</ToggleGroupControl>
	);
};

export default ListPreset;
