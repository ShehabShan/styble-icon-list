import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps( {
		className: 'wp-block-create-block-advanced-text',
	} );

	return (
		<RichText
			{ ...blockProps }
			tagName="h3" // This matches your previous design
			value={ attributes.textContent }
			onChange={ ( content ) =>
				setAttributes( { textContent: content } )
			}
			placeholder={ __( 'List Text Here…', 'advanced-text' ) }
		/>
	);
}
