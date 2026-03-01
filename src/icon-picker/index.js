import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import iconPicker from '../assests/icon-picker-color.svg';

registerBlockType( metadata.name, {
	...metadata,
	icon: () => (
		<img
			src={ iconPicker }
			style={ { width: '24px', height: '24px', color: '#4649FF' } }
			alt="Block Icon"
		/>
	),
	edit: Edit,

	save,
} );
