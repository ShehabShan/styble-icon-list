import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		itemsGap,
		listOrientation,
		separatorType,
		separatorThickness,
		separatorColor,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: `is-items-space-between-${ itemsGap } is-list-orientation-${ listOrientation } is-separator-type-${ separatorType }`,
		style: {
			'--separator-thickness': `${ separatorThickness }px`,
			'--separator-color': separatorColor,
			'--separator-style': separatorType,
		},
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
