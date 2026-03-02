// src/hooks/useGrandparentAttributes.js
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

			// Return *only* the design tokens and an optional mediaUrl for reading.
			return {
				typography: {
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
					alignment: allAttrs.alignment,
					textColor: allAttrs.textColor,
				},
				iconStyle: {
					iconType: allAttrs.iconType,
					iconSize: allAttrs.iconSize,
					iconColor: allAttrs.iconColor,
					mediaUrl: allAttrs.mediaUrl || null,
					selectedIcon: allAttrs.selectedIcon || null,
				},
			};
		},
		[ clientId ]
	);
