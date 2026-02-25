import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { itemsWidth } = attributes;

	const blockProps = useBlockProps.save( {
		style: { width: `${ itemsWidth }px` },
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
