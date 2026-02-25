import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import advanceText from '../assests/advance-text.svg';

registerBlockType( metadata.name, {
	...metadata,
	icon: () => (
		<img
			src={ advanceText }
			style={ { width: '24px', height: '24px' } }
			alt="Block Icon"
		/>
	),

	edit: Edit,

	save,
} );
