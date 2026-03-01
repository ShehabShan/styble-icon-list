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

	const withUnit = ( value, unit = 'px' ) => {
		if ( ! value || value === 0 || value === '0' ) {
			return null;
		}

		return `${ value }${ unit }`;
	};

	const SHADOW_VAL =
		'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';

	// Units Logic

	const getUnit = ( key ) => attributes?.[ key ] || 'px';

	const fzU = getUnit( 'fontSizeUnits' );
	const fhU = getUnit( 'fontHeightUnits' );
	const lsU = getUnit( 'letterSpacingUnits' );
	const wsU = getUnit( 'wordSpacingUnits' );

	const pU = getUnit( 'paddingUnits' );
	const mU = getUnit( 'marginUnits' );
	const bU = getUnit( 'borderUnits' );
	const rU = getUnit( 'borderRadiusUnits' );

	const hpU = getUnit( 'hoverPaddingUnits' );
	const hmU = getUnit( 'hoverMarginUnits' );
	const hbU = getUnit( 'hoverBorderUnits' );
	const hrU = getUnit( 'hoverBorderRadiusUnits' );

	// -------------------------------
	// Resolve Parent Box Sides
	// -------------------------------

	const getBox = ( attrs, prefix ) =>
		getResolvedSides(
			attrs?.[ prefix ],
			attrs?.[ `${ prefix }Top` ],
			attrs?.[ `${ prefix }Right` ],
			attrs?.[ `${ prefix }Bottom` ],
			attrs?.[ `${ prefix }Left` ]
		);

	const allPadding = getBox( attributes, 'allPadding' );

	const margin = getBox( attributes, 'margin' );

	const padding = getBox( attributes, 'padding' );

	const border = getBox( attributes, 'border' );

	const borderRadius = getBox( attributes, 'borderRadius' );

	const hoverPadding = getBox( attributes, 'hoverPadding' );

	const hoverBorder = getBox( attributes, 'hoverBorder' );

	const hoverMargin = getBox( attributes, 'hoverMargin' );

	let itemsWidthValue = null;

	if ( attributes?.itemWidthType === 'auto' ) {
		itemsWidthValue = 'fit-content';
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
		// '--icon-size': withUnit( attributes?.iconSize, 'px' ),
		'--icon-color': attributes?.iconColor,
		'--hover-icon-color': attributes?.hoverIconColor,
		'--container-bg-color': attributes?.containerColor,

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
	} );
};

