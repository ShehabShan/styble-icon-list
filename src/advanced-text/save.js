import { RichText, useBlockProps } from '@wordpress/block-editor';
import { getChildBlockStyles } from '../utils/style.js'; // Ensure this path is correct

export default function save( { attributes } ) {
	// 1. Generate the same style object used in the editor
	const advanceTextStyle = getChildBlockStyles( attributes );

	// 2. Pass those styles into the save-version of blockProps
	const blockProps = useBlockProps.save( {
		className: 'wp-block-create-block-advanced-text',
		style: { ...advanceTextStyle },
	} );

	return (
		<div { ...blockProps }>
			<RichText.Content
				tagName={ attributes?.textType || 'p' }
				value={ attributes?.textContent }
			/>
		</div>
	);
}
