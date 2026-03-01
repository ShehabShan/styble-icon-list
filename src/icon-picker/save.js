import { useBlockProps } from '@wordpress/block-editor';
import { getIconPickerBlockStyles } from '../utils/style.js';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save( {
		className: 'wp-block-create-block-icon-picker',
		style: { ...getIconPickerBlockStyles( attributes ) },
	} );

	// Build the rel attribute dynamically

	const renderIcon = () => {
		if ( attributes?.iconType === 'upload' && attributes?.mediaUrl ) {
			return <img src={ attributes?.mediaUrl } alt="" />;
		}

		// Render Dashicon if iconName exists
		if ( attributes?.iconType === 'library' ) {
			return (
				<span
					className={ `dashicons dashicons-${ attributes?.selectedIcon }` }
				/>
			);
		}

		return null;
	};

	return (
		<div { ...blockProps }>
			{ attributes?.url ? (
				<a
					href={ attributes?.url }
					target={ attributes?.newTab ? '_blank' : undefined }
					rel={
						attributes?.newTab ? 'noopener noreferrer' : undefined
					}
				>
					{ renderIcon() }
				</a>
			) : (
				renderIcon()
			) }
		</div>
	);
}
