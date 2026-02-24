export const getResolvedSides = ( base, top, right, bottom, left ) => {
	const isValid = ( v ) => v !== undefined && v !== null && v !== '';

	const resolve = ( val ) => {
		if ( isValid( val ) ) {
			return Number( val );
		}
		if ( isValid( base ) ) {
			return Number( base );
		}
		return 0;
	};

	return {
		top: resolve( top ),
		right: resolve( right ),
		bottom: resolve( bottom ),
		left: resolve( left ),
	};
};

// ===============================
// PARENT BLOCK STYLES
// ===============================
export const getBlockStyles = ( attributes ) => {
	const SHADOW_VAL =
		'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';

	// -------------------------------
	// Resolve Parent Box Sides
	// -------------------------------
	const allPadding = getResolvedSides(
		attributes?.allPadding,
		attributes?.allPaddingTop,
		attributes?.allPaddingRight,
		attributes?.allPaddingBottom,
		attributes?.allPaddingLeft
	);

	const itemPadding = getResolvedSides(
		attributes?.padding,
		attributes?.paddingTop,
		attributes?.paddingRight,
		attributes?.paddingBottom,
		attributes?.paddingLeft
	);

	const itemBorder = getResolvedSides(
		attributes?.border,
		attributes?.borderTop,
		attributes?.borderRight,
		attributes?.borderBottom,
		attributes?.borderLeft
	);

	const itemRadius = getResolvedSides(
		attributes?.borderRadius,
		attributes?.borderRadiusTop,
		attributes?.borderRadiusRight,
		attributes?.borderRadiusBottom,
		attributes?.borderRadiusLeft
	);

	const hoverItemPadding = getResolvedSides(
		attributes?.hoverPadding,
		attributes?.hoverPaddingTop,
		attributes?.hoverPaddingRight,
		attributes?.hoverPaddingBottom,
		attributes?.hoverPaddingLeft
	);

	const hoverItemBorder = getResolvedSides(
		attributes?.hoverBorder,
		attributes?.hoverBorderTop,
		attributes?.hoverBorderRight,
		attributes?.hoverBorderBottom,
		attributes?.hoverBorderLeft
	);

	const hoverItemRadius = getResolvedSides(
		attributes?.hoverBorderRadius,
		attributes?.hoverBorderRadiusTop,
		attributes?.hoverBorderRadiusRight,
		attributes?.hoverBorderRadiusBottom,
		attributes?.hoverBorderRadiusLeft
	);

	return {
		// ===============================
		// GENERAL
		// ===============================
		'--separator-thickness': `${ attributes?.separatorThickness }px`,
		'--separator-color': attributes?.separatorColor,
		'--separator-style': attributes?.separatorType,
		'--icon-size': `${ attributes?.iconSize }px`,
		'--icon-color': attributes?.iconColor,

		// ===============================
		// TYPOGRAPHY DEFAULTS
		// ===============================
		'--font-family': attributes?.fontFamily,
		'--font-size': `${ attributes?.fontSize }px`,
		'--font-weight': attributes?.fontWeight,
		'--font-height': attributes?.fontHeight,
		'--letter-spacing': `${ attributes?.letterSpacing }px`,
		'--word-spacing': `${ attributes?.wordSpacing }px`,
		'--font-style-italic': attributes?.isItalic ? 'italic' : 'normal',
		'--text-decoration':
			`${ attributes?.isUnderline ? 'underline' : '' } ${
				attributes?.isStrikethrough ? 'line-through' : ''
			}`.trim() || 'none',
		'--text-transform': attributes?.textTransform,

		// ===============================
		// PARENT CONTAINER STYLES
		// ===============================
		'--all-padding-top': `${ allPadding.top }px`,
		'--all-padding-right': `${ allPadding.right }px`,
		'--all-padding-bottom': `${ allPadding.bottom }px`,
		'--all-padding-left': `${ allPadding.left }px`,

		// ===============================
		// CHILD DEFAULTS (IMPORTANT)
		// ===============================
		// 🔥 These are what children fallback to

		'--item-background-color':
			attributes?.backgroundColor ??
			attributes?.backgroundGradient ??
			'transparent',

		'--item-border-color': attributes?.borderColor || 'transparent',
		'--item-border-style': attributes?.borderType || 'solid',
		'--item-box-shadow': attributes?.hasBoxShadow ? SHADOW_VAL : 'none',

		// Padding Defaults
		'--item-padding-top': `${ itemPadding.top }px`,
		'--item-padding-right': `${ itemPadding.right }px`,
		'--item-padding-bottom': `${ itemPadding.bottom }px`,
		'--item-padding-left': `${ itemPadding.left }px`,

		// Border Width Defaults
		'--item-border-top-width': `${ itemBorder.top }px`,
		'--item-border-right-width': `${ itemBorder.right }px`,
		'--item-border-bottom-width': `${ itemBorder.bottom }px`,
		'--item-border-left-width': `${ itemBorder.left }px`,

		// Border Radius Defaults
		'--item-border-radius-top': `${ itemRadius.top }px`,
		'--item-border-radius-right': `${ itemRadius.right }px`,
		'--item-border-radius-bottom': `${ itemRadius.bottom }px`,
		'--item-border-radius-left': `${ itemRadius.left }px`,

		// ===============================
		// HOVER DEFAULTS FOR CHILD
		// ===============================
		'--item-bg-h':
			attributes?.hoverBackgroundColor ??
			attributes?.backgroundColor ??
			'transparent',

		'--item-border-color-h':
			attributes?.hoverBorderColor ??
			attributes?.borderColor ??
			'transparent',

		'--item-border-style-h':
			attributes?.hoverBorderType ?? attributes?.borderType ?? 'solid',

		'--item-box-shadow-h': attributes?.hoverHasBoxShadow
			? SHADOW_VAL
			: 'none',

		'--item-padding-top-h': `${ hoverItemPadding.top }px`,
		'--item-padding-right-h': `${ hoverItemPadding.right }px`,
		'--item-padding-bottom-h': `${ hoverItemPadding.bottom }px`,
		'--item-padding-left-h': `${ hoverItemPadding.left }px`,

		'--item-border-top-h': `${ hoverItemBorder.top }px`,
		'--item-border-right-h': `${ hoverItemBorder.right }px`,
		'--item-border-bottom-h': `${ hoverItemBorder.bottom }px`,
		'--item-border-left-h': `${ hoverItemBorder.left }px`,

		'--item-radius-top-h': `${ hoverItemRadius.top }px`,
		'--item-radius-right-h': `${ hoverItemRadius.right }px`,
		'--item-radius-bottom-h': `${ hoverItemRadius.bottom }px`,
		'--item-radius-left-h': `${ hoverItemRadius.left }px`,
	};
};

