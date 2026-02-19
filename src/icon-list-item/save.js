import { RichText, useBlockProps } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';
import { iconLibrary } from '../utils/dataCenter';

export default function save( { attributes } ) {
	const { textContent, selectedIcon, iconSize, itemsWidth } = attributes;
	const SelectedIconComponent = selectedIcon
		? iconLibrary.find( ( item ) => item.name === selectedIcon )?.icon
		: null;

	return (
		<div
			{ ...useBlockProps.save( {
				style: { width: `${ itemsWidth }px` },
			} ) }
		>
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
