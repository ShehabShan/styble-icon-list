import { useSelect } from '@wordpress/data';

export const useParentAttributes = ( clientId ) =>
	useSelect(
		( select ) => {
			const { getBlockRootClientId, getBlockAttributes } =
				select( 'core/block-editor' );
			const parentId = getBlockRootClientId( clientId );

			return getBlockAttributes( parentId ) || {};
		},
		[ clientId ]
	);
