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
			const {
				selectedIcon,
				iconSize,
				hasIcon,
				iconColor, // Optional if you handle this via CSS cascade
			} = allAttrs;

			return { selectedIcon, iconSize, hasIcon, iconColor };
		},
		[ clientId ]
	);