export const getIconPickerBlockStyles = ( attributes ) => {
	const cleanStyles = ( obj ) => {
		return Object.fromEntries(
			Object.entries( obj ).filter( ( [ _, value ] ) => !! value )
		);
	};

	const withUnit = ( value, unit = 'px' ) => {
		if ( ! value || value === 0 || value === '0' ) {
			return null;
		}

		return `${ value }${ unit }`;
	};

	const SHADOW_VAL =
		'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';

	// Units Logic

	const getUnit = ( key ) => attributes?.[ key ] || 'px';

	const pU = getUnit( 'paddingUnits' );
	const mU = getUnit( 'marginUnits' );
	const bU = getUnit( 'borderUnits' );
	const rU = getUnit( 'borderRadiusUnits' );

	const hpU = getUnit( 'hoverPaddingUnits' );
	const hmU = getUnit( 'hoverMarginUnits' );
	const hbU = getUnit( 'hoverBorderUnits' );
	const hrU = getUnit( 'hoverBorderRadiusUnits' );

	// -------------------------------
	// Resolve Parent Box Sides
	// -------------------------------

	const getBox = ( attrs, prefix ) =>
		getResolvedSides(
			attrs?.[ prefix ],
			attrs?.[ `${ prefix }Top` ],
			attrs?.[ `${ prefix }Right` ],
			attrs?.[ `${ prefix }Bottom` ],
			attrs?.[ `${ prefix }Left` ]
		);

	const margin = getBox( attributes, 'childMargin' );

	const padding = getBox( attributes, 'childPadding' );

	const border = getBox( attributes, 'childBorder' );

	const borderRadius = getBox( attributes, 'childBorderRadius' );

	const hoverPadding = getBox( attributes, 'childHoverPadding' );

	const hoverBorder = getBox( attributes, 'childHoverBorder' );

	const hoverMargin = getBox( attributes, 'childHoverMargin' );

	const hoverRadius = getBox( attributes, 'childHoverborderRadius' );

	const background =
		attributes?.backgroundColor ?? attributes?.backgroundGradient;

	const hoverBackground =
		attributes?.hoverBackgroundColor ?? attributes?.hoverBackgroundGradient;

	return cleanStyles( {
		// ===============================
		// GENERAL
		// ===============================
		'--icon-size': withUnit( attributes?.iconSize, 'px' ),
		'--icon-color': attributes?.iconColor,
		'--hover-icon-color': attributes?.hoverIconColor,

		// ===============================
		// CHILD DEFAULTS
		// ===============================
		'--background-color-IP':
			( attributes?.backgroundColor || attributes?.backgroundGradient ) &&
			`${ background }`,

		'--box-shadow-IP': attributes?.hasBoxShadow && SHADOW_VAL,

		'--padding-top-IP': withUnit( padding?.top, pU ),
		'--padding-right-IP': withUnit( padding?.right, pU ),
		'--padding-bottom-IP': withUnit( padding?.bottom, pU ),
		'--padding-left-IP': withUnit( padding?.left, pU ),

		'--border-color-IP': attributes?.childBorderColor,
		'--border-style-IP': attributes?.childBorderType,
		'--border-top-width-IP': withUnit( border?.top, bU ),
		'--border-right-width-IP': withUnit( border?.right, bU ),
		'--border-bottom-width-IP': withUnit( border?.bottom, bU ),
		'--border-left-width-IP': withUnit( border?.left, bU ),

		// Margin (use mU)
		'--margin-top-IP': withUnit( margin?.top, mU ),
		'--margin-right-IP': withUnit( margin?.right, mU ),
		'--margin-bottom-IP': withUnit( margin?.bottom, mU ),
		'--margin-left-IP': withUnit( margin?.left, mU ),

		// Border Radius (use rU)
		'--border-radius-top-IP': withUnit( borderRadius?.top, rU ),
		'--border-radius-right-IP': withUnit( borderRadius?.right, rU ),
		'--border-radius-bottom-IP': withUnit( borderRadius?.bottom, rU ),
		'--border-radius-left-IP': withUnit( borderRadius?.left, rU ),

		// ===============================
		// HOVER DEFAULTS
		// ===============================
		'--bg-h-IP':
			( attributes?.hoverBackgroundColor ||
				attributes?.hoverBackgroundGradient ) &&
			`${ hoverBackground }`,

		'--box-shadow-h-IP': attributes?.hoverHasBoxShadow && SHADOW_VAL,

		'--border-color-h-IP': attributes?.hoverBorderColor,
		'--border-style-h-IP': attributes?.hoverBorderType,

		// Hover Padding (use hpU)
		'--padding-top-h-IP': withUnit( hoverPadding?.top, hpU ),
		'--padding-right-h-IP': withUnit( hoverPadding?.right, hpU ),
		'--padding-bottom-h-IP': withUnit( hoverPadding?.bottom, hpU ),
		'--padding-left-h-IP': withUnit( hoverPadding?.left, hpU ),

		// Hover Margin (use hmU)
		'--margin-top-h-IP': withUnit( hoverMargin?.top, hmU ),
		'--margin-right-h-IP': withUnit( hoverMargin?.right, hmU ),
		'--margin-bottom-h-IP': withUnit( hoverMargin?.bottom, hmU ),
		'--margin-left-h-IP': withUnit( hoverMargin?.left, hmU ),

		// Hover Border (use hbU)
		'--border-top-h-IP': withUnit( hoverBorder?.top, hbU ),
		'--border-right-h-IP': withUnit( hoverBorder?.right, hbU ),
		'--border-bottom-h-IP': withUnit( hoverBorder?.bottom, hbU ),
		'--border-left-h-IP': withUnit( hoverBorder?.left, hbU ),

		//Child hover border

		// Hover Radius (use hrU)
		'--radius-top-h-IP': withUnit( hoverRadius?.top, hrU ),
		'--radius-right-h-IP': withUnit( hoverRadius?.right, hrU ),
		'--radius-bottom-h-IP': withUnit( hoverRadius?.bottom, hrU ),
		'--radius-left-h-IP': withUnit( hoverRadius?.left, hrU ),
	} );
};
