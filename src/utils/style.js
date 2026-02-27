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

export const getBlockStyles = ( attributes ) => {
	const cleanStyles = ( obj ) => {
		return Object.fromEntries(
			Object.entries( obj ).filter( ( [ _, value ] ) => !! value )
		);
	};

	// const cleanStyles = ( obj ) => {
	// 	return Object.fromEntries(
	// 		Object.entries( obj ).filter(
	// 			( [ _, value ] ) =>
	// 				value !== undefined && value !== null && value !== ''
	// 		)
	// 	);
	// };

	const withUnit = ( value, unit = 'px' ) => {
		if ( ! value || value === 0 || value === '0' ) {
			return null;
		}

		return `${ value }${ unit }`;
	};

	const SHADOW_VAL =
		'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';

	// Units Logic
	const fzU = attributes?.fontSizeUnits || 'px';
	const fhU = attributes?.fontHeightUnits || 'px';
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

	const childBorder = getResolvedSides(
		attributes?.childBorder,
		attributes?.childBorderTop,
		attributes?.childBorderRight,
		attributes?.childBorderBottom,
		attributes?.childBorderLeft
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

	const childHoverBorder = getResolvedSides(
		attributes?.childHoverBorder,
		attributes?.childHoverBorderTop,
		attributes?.childHoverBorderRigchildHt,
		attributes?.childHoverBorderBottom,
		attributes?.childHoverBorderLeft
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

	const hoverBackground =
		attributes?.hoverBackgroundColor ?? attributes?.hoverBackgroundGradient;

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
		'--hover-icon-color': attributes?.hoverIconColor,

		// ===============================
		// TYPOGRAPHY DEFAULTS
		// ===============================
		'--font-family': attributes?.fontFamily,
		'--font-size': withUnit( attributes?.fontSize, fzU ),
		'--text-color': attributes?.textColor,
		'--font-weight': attributes?.fontWeight,
		'--font-height': withUnit( attributes?.fontHeight, 'em' ),
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
		'--box-shadow': attributes?.hasBoxShadow && SHADOW_VAL,

		// Padding (use pU)
		'--padding-top': withUnit( padding?.top, pU ),
		'--padding-right': withUnit( padding?.right, pU ),
		'--padding-bottom': withUnit( padding?.bottom, pU ),
		'--padding-left': withUnit( padding?.left, pU ),

		//parent border
		'--border-color': attributes?.borderColor,
		'--border-style': attributes?.borderType,
		'--border-top-width': withUnit( border?.top, bU ),
		'--border-right-width': withUnit( border?.right, bU ),
		'--border-bottom-width': withUnit( border?.bottom, bU ),
		'--border-left-width': withUnit( border?.left, bU ),

		//Child Border
		'--child-border-color': attributes?.childBorderColor,
		'--child-border-style': attributes?.childBorderType,
		'--child-border-top-width': withUnit( childBorder?.top, bU ),
		'--child-border-right-width': withUnit( childBorder?.right, bU ),
		'--child-border-bottom-width': withUnit( childBorder?.bottom, bU ),
		'--child-border-left-width': withUnit( childBorder?.left, bU ),

		// Margin (use mU)
		'--margin-top': withUnit( margin?.top, mU ),
		'--margin-right': withUnit( margin?.right, mU ),
		'--margin-bottom': withUnit( margin?.bottom, mU ),
		'--margin-left': withUnit( margin?.left, mU ),

		// Border Width (use bU)

		// Border Radius (use rU)
		'--border-radius-top': withUnit( borderRadius?.top, rU ),
		'--border-radius-right': withUnit( borderRadius?.right, rU ),
		'--border-radius-bottom': withUnit( borderRadius?.bottom, rU ),
		'--border-radius-left': withUnit( borderRadius?.left, rU ),

		// ===============================
		// HOVER DEFAULTS
		// ===============================
		'--bg-h':
			( attributes?.hoverBackgroundColor ||
				attributes?.hoverBackgroundGradient ) &&
			`${ hoverBackground }`,

		'--box-shadow-h': attributes?.hoverHasBoxShadow && SHADOW_VAL,

		'--border-color-h': attributes?.hoverBorderColor,
		'--border-style-h': attributes?.hoverBorderType,

		//child border-color-h and border-style-h

		'--child-border-color-h': attributes?.childHoverBorderColor,
		'--child-border-style-h': attributes?.childHoverBorderType,

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

		//Child hover border

		'--child-border-top-h': withUnit( childHoverBorder?.top, hbU ),
		'--child-border-right-h': withUnit( childHoverBorder?.right, hbU ),
		'--child-border-bottom-h': withUnit( childHoverBorder?.bottom, hbU ),
		'--child-border-left-h': withUnit( childHoverBorder?.left, hbU ),

		// Hover Radius (use hrU)
		'--radius-top-h': withUnit( hoverRadius?.top, hrU ),
		'--radius-right-h': withUnit( hoverRadius?.right, hrU ),
		'--radius-bottom-h': withUnit( hoverRadius?.bottom, hrU ),
		'--radius-left-h': withUnit( hoverRadius?.left, hrU ),
	} );
};
