import { useBlockProps } from '@wordpress/block-editor';
import { getChildBlockStyles } from '../utils/style.js';

export default function save( { attributes } ) {
	const selectedIcon =
		attributes?.selectedIcon || attributes?.globalSelectedIcon;

	const mediaUrl = attributes?.mediaUrl || attributes?.globalMediaUrl;

	const iconType = attributes?.iconType || attributes?.globalIconType;

	const blockProps = useBlockProps.save( {
		className: 'wp-block-create-block-icon-picker',
		style: { ...getChildBlockStyles( attributes ) },
	} );

	// Build the rel attribute dynamically

	const renderIcon = () => {
		if ( iconType === 'upload' && mediaUrl ) {
			return <img src={ mediaUrl } alt="" />;
		}

		// Render Dashicon if iconName exists
		if ( iconType === 'library' ) {
			return (
				<span className={ `dashicons dashicons-${ selectedIcon }` } />
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
