import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { getBlockStyles } from '../utils/style.js';

export default function save( { attributes } ) {
	const parentStyle = getBlockStyles( attributes );

	const blockProps = useBlockProps.save( {
		className: `advanced-style is-items-space-between-${ attributes?.itemsGap } is-list-orientation-${ attributes?.listOrientation } is-separator-type-${ attributes?.separatorType }`,
		style: { ...parentStyle },
	} );

	const innerBlocksProps = useInnerBlocksProps.save( {
		className: 'icon-list-inner',
	} );

	return (
		<div { ...blockProps }>
			<div { ...innerBlocksProps } />
		</div>
	);
}
