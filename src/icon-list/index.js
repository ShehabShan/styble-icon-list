import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import iconList from '../assests/icon-list.svg';

registerBlockType( metadata.name, {
	...metadata,
	icon: () => (
		<img
			src={ iconList }
			style={ { width: '24px', height: '24px' } }
			alt="Block Icon"
		/>
	),
	edit: Edit,

	save,
} );
