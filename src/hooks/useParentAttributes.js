import { useSelect } from '@wordpress/data';
import { background } from '@wordpress/icons';

export const useParentAttributes = ( clientId ) =>
	useSelect(
		( select ) => {
			const { getBlockRootClientId, getBlockAttributes } =
				select( 'core/block-editor' );

			// Get the immediate parent ID
			const parentId = getBlockRootClientId( clientId );

			// Get the parent's attributes
			const parentAttrs = parentId
				? getBlockAttributes( parentId )
				: null;

			if ( ! parentAttrs ) {
				return {};
			}

			// Return only what the child needs from the parent
			return {
				// Standard Layout
				backgroundColor: parentAttrs.backgroundColor,
				hoverBackgroundColor: parentAttrs.hoverBackgroundColor,
				padding: parentAttrs.padding,
				paddingTop: parentAttrs.paddingTop,
				paddingRight: parentAttrs.paddingRight,
				paddingBottom: parentAttrs.paddingBottom,
				paddingLeft: parentAttrs.paddingLeft,

				margin: parentAttrs.margin,
				marginTop: parentAttrs.marginTop,
				marginRight: parentAttrs.marginRight,
				marginBottom: parentAttrs.marginBottom,
				marginLeft: parentAttrs.marginLeft,

				border: parentAttrs.border,
				borderTop: parentAttrs.borderTop,
				borderRight: parentAttrs.borderRight,
				borderBottom: parentAttrs.borderBottom,
				borderLeft: parentAttrs.borderLeft,
				borderType: parentAttrs.borderType,
				borderColor: parentAttrs.borderColor,

				borderRadius: parentAttrs.borderRadius,
				borderRadiusTop: parentAttrs.borderRadiusTop,
				borderRadiusRight: parentAttrs.borderRadiusRight,
				borderRadiusBottom: parentAttrs.borderRadiusBottom,
				borderRadiusLeft: parentAttrs.borderRadiusLeft,

				paddingUnits: parentAttrs.paddingUnits,
				marginUnits: parentAttrs.marginUnits,
				borderUnits: parentAttrs.borderUnits,
				borderRadiusUnits: parentAttrs.borderRadiusUnits,

				// Hover Layout
				hoverPadding: parentAttrs.hoverPadding,
				hoverPaddingTop: parentAttrs.hoverPaddingTop,
				hoverPaddingRight: parentAttrs.hoverPaddingRight,
				hoverPaddingBottom: parentAttrs.hoverPaddingBottom,
				hoverPaddingLeft: parentAttrs.hoverPaddingLeft,

				hoverBorder: parentAttrs.hoverBorder,
				hoverBorderTop: parentAttrs.hoverBorderTop,
				hoverBorderRight: parentAttrs.hoverBorderRight,
				hoverBorderBottom: parentAttrs.hoverBorderBottom,
				hoverBorderLeft: parentAttrs.hoverBorderLeft,
				hoverBorderType: parentAttrs.hoverBorderType,
				hoverBorderColor: parentAttrs.hoverBorderColor,

				hoverBorderRadius: parentAttrs.hoverBorderRadius,
				hoverBorderRadiusTop: parentAttrs.hoverBorderRadiusTop,
				hoverBorderRadiusRight: parentAttrs.hoverBorderRadiusRight,
				hoverBorderRadiusBottom: parentAttrs.hoverBorderRadiusBottom,
				hoverBorderRadiusLeft: parentAttrs.hoverBorderRadiusLeft,

				hoverPaddingUnits: parentAttrs.hoverPaddingUnits,
				hoverMarginUnits: parentAttrs.hoverMarginUnits, // Added this from your list
				hoverBorderUnits: parentAttrs.hoverBorderUnits,
				hoverBorderRadiusUnits: parentAttrs.hoverBorderRadiusUnits,
			};
		},
		[ clientId ]
	);
