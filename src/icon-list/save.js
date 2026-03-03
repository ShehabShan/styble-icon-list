import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { getIconListStyle } from '../utils/style.js';

export default function save( { attributes } ) {
	const parentStyle = getIconListStyle( attributes );

	const blockProps = useBlockProps.save( {
		className: `advanced-style is-items-space-between-${ attributes?.itemsGap } is-list-orientation-${ attributes?.listOrientation } is-separator-type-${ attributes?.separatorType }`,
		style: { ...parentStyle },
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