export const getChildBlockStyles = ( attributes ) => {
	const SHADOW_VAL =
		'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';

	// -------------------------
	// Resolve ONLY child values
	// -------------------------
	const padding = getResolvedSides(
		attributes?.padding,
		attributes?.paddingTop,
		attributes?.paddingRight,
		attributes?.paddingBottom,
		attributes?.paddingLeft
	);

	const margin = getResolvedSides(
		attributes?.margin,
		attributes?.marginTop,
		attributes?.marginRight,
		attributes?.marginBottom,
		attributes?.marginLeft
	);

	const border = getResolvedSides(
		attributes?.border,
		attributes?.borderTop,
		attributes?.borderRight,
		attributes?.borderBottom,
		attributes?.borderLeft
	);

	const borderRadius = getResolvedSides(
		attributes?.borderRadius,
		attributes?.borderRadiusTop,
		attributes?.borderRadiusRight,
		attributes?.borderRadiusBottom,
		attributes?.borderRadiusLeft
	);

	const hoverPadding = getResolvedSides(
		attributes?.hoverPadding,
		attributes?.hoverPaddingTop,
		attributes?.hoverPaddingRight,
		attributes?.hoverPaddingBottom,
		attributes?.hoverPaddingLeft
	);

	const hoverMargin = getResolvedSides(
		attributes?.hoverMargin,
		attributes?.hoverMarginTop,
		attributes?.hoverMarginRight,
		attributes?.hoverMarginBottom,
		attributes?.hoverMarginLeft
	);

	const hoverBorder = getResolvedSides(
		attributes?.hoverBorder,
		attributes?.hoverBorderTop,
		attributes?.hoverBorderRight,
		attributes?.hoverBorderBottom,
		attributes?.hoverBorderLeft
	);

	const hoverBorderRadius = getResolvedSides(
		attributes?.hoverBorderRadius,
		attributes?.hoverBorderRadiusTop,
		attributes?.hoverBorderRadiusRight,
		attributes?.hoverBorderRadiusBottom,
		attributes?.hoverBorderRadiusLeft
	);

	// -------------------------
	// Return ONLY child overrides
	// -------------------------
	return {
		// Normal State
		'--background-color':
			attributes?.backgroundColor ?? attributes?.backgroundGradient,
		'--border-color': attributes?.borderColor,
		'--border-style': attributes?.borderType,
		'--box-shadow': attributes?.hasBoxShadow ? SHADOW_VAL : undefined,

		'--padding-top': attributes?.padding ? `${ padding.top }px` : undefined,
		'--padding-right': attributes?.padding
			? `${ padding.right }px`
			: undefined,
		'--padding-bottom': attributes?.padding
			? `${ padding.bottom }px`
			: undefined,
		'--padding-left': attributes?.padding
			? `${ padding.left }px`
			: undefined,

		'--margin-top': attributes?.margin ? `${ margin.top }px` : undefined,
		'--margin-right': attributes?.margin
			? `${ margin.right }px`
			: undefined,
		'--margin-bottom': attributes?.margin
			? `${ margin.bottom }px`
			: undefined,
		'--margin-left': attributes?.margin ? `${ margin.left }px` : undefined,

		'--border-top-width': attributes?.border
			? `${ border.top }px`
			: undefined,
		'--border-right-width': attributes?.border
			? `${ border.right }px`
			: undefined,
		'--border-bottom-width': attributes?.border
			? `${ border.bottom }px`
			: undefined,
		'--border-left-width': attributes?.border
			? `${ border.left }px`
			: undefined,

		'--border-radius-top': attributes?.borderRadius
			? `${ borderRadius.top }px`
			: undefined,
		'--border-radius-right': attributes?.borderRadius
			? `${ borderRadius.right }px`
			: undefined,
		'--border-radius-bottom': attributes?.borderRadius
			? `${ borderRadius.bottom }px`
			: undefined,
		'--border-radius-left': attributes?.borderRadius
			? `${ borderRadius.left }px`
			: undefined,

		// Hover State
		'--bg-h': attributes?.hoverBackgroundColor,
		'--border-color-h': attributes?.hoverBorderColor,
		'--border-style-h': attributes?.hoverBorderType,
		'--box-shadow-h': attributes?.hoverHasBoxShadow
			? SHADOW_VAL
			: undefined,

		'--padding-top-h': attributes?.hoverPadding
			? `${ hoverPadding.top }px`
			: undefined,
		'--padding-right-h': attributes?.hoverPadding
			? `${ hoverPadding.right }px`
			: undefined,
		'--padding-bottom-h': attributes?.hoverPadding
			? `${ hoverPadding.bottom }px`
			: undefined,
		'--padding-left-h': attributes?.hoverPadding
			? `${ hoverPadding.left }px`
			: undefined,

		'--margin-top-h': attributes?.hoverMargin
			? `${ hoverMargin.top }px`
			: undefined,
		'--margin-right-h': attributes?.hoverMargin
			? `${ hoverMargin.right }px`
			: undefined,
		'--margin-bottom-h': attributes?.hoverMargin
			? `${ hoverMargin.bottom }px`
			: undefined,
		'--margin-left-h': attributes?.hoverMargin
			? `${ hoverMargin.left }px`
			: undefined,

		'--border-top-h': attributes?.hoverBorder
			? `${ hoverBorder.top }px`
			: undefined,
		'--border-right-h': attributes?.hoverBorder
			? `${ hoverBorder.right }px`
			: undefined,
		'--border-bottom-h': attributes?.hoverBorder
			? `${ hoverBorder.bottom }px`
			: undefined,
		'--border-left-h': attributes?.hoverBorder
			? `${ hoverBorder.left }px`
			: undefined,

		'--radius-top-h': attributes?.hoverBorderRadius
			? `${ hoverBorderRadius.top }px`
			: undefined,
		'--radius-right-h': attributes?.hoverBorderRadius
			? `${ hoverBorderRadius.right }px`
			: undefined,
		'--radius-bottom-h': attributes?.hoverBorderRadius
			? `${ hoverBorderRadius.bottom }px`
			: undefined,
		'--radius-left-h': attributes?.hoverBorderRadius
			? `${ hoverBorderRadius.left }px`
			: undefined,
	};
};
