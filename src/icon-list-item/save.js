import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

import * as LucideIcons from 'lucide-react';

export default function save( { attributes } ) {
	const { textContent, selectedIcon } = attributes;

	const SelectedIconComponent = LucideIcons[ selectedIcon ] || null;

	const blockProps = useBlockProps.save();

	return (
		// <div { ...blockProps }>
		// 	<InnerBlocks.Content />
		// </div>

		<div { ...blockProps }>
			<div>{ SelectedIconComponent && <SelectedIconComponent /> }</div>

			<RichText.Content tagName="h3" value={ textContent } />
		</div>
	);
}
