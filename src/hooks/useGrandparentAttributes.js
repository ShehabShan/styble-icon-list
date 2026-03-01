import { useSelect } from '@wordpress/data';

export const useGrandparentAttributes = ( clientId ) =>
	useSelect(
		( select ) => {
			const { getBlockRootClientId, getBlockAttributes } =
				select( 'core/block-editor' );

			const parentId = getBlockRootClientId( clientId );
			const grandparentId = parentId
				? getBlockRootClientId( parentId )
				: null;

			const allAttrs = grandparentId
				? getBlockAttributes( grandparentId )
				: null;

			if ( ! allAttrs ) {
				return {};
			}

			// --- LIMIT THE FETCH HERE ---
			// Only extract exactly what the Icon Picker needs to function
			return {
				selectedIcon: allAttrs.selectedIcon,
				mediaUrl: allAttrs.mediaUrl,
				iconType: allAttrs.iconType,
				iconSize: allAttrs.iconSize,
				iconColor: allAttrs.iconColor,
				backgroundColor: allAttrs.backgroundColor,

				fontFamily: allAttrs.fontFamily,
				fontSize: allAttrs.fontSize,
				fontSizeUnits: allAttrs.fontSizeUnits,
				fontWeight: allAttrs.fontWeight,
				fontHeight: allAttrs.fontHeight,
				fontHeightUnits: allAttrs.fontHeightUnits,
				letterSpacing: allAttrs.letterSpacing,
				letterSpacingUnits: allAttrs.letterSpacingUnits,
				wordSpacing: allAttrs.wordSpacing,
				wordSpacingUnits: allAttrs.wordSpacingUnits,
				textTransform: allAttrs.textTransform,
				isItalic: allAttrs.isItalic,
				isUnderline: allAttrs.isUnderline,
				isStrikethrough: allAttrs.isStrikethrough,
			};
		},
		[ clientId ]
	);
