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

	const withUnit = ( value, unit = 'px' ) => {
		// If value is missing OR is exactly 0, return null

		if ( ! value || value === 0 || value === '0' ) {
			return null;
		}

		return `${ value }${ unit }`;
	};

	const SHADOW_VAL =
		'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';

	// Units Logic
	const fzU = attributes?.fontSizeUnits || 'px';
	const fhU = attributes?.fontHeightUnits || '';
	const lsU = attributes?.letterSpacingUnits || 'px';
	const wsU = attributes?.wordSpacingUnits || 'px';

	const pU = attributes?.paddingUnits || 'px';
	const mU = attributes?.marginUnits || 'px';
	const bU = attributes?.borderUnits || 'px';
	const rU = attributes?.borderRadiusUnits || 'px';

	const hpU = attributes?.hoverPaddingUnits || 'px';
	const hmU = attributes?.hoverMarginUnits || 'px';
	const hbU = attributes?.hoverBorderUnits || 'px';
	const hrU = attributes?.hoverBorderRadiusUnits || 'px';

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

	const margin = getResolvedSides(
		attributes?.margin,
		attributes?.marginTop,
		attributes?.marginRight,
		attributes?.marginBottom,
		attributes?.marginLeft
	);

	const padding = getResolvedSides(
		attributes?.padding,
		attributes?.paddingTop,
		attributes?.paddingRight,
		attributes?.paddingBottom,
		attributes?.paddingLeft
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

	const hoverBorder = getResolvedSides(
		attributes?.hoverBorder,
		attributes?.hoverBorderTop,
		attributes?.hoverBorderRight,
		attributes?.hoverBorderBottom,
		attributes?.hoverBorderLeft
	);

	const hoverMargin = getResolvedSides(
		attributes?.hoverMargin,
		attributes?.hoverMarginTop,
		attributes?.hoverMarginRight,
		attributes?.hoverMarginBottom,
		attributes?.hoverMarginLeft
	);

	const hoverRadius = getResolvedSides(
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

	const background =
		attributes?.backgroundColor ?? attributes?.backgroundGradient;

	return cleanStyles( {
		// ===============================
		// GENERAL
		// ===============================
		'--items-width': itemsWidthValue,
		'--selectedIcon': attributes?.selectedIcon,
		'--separator-thickness': withUnit(
			attributes?.separatorThickness,
			'px'
		),
		'--separator-color': attributes?.separatorColor,
		'--separator-style': attributes?.separatorType,
		'--icon-size': withUnit( attributes?.iconSize, 'px' ),
		'--icon-color': attributes?.iconColor,

		// ===============================
		// TYPOGRAPHY DEFAULTS
		// ===============================
		'--font-family': attributes?.fontFamily,
		'--font-size': withUnit( attributes?.fontSize, fzU ),
		'--text-color': attributes?.textColor,
		'--font-weight': attributes?.fontWeight,
		'--font-height': withUnit( attributes?.fontHeight, fhU ),
		'--letter-spacing': withUnit( attributes?.letterSpacing, lsU ),
		'--word-spacing': withUnit( attributes?.wordSpacing, wsU ),
		'--font-style-italic': attributes?.isItalic && 'italic',
		'--text-decoration':
			( attributes?.isUnderline || attributes?.isStrikethrough ) &&
			`${ attributes?.isUnderline ? 'underline' : '' } ${
				attributes?.isStrikethrough ? 'line-through' : ''
			}`.trim(),
		'--text-transform': attributes?.textTransform,

		// ===============================
		// PARENT CONTAINER STYLES (Padding use pU)
		// ===============================
		'--all-padding-top': withUnit( allPadding?.top, pU ),
		'--all-padding-right': withUnit( allPadding?.right, pU ),
		'--all-padding-bottom': withUnit( allPadding?.bottom, pU ),
		'--all-padding-left': withUnit( allPadding?.left, pU ),

		// ===============================
		// CHILD DEFAULTS
		// ===============================
		'--background-color':
			( attributes?.backgroundColor || attributes?.backgroundGradient ) &&
			`${ background }`,
		'--border-color': attributes?.borderColor,
		'--border-style': attributes?.borderType,
		'--box-shadow': attributes?.hasBoxShadow && SHADOW_VAL,

		// Padding (use pU)
		'--padding-top': withUnit( padding?.top, pU ),
		'--padding-right': withUnit( padding?.right, pU ),
		'--padding-bottom': withUnit( padding?.bottom, pU ),
		'--padding-left': withUnit( padding?.left, pU ),

		// Margin (use mU)
		'--margin-top': withUnit( margin?.top, mU ),
		'--margin-right': withUnit( margin?.right, mU ),
		'--margin-bottom': withUnit( margin?.bottom, mU ),
		'--margin-left': withUnit( margin?.left, mU ),

		// Border Width (use bU)
		'--border-top-width': withUnit( border?.top, bU ),
		'--border-right-width': withUnit( border?.right, bU ),
		'--border-bottom-width': withUnit( border?.bottom, bU ),
		'--border-left-width': withUnit( border?.left, bU ),

		// Border Radius (use rU)
		'--border-radius-top': withUnit( borderRadius?.top, rU ),
		'--border-radius-right': withUnit( borderRadius?.right, rU ),
		'--border-radius-bottom': withUnit( borderRadius?.bottom, rU ),
		'--border-radius-left': withUnit( borderRadius?.left, rU ),

		// ===============================
		// HOVER DEFAULTS
		// ===============================
		'--bg-h':
			attributes?.hoverBackgroundColor || attributes?.backgroundColor,
		'--border-color-h': attributes?.hoverBorderColor,
		'--border-style-h': attributes?.hoverBorderType,
		'--box-shadow-h': attributes?.hoverHasBoxShadow && SHADOW_VAL,

		// Hover Padding (use hpU)
		'--padding-top-h': withUnit( hoverPadding?.top, hpU ),
		'--padding-right-h': withUnit( hoverPadding?.right, hpU ),
		'--padding-bottom-h': withUnit( hoverPadding?.bottom, hpU ),
		'--padding-left-h': withUnit( hoverPadding?.left, hpU ),

		// Hover Margin (use hmU)
		'--margin-top-h': withUnit( hoverMargin?.top, hmU ),
		'--margin-right-h': withUnit( hoverMargin?.right, hmU ),
		'--margin-bottom-h': withUnit( hoverMargin?.bottom, hmU ),
		'--margin-left-h': withUnit( hoverMargin?.left, hmU ),

		// Hover Border (use hbU)
		'--border-top-h': withUnit( hoverBorder?.top, hbU ),
		'--border-right-h': withUnit( hoverBorder?.right, hbU ),
		'--border-bottom-h': withUnit( hoverBorder?.bottom, hbU ),
		'--border-left-h': withUnit( hoverBorder?.left, hbU ),

		// Hover Radius (use hrU)
		'--radius-top-h': withUnit( hoverRadius?.top, hrU ),
		'--radius-right-h': withUnit( hoverRadius?.right, hrU ),
		'--radius-bottom-h': withUnit( hoverRadius?.bottom, hrU ),
		'--radius-left-h': withUnit( hoverRadius?.left, hrU ),
	} );
};

// export const getChildBlockStyles = ( attributes ) => {
// 	const cleanStyles = ( obj ) => {
// 		return Object.fromEntries(
// 			Object.entries( obj ).filter( ( [ _, value ] ) => !! value )
// 		);
// 	};
// 	const SHADOW_VAL =
// 		'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';

// 	const padding = getResolvedSides(
// 		attributes?.padding,
// 		attributes?.paddingTop,
// 		attributes?.paddingRight,
// 		attributes?.paddingBottom,
// 		attributes?.paddingLeft
// 	);

// 	const margin = getResolvedSides(
// 		attributes?.margin,
// 		attributes?.marginTop,
// 		attributes?.marginRight,
// 		attributes?.marginBottom,
// 		attributes?.marginLeft
// 	);

// 	const border = getResolvedSides(
// 		attributes?.border,
// 		attributes?.borderTop,
// 		attributes?.borderRight,
// 		attributes?.borderBottom,
// 		attributes?.borderLeft
// 	);

// 	const borderRadius = getResolvedSides(
// 		attributes?.borderRadius,
// 		attributes?.borderRadiusTop,
// 		attributes?.borderRadiusRight,
// 		attributes?.borderRadiusBottom,
// 		attributes?.borderRadiusLeft
// 	);

// 	const hoverPadding = getResolvedSides(
// 		attributes?.hoverPadding,
// 		attributes?.hoverPaddingTop,
// 		attributes?.hoverPaddingRight,
// 		attributes?.hoverPaddingBottom,
// 		attributes?.hoverPaddingLeft
// 	);

// 	const hoverMargin = getResolvedSides(
// 		attributes?.hoverMargin,
// 		attributes?.hoverMarginTop,
// 		attributes?.hoverMarginRight,
// 		attributes?.hoverMarginBottom,
// 		attributes?.hoverMarginLeft
// 	);

// 	const hoverBorder = getResolvedSides(
// 		attributes?.hoverBorder,
// 		attributes?.hoverBorderTop,
// 		attributes?.hoverBorderRight,
// 		attributes?.hoverBorderBottom,
// 		attributes?.hoverBorderLeft
// 	);

// 	const hoverBorderRadius = getResolvedSides(
// 		attributes?.hoverBorderRadius,
// 		attributes?.hoverBorderRadiusTop,
// 		attributes?.hoverBorderRadiusRight,
// 		attributes?.hoverBorderRadiusBottom,
// 		attributes?.hoverBorderRadiusLeft
// 	);

// 	// -------------------------
// 	// Return ONLY child overrides
// 	// -------------------------
// 	return cleanStyles( {
// 		// --- Normal State ---

// 		'--background-color':
// 			attributes?.backgroundColor || attributes?.backgroundGradient,
// 		'--border-color': attributes?.borderColor,
// 		'--border-style': attributes?.borderType,
// 		'--box-shadow': attributes?.hasBoxShadow && SHADOW_VAL,

// 		// Padding
// 		'--padding-top': padding?.top && `${ padding.top }px`,
// 		'--padding-right': padding?.right && `${ padding.right }px`,
// 		'--padding-bottom': padding?.bottom && `${ padding.bottom }px`,
// 		'--padding-left': padding?.left && `${ padding.left }px`,

// 		// Margin
// 		'--margin-top': margin?.top && `${ margin.top }px`,
// 		'--margin-right': margin?.right && `${ margin.right }px`,
// 		'--margin-bottom': margin?.bottom && `${ margin.bottom }px`,
// 		'--margin-left': margin?.left && `${ margin.left }px`,

// 		// Border Width
// 		'--border-top-width': border?.top && `${ border.top }px`,
// 		'--border-right-width': border?.right && `${ border.right }px`,
// 		'--border-bottom-width': border?.bottom && `${ border.bottom }px`,
// 		'--border-left-width': border?.left && `${ border.left }px`,

// 		// Border Radius
// 		'--border-radius-top': borderRadius?.top && `${ borderRadius.top }px`,
// 		'--border-radius-right':
// 			borderRadius?.right && `${ borderRadius.right }px`,
// 		'--border-radius-bottom':
// 			borderRadius?.bottom && `${ borderRadius.bottom }px`,
// 		'--border-radius-left':
// 			borderRadius?.left && `${ borderRadius.left }px`,

// 		// --- Hover State ---
// 		'--bg-h': attributes?.hoverBackgroundColor,
// 		'--border-color-h': attributes?.hoverBorderColor,
// 		'--border-style-h': attributes?.hoverBorderType,
// 		'--box-shadow-h': attributes?.hoverHasBoxShadow && SHADOW_VAL,

// 		// Hover Padding
// 		'--padding-top-h': hoverPadding?.top && `${ hoverPadding.top }px`,
// 		'--padding-right-h': hoverPadding?.right && `${ hoverPadding.right }px`,
// 		'--padding-bottom-h':
// 			hoverPadding?.bottom && `${ hoverPadding.bottom }px`,
// 		'--padding-left-h': hoverPadding?.left && `${ hoverPadding.left }px`,

// 		// Hover Margin
// 		'--margin-top-h': hoverMargin?.top && `${ hoverMargin.top }px`,
// 		'--margin-right-h': hoverMargin?.right && `${ hoverMargin.right }px`,
// 		'--margin-bottom-h': hoverMargin?.bottom && `${ hoverMargin.bottom }px`,
// 		'--margin-left-h': hoverMargin?.left && `${ hoverMargin.left }px`,

// 		// Hover Border
// 		'--border-top-h': hoverBorder?.top && `${ hoverBorder.top }px`,
// 		'--border-right-h': hoverBorder?.right && `${ hoverBorder.right }px`,
// 		'--border-bottom-h': hoverBorder?.bottom && `${ hoverBorder.bottom }px`,
// 		'--border-left-h': hoverBorder?.left && `${ hoverBorder.left }px`,

// 		// Hover Radius
// 		'--radius-top-h':
// 			hoverBorderRadius?.top && `${ hoverBorderRadius.top }px`,
// 		'--radius-right-h':
// 			hoverBorderRadius?.right && `${ hoverBorderRadius.right }px`,
// 		'--radius-bottom-h':
// 			hoverBorderRadius?.bottom && `${ hoverBorderRadius.bottom }px`,
// 		'--radius-left-h':
// 			hoverBorderRadius?.left && `${ hoverBorderRadius.left }px`,
// 	} );
// };
