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
	const cleanStyles = ( obj ) => {
		return Object.fromEntries(
			Object.entries( obj ).filter( ( [ _, value ] ) => !! value )
		);
	};

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

	let itemsWidthValue = null;

	if ( attributes?.itemWidthType === 'auto' ) {
		itemsWidthValue = 'auto';
	} else if ( attributes?.itemWidthType === 'custom' ) {
		itemsWidthValue = `${ attributes.itemsWidth }px`;
	}

	return cleanStyles( {
		// ===============================
		// GENERAL
		// ===============================
		'--items-width': itemsWidthValue,
		'--selectedIcon': attributes?.selectedIcon,
		'--iconSize': attributes?.iconSize,
		'--separator-thickness':
			attributes?.separatorThickness &&
			`${ attributes.separatorThickness }px`,
		'--separator-color': attributes?.separatorColor,
		'--separator-style': attributes?.separatorType,
		'--icon-size': attributes?.iconSize && `${ attributes.iconSize }px`,
		'--icon-color': attributes?.iconColor,

		// ===============================
		// TYPOGRAPHY DEFAULTS
		// ===============================
		'--font-family': attributes?.fontFamily,
		'--font-size': attributes?.fontSize && `${ attributes.fontSize }px`,
		'--font-weight': attributes?.fontWeight,
		'--font-height': attributes?.fontHeight,
		'--letter-spacing':
			attributes?.letterSpacing && `${ attributes.letterSpacing }px`,
		'--word-spacing':
			attributes?.wordSpacing && `${ attributes.wordSpacing }px`,
		'--font-style-italic': attributes?.isItalic && 'italic',
		'--text-decoration':
			( attributes?.isUnderline || attributes?.isStrikethrough ) &&
			`${ attributes?.isUnderline ? 'underline' : '' } ${
				attributes?.isStrikethrough ? 'line-through' : ''
			}`.trim(),
		'--text-transform': attributes?.textTransform,

		// ===============================
		// PARENT CONTAINER STYLES
		// ===============================
		'--all-padding-top': allPadding?.top && `${ allPadding.top }px`,
		'--all-padding-right': allPadding?.right && `${ allPadding.right }px`,
		'--all-padding-bottom':
			allPadding?.bottom && `${ allPadding.bottom }px`,
		'--all-padding-left': allPadding?.left && `${ allPadding.left }px`,

		// ===============================
		// CHILD DEFAULTS (IMPORTANT)
		// ===============================
		'--background-color':
			attributes?.backgroundColor || attributes?.backgroundGradient,
		'--border-color': attributes?.borderColor,
		'--border-style': attributes?.borderType,
		'--box-shadow': attributes?.hasBoxShadow && SHADOW_VAL,

		// Padding Defaults
		'--padding-top': itemPadding?.top && `${ itemPadding.top }px`,
		'--padding-right': itemPadding?.right && `${ itemPadding.right }px`,
		'--padding-bottom': itemPadding?.bottom && `${ itemPadding.bottom }px`,
		'--padding-left': itemPadding?.left && `${ itemPadding.left }px`,

		// Border Width Defaults
		'--border-top-width': itemBorder?.top && `${ itemBorder.top }px`,
		'--border-right-width': itemBorder?.right && `${ itemBorder.right }px`,
		'--border-bottom-width':
			itemBorder?.bottom && `${ itemBorder.bottom }px`,
		'--border-left-width': itemBorder?.left && `${ itemBorder.left }px`,

		// Border Radius Defaults
		'--border-radius-top': itemRadius?.top && `${ itemRadius.top }px`,
		'--border-radius-right': itemRadius?.right && `${ itemRadius.right }px`,
		'--border-radius-bottom':
			itemRadius?.bottom && `${ itemRadius.bottom }px`,
		'--border-radius-left': itemRadius?.left && `${ itemRadius.left }px`,

		// ===============================
		// HOVER DEFAULTS FOR CHILD
		// ===============================
		'--bg-h':
			attributes?.hoverBackgroundColor || attributes?.backgroundColor,
		'--border-color-h': attributes?.hoverBorderColor,
		'--border-style-h': attributes?.hoverBorderType,
		'--box-shadow-h': attributes?.hoverHasBoxShadow && SHADOW_VAL,

		'--padding-top-h':
			hoverItemPadding?.top && `${ hoverItemPadding.top }px`,
		'--padding-right-h':
			hoverItemPadding?.right && `${ hoverItemPadding.right }px`,
		'--padding-bottom-h':
			hoverItemPadding?.bottom && `${ hoverItemPadding.bottom }px`,
		'--padding-left-h':
			hoverItemPadding?.left && `${ hoverItemPadding.left }px`,

		'--border-top-h': hoverItemBorder?.top && `${ hoverItemBorder.top }px`,
		'--border-right-h':
			hoverItemBorder?.right && `${ hoverItemBorder.right }px`,
		'--border-bottom-h':
			hoverItemBorder?.bottom && `${ hoverItemBorder.bottom }px`,
		'--border-left-h':
			hoverItemBorder?.left && `${ hoverItemBorder.left }px`,

		'--radius-top-h': hoverItemRadius?.top && `${ hoverItemRadius.top }px`,
		'--radius-right-h':
			hoverItemRadius?.right && `${ hoverItemRadius.right }px`,
		'--radius-bottom-h':
			hoverItemRadius?.bottom && `${ hoverItemRadius.bottom }px`,
		'--radius-left-h':
			hoverItemRadius?.left && `${ hoverItemRadius.left }px`,
	} );
};

