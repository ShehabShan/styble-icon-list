import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { getBlockStyles } from '../utils/style.js'; // Assuming you use the same utility

export default function save( { attributes } ) {
	const itemStyles = getBlockStyles( attributes );

	const blockProps = useBlockProps.save( {
		className: 'wp-block-create-block-icon-list-item',
		style: { ...itemStyles },
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
