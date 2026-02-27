import { useBlockProps } from '@wordpress/block-editor';
import * as LucideIcons from 'lucide-react';

import { getBlockStyles } from '../utils/style.js';

export default function save( { attributes } ) {
	const { selectedIcon, globalIcon } = attributes;

	const iconPickerStyle = getBlockStyles( attributes );

	// 2. Pass the styles into useBlockProps.save()
	const blockProps = useBlockProps.save( {
		className: 'wp-block-create-block-icon-picker',
		style: { ...iconPickerStyle },
	} );

	const iconName = attributes?.selectedIcon || globalIcon || 'ActivitySquare';

	const SelectedIcon = LucideIcons[ iconName ];

	return <div { ...blockProps }>{ SelectedIcon && <SelectedIcon /> }</div>;
}
