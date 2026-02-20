import { RichText, useBlockProps } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';
import { iconLibrary } from '../utils/dataCenter';

export default function save( { attributes } ) {
	const { textContent, selectedIcon, iconSize, itemsWidth } = attributes;

	const SelectedIconComponent = selectedIcon
		? iconLibrary.find( ( item ) => item.name === selectedIcon )?.icon
		: null;

	const blockProps = useBlockProps.save( {
		style: { width: `${ itemsWidth }px` },
	} );

	return (
		<div { ...blockProps }>
			<div>
				{ SelectedIconComponent && (
					<SelectedIconComponent size={ iconSize } />
				) }
			</div>
			<RichText.Content
				tagName="h3"
				value={ textContent }
				placeholder={ __( 'List Text Here', 'icon-list' ) }
			/>
		</div>
	);
}
