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
	return (
		<ToggleGroupControl
			className="list-preset"
			label="List Preset"
			value={ preset }
			onChange={ ( value ) => setAttributes( { preset: value } ) }
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
