import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import './editor.scss';
import { iconLibrary } from '../utils/dataCenter.js';
import { useParentAttributes } from '../hooks/useParentAttributes.js';
import { useEffect } from '@wordpress/element';

// This is the checkmark icon from your image

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { textContent } = attributes;
	const parentAttributes = useParentAttributes( clientId );

	const { selectedIcon, iconSize, itemsWidth, itemWidthType, iconColor } =
		parentAttributes;

	const SelectedIconComponent = selectedIcon
		? iconLibrary.find( ( item ) => item.name === selectedIcon )?.icon
		: null;

	const blockProps = useBlockProps( {
		style: {
			width: itemWidthType === 'custom' ? `${ itemsWidth }px` : 'auto',
		},
	} );

	useEffect( () => {
		setAttributes( {
			selectedIcon,
			iconSize,
			itemsWidth,
			itemWidthType,
			iconColor,
		} );
	}, [ selectedIcon, iconSize, itemsWidth, itemWidthType, iconColor ] );

	return (
		<div { ...blockProps }>
			<div>
				{ SelectedIconComponent && (
					<SelectedIconComponent
						size={ iconSize }
						color={ iconColor }
					/>
				) }
			</div>
			<RichText
				tagName="h3"
				value={ textContent }
				placeholder={ __( 'List Text Here', 'icon-list' ) }
				onChange={ ( newValue ) =>
					setAttributes( { textContent: newValue } )
				}
			/>
		</div>
	);
}
