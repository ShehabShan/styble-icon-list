import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			{ /* The Content: Handles just the text/typography */ }
			<RichText.Content
				tagName={ attributes?.textType }
				value={ attributes?.textContent }
			/>
		</div>
	);
}
