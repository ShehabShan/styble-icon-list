import { RichText, useBlockProps } from '@wordpress/block-editor';
import { getBlockStyles } from '../utils/style.js'; // Ensure this path is correct

export default function save( { attributes } ) {
	// 1. Generate the same style object used in the editor
	const advanceTextStyle = getBlockStyles( attributes );

	// 2. Pass those styles into the save-version of blockProps
	const blockProps = useBlockProps.save( {
		className: 'wp-block-create-block-advanced-text',
		style: { ...advanceTextStyle },
	} );

	return (
		<div { ...blockProps }>
			{ /* RichText.Content handles the actual HTML tag 
			   (h1, h2, p, etc.) and the text content inside.
			*/ }
			<RichText.Content
				tagName={ attributes?.textType || 'p' }
				value={ attributes?.textContent }
			/>
		</div>
	);
}