export const getChildBlockStyles = ( attributes ) => {
	const cleanStyles = ( obj ) => {
		return Object.fromEntries(
			Object.entries( obj ).filter( ( [ _, value ] ) => !! value )
		);
	};

	const SHADOW_VAL =
		'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';

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
	return cleanStyles( {
		// --- Normal State ---

		'--background-color':
			attributes?.backgroundColor || attributes?.backgroundGradient,
		'--border-color': attributes?.borderColor,
		'--border-style': attributes?.borderType,
		'--box-shadow': attributes?.hasBoxShadow && SHADOW_VAL,

		// Padding
		'--padding-top': padding?.top && `${ padding.top }px`,
		'--padding-right': padding?.right && `${ padding.right }px`,
		'--padding-bottom': padding?.bottom && `${ padding.bottom }px`,
		'--padding-left': padding?.left && `${ padding.left }px`,

		// Margin
		'--margin-top': margin?.top && `${ margin.top }px`,
		'--margin-right': margin?.right && `${ margin.right }px`,
		'--margin-bottom': margin?.bottom && `${ margin.bottom }px`,
		'--margin-left': margin?.left && `${ margin.left }px`,

		// Border Width
		'--border-top-width': border?.top && `${ border.top }px`,
		'--border-right-width': border?.right && `${ border.right }px`,
		'--border-bottom-width': border?.bottom && `${ border.bottom }px`,
		'--border-left-width': border?.left && `${ border.left }px`,

		// Border Radius
		'--border-radius-top': borderRadius?.top && `${ borderRadius.top }px`,
		'--border-radius-right':
			borderRadius?.right && `${ borderRadius.right }px`,
		'--border-radius-bottom':
			borderRadius?.bottom && `${ borderRadius.bottom }px`,
		'--border-radius-left':
			borderRadius?.left && `${ borderRadius.left }px`,

		// --- Hover State ---
		'--bg-h': attributes?.hoverBackgroundColor,
		'--border-color-h': attributes?.hoverBorderColor,
		'--border-style-h': attributes?.hoverBorderType,
		'--box-shadow-h': attributes?.hoverHasBoxShadow && SHADOW_VAL,

		// Hover Padding
		'--padding-top-h': hoverPadding?.top && `${ hoverPadding.top }px`,
		'--padding-right-h': hoverPadding?.right && `${ hoverPadding.right }px`,
		'--padding-bottom-h':
			hoverPadding?.bottom && `${ hoverPadding.bottom }px`,
		'--padding-left-h': hoverPadding?.left && `${ hoverPadding.left }px`,

		// Hover Margin
		'--margin-top-h': hoverMargin?.top && `${ hoverMargin.top }px`,
		'--margin-right-h': hoverMargin?.right && `${ hoverMargin.right }px`,
		'--margin-bottom-h': hoverMargin?.bottom && `${ hoverMargin.bottom }px`,
		'--margin-left-h': hoverMargin?.left && `${ hoverMargin.left }px`,

		// Hover Border
		'--border-top-h': hoverBorder?.top && `${ hoverBorder.top }px`,
		'--border-right-h': hoverBorder?.right && `${ hoverBorder.right }px`,
		'--border-bottom-h': hoverBorder?.bottom && `${ hoverBorder.bottom }px`,
		'--border-left-h': hoverBorder?.left && `${ hoverBorder.left }px`,

		// Hover Radius
		'--radius-top-h':
			hoverBorderRadius?.top && `${ hoverBorderRadius.top }px`,
		'--radius-right-h':
			hoverBorderRadius?.right && `${ hoverBorderRadius.right }px`,
		'--radius-bottom-h':
			hoverBorderRadius?.bottom && `${ hoverBorderRadius.bottom }px`,
		'--radius-left-h':
			hoverBorderRadius?.left && `${ hoverBorderRadius.left }px`,
	} );
};

export const getIconStyles = ( attributes ) => {
	const cleanStyles = ( obj ) => {
		return Object.fromEntries(
			Object.entries( obj ).filter( ( [ _, value ] ) => !! value )
		);
	};
	return cleanStyles( {
		'--icon-size': attributes?.iconSize && `${ attributes.iconSize }px`,
		'--icon-color': attributes?.iconColor,
	} );
};
