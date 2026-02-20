import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		itemsGap,
		listOrientation,
		separatorType,
		separatorThickness,
		separatorColor,
		iconSize,
		fontFamily,
		fontSize,
		fontWeight,
		fontHeight,
		letterSpacing,
		wordSpacing,
		isItalic,
		isUnderline,
		isStrikethrough,
		textTransform,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: `is-items-space-between-${ itemsGap } is-list-orientation-${ listOrientation } is-separator-type-${ separatorType }`,
		style: {
			'--font-family': fontFamily,
			'--separator-thickness': `${ separatorThickness }px`,
			'--separator-color': separatorColor,
			'--separator-style': separatorType,
			'--icon-size': `${ iconSize }px`,

			'--font-size': `${ fontSize }px`,
			'--font-weight': fontWeight,
			'--font-height': fontHeight,
			'--letter-spacing': `${ letterSpacing }px`,
			'--word-spacing': `${ wordSpacing }px`,
			'--font-style-italic': isItalic ? 'italic' : 'normal',
			'--text-decoration':
				`${ isUnderline ? 'underline' : '' } ${
					isStrikethrough ? 'line-through' : ''
				}`.trim() || 'none',
			'--text-transform': textTransform,
		},
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
