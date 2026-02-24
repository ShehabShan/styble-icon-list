import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { getBlockStyles } from '../utils/style.js';

export default function save( { attributes } ) {
	const parentStyle = getBlockStyles( attributes );

	const blockProps = useBlockProps.save( {
		className: `is-items-space-between-${ attributes?.itemsGap } is-list-orientation-${ attributes?.listOrientation } is-separator-type-${ attributes?.separatorType }`,
		style: { ...parentStyle },
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
