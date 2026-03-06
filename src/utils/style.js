export const getResolvedSides = ( base, top, right, bottom, left ) => {
	// Treat 0 as invalid by adding (v !== 0)
	const isValid = ( v ) =>
		v !== undefined && v !== null && v !== '' && v !== 0;

	const resolve = ( val ) => {
		if ( isValid( val ) ) {
			return Number( val );
		}
		if ( isValid( base ) ) {
			return Number( base );
		}
		return undefined;
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
		if (
			value === undefined ||
			value === null ||
			value === '' ||
			value === 0
		) {
			return null;
		}
		return `${ value }${ unit }`;
	};

	const SHADOW_VAL = 'rgb(38, 57, 77) 0px 20px 30px -10px';
	const S_SHADOW_VAL =
		'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px';

	// Units Logic

	const getUnit = ( key ) => attributes?.[ key ] || 'px';

	const spU = getUnit( 'sectionPaddingUnits' );
	const smU = getUnit( 'sectionMarginUnits' );
	const sbU = getUnit( 'sectionBorderUnits' );
	const srU = getUnit( 'sectionBorderRadiusUnits' );

	const pU = getUnit( 'paddingUnits' );
	const mU = getUnit( 'marginUnits' );
	const bU = getUnit( 'borderUnits' );
	const rU = getUnit( 'borderRadiusUnits' );

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

	const sMargin = getBox( attributes, 'sectionMargin' );

	const sPadding = getBox( attributes, 'sectionPadding' );

	const sBorder = getBox( attributes, 'sectionBorder' );

	const sBorderRadius = getBox( attributes, 'sectionBorderRadius' );

	const sHoverBorder = getBox( attributes, 'hoverSectionBorder' );

	const sHoverBorderRadius = getBox( attributes, 'hoverSectionBorderRadius' );

	const margin = getBox( attributes, 'margin' );

	const padding = getBox( attributes, 'padding' );

	const border = getBox( attributes, 'border' );

	const borderRadius = getBox( attributes, 'borderRadius' );

	const hoverBorder = getBox( attributes, 'hoverBorder' );

	const hoverRadius = getBox( attributes, 'hoverBorderRadius' );

	let itemsWidthValue = null;

	if ( attributes?.itemWidthType === 'auto' ) {
		itemsWidthValue = 'fit-content';
	} else if ( attributes?.itemWidthType === 'custom' ) {
		itemsWidthValue = `${ attributes.itemsWidth }px`;
	}

	const backgroundValue =
		attributes?.backgroundGradient || attributes?.backgroundColor;

	const hoverBackground =
		attributes?.hoverBackgroundGradient || attributes?.hoverBackgroundColor;

	const sBackgroundValue =
		attributes?.sectionBackgroundGradient ||
		attributes?.sectionBackgroundColor;

	const sHoverBackgroundValue =
		attributes?.hoverSectionBackgroundGradient ||
		attributes?.hoverSectionBackgroundColor;

	return cleanStyles( {
		// ===============================
		//Advance Section
		// ===============================
		'--section-width':
			attributes?.sectionWidth && `${ attributes?.sectionWidth }px`,
		'--section-alignment': attributes?.sectionAlignment,

		'--section-box-shadow': attributes?.sectionHasBoxShadow && S_SHADOW_VAL,
		'--section-box-shadow-h':
			attributes?.hoverSectionHasBoxShadow && S_SHADOW_VAL,

		'--separator-thickness': withUnit(
			attributes?.separatorThickness,
			'px'
		),
		'--separator-color': attributes?.separatorColor,
		'--separator-style': attributes?.separatorType,
		'--icon-size': withUnit( attributes?.iconSize, 'px' ),

		'--section-background-color': sBackgroundValue || null,

		// Padding (use pU)
		'--section-padding-top': withUnit( sPadding?.top, spU ),
		'--section-padding-right': withUnit( sPadding?.right, spU ),
		'--section-padding-bottom': withUnit( sPadding?.bottom, spU ),
		'--section-padding-left': withUnit( sPadding?.left, spU ),

		//parent border
		'--section-border-color': attributes?.sectionBorderColor,
		'--section-border-color-h': attributes?.hoverSectionBorderColor,

		'--section-border-style': attributes?.sectionBorderType,
		'--section-border-top-width': withUnit( sBorder?.top, sbU ),
		'--section-border-right-width': withUnit( sBorder?.right, sbU ),
		'--section-border-bottom-width': withUnit( sBorder?.bottom, sbU ),
		'--section-border-left-width': withUnit( sBorder?.left, sbU ),

		// Margin (use mU)
		'--section-margin-top': withUnit( sMargin?.top, smU ),
		'--section-margin-right': withUnit( sMargin?.right, smU ),
		'--section-margin-bottom': withUnit( sMargin?.bottom, smU ),
		'--section-margin-left': withUnit( sMargin?.left, smU ),

		// Border Radius (use rU)
		'--section-border-radius-top': withUnit( sBorderRadius?.top, srU ),
		'--section-border-radius-right': withUnit( sBorderRadius?.right, srU ),
		'--section-border-radius-bottom': withUnit(
			sBorderRadius?.bottom,
			srU
		),
		'--section-border-radius-left': withUnit( sBorderRadius?.left, srU ),

		//Hover section style

		'--section-background-color-h': sHoverBackgroundValue || null,

		// Border Hover

		'--section-border-style-h': attributes?.hoverSectionBorderType,

		'--section-border-top-width-h': withUnit( sHoverBorder?.top, bU ),
		'--section-border-right-width-h': withUnit( sHoverBorder?.right, bU ),
		'--section-border-bottom-width-h': withUnit( sHoverBorder?.bottom, bU ),
		'--section-border-left-width-h': withUnit( sHoverBorder?.left, bU ),

		// Border Radius Hover Fallback
		'--section-border-radius-top-h': withUnit(
			sHoverBorderRadius?.top,
			rU
		),
		'--section-border-radius-right-h': withUnit(
			sHoverBorderRadius?.right,
			rU
		),
		'--section-border-radius-bottom-h': withUnit(
			sHoverBorderRadius?.bottom,
			rU
		),
		'--section-border-radius-left-h': withUnit(
			sHoverBorderRadius?.left,
			rU
		),

		// ===============================
		// GENERAL
		// ===============================
		'--items-width': itemsWidthValue,
		'--selectedIcon': attributes?.selectedIcon,

		// '--icon-size': withUnit( attributes?.iconSize, 'px' ),
		'--icon-color': attributes?.iconColor,
		'--hover-icon-color': attributes?.hoverIconColor,
		'--container-bg-color': attributes?.containerColor,

		// ===============================
		// TYPOGRAPHY DEFAULTS
		// ===============================
		'--font-family': attributes?.fontFamily,
		'--font-size': withUnit( attributes?.fontSize, 'px' ),
		'--text-color': attributes?.textColor,
		'--font-weight': attributes?.fontWeight,
		'--font-height': withUnit( attributes?.fontHeight, 'em' ),
		'--letter-spacing': withUnit( attributes?.letterSpacing, 'px' ),
		'--word-spacing': withUnit( attributes?.wordSpacing, 'px' ),
		'--font-style-italic': attributes?.isItalic && 'italic',
		'--text-decoration':
			( attributes?.isUnderline || attributes?.isStrikethrough ) &&
			`${ attributes?.isUnderline ? 'underline' : '' } ${
				attributes?.isStrikethrough ? 'line-through' : ''
			}`.trim(),
		'--text-transform': attributes?.textTransform,

		// ===============================
		// CHILD DEFAULTS
		// ===============================

		'--background-color': backgroundValue || null,
		'--box-shadow': attributes?.hasBoxShadow && SHADOW_VAL,
		'--box-shadow-h': attributes?.hoverHasBoxShadow && SHADOW_VAL,
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
		'--bg-h': hoverBackground || backgroundValue || null,

		// Border Color & Style Fallbacks
		'--border-color-h':
			attributes?.hoverBorderColor || attributes?.borderColor,
		'--border-style-h':
			attributes?.hoverBorderType || attributes?.borderType,

		// Hover Border Width (Falls back to normal border width, uses hbU)
		'--border-top-h': withUnit( hoverBorder?.top, bU ),
		'--border-right-h': withUnit( hoverBorder?.right, bU ),
		'--border-bottom-h': withUnit( hoverBorder?.bottom, bU ),
		'--border-left-h': withUnit( hoverBorder?.left, bU ),

		// Hover Radius (Falls back to normal radius, uses hrU)
		'--radius-top-h': withUnit( hoverRadius?.top, rU ),
		'--radius-right-h': withUnit( hoverRadius?.right, rU ),
		'--radius-bottom-h': withUnit( hoverRadius?.bottom, rU ),
		'--radius-left-h': withUnit( hoverRadius?.left, rU ),
	} );
};

export const getChildBlockStyles = ( attributes ) => {
	const cleanStyles = ( obj ) => {
		return Object.fromEntries(
			Object.entries( obj ).filter(
				( [ _, value ] ) =>
					value !== undefined && value !== null && value !== ''
			)
		);
	};

	const withUnit = ( value, unit = 'px' ) => {
		if ( value === undefined || value === null || value === '' ) {
			return null;
		}
		return `${ value }${ unit }`;
	};

	const SHADOW_VAL = 'rgb(38, 57, 77) 0px 20px 30px -10px';

	// Units Logic

	const getUnit = ( key ) => attributes?.[ key ] || 'px';

	const pU = getUnit( 'paddingUnits' );
	const mU = getUnit( 'marginUnits' );
	const bU = getUnit( 'borderUnits' );
	const rU = getUnit( 'borderRadiusUnits' );

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

	const hoverBorder = getBox( attributes, 'hoverChildBorder' );

	const hoverRadius = getBox( attributes, 'hoverChildBorderRadius' );

	const backgroundValue =
		attributes?.backgroundGradient || attributes?.backgroundColor;

	const hoverBackground =
		attributes?.hoverBackgroundGradient || attributes?.hoverBackgroundColor;

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
		'--background-color-IP': backgroundValue || null,

		'--box-shadow-IP': attributes?.hasBoxShadow && SHADOW_VAL,

		// ===============================
		'--font-family': attributes?.fontFamily,
		'--font-size': withUnit( attributes?.fontSize, 'px' ),
		'--text-color': attributes?.textColor,
		'--font-weight': attributes?.fontWeight,
		'--font-height': withUnit( attributes?.fontHeight, 'em' ),
		'--letter-spacing': withUnit( attributes?.letterSpacing, 'px' ),
		'--word-spacing': withUnit( attributes?.wordSpacing, 'px' ),
		'--font-style-italic': attributes?.isItalic && 'italic',
		'--text-decoration':
			( attributes?.isUnderline || attributes?.isStrikethrough ) &&
			`${ attributes?.isUnderline ? 'underline' : '' } ${
				attributes?.isStrikethrough ? 'line-through' : ''
			}`,
		'--text-transform': attributes?.textTransform,
		'--max-content-width': withUnit( attributes?.maxContentWidth, 'px' ),
		'--text-alignment': attributes?.alignment,

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
		// HOVER DEFAULTS (With Fallbacks)
		// ===============================
		'--bg-h-IP': hoverBackground || null,
		'--box-shadow-h-IP': attributes?.hoverHasBoxShadow && SHADOW_VAL,

		'--border-color-h-IP': attributes?.hoverChildBorderColor,
		'--border-style-h-IP': attributes?.hoverChildBorderType,

		// Hover Border Width (Falls back to normal border width, uses hbU)
		'--border-top-h-IP': withUnit( hoverBorder?.top, bU ),
		'--border-right-h-IP': withUnit( hoverBorder?.right, bU ),
		'--border-bottom-h-IP': withUnit( hoverBorder?.bottom, bU ),
		'--border-left-h-IP': withUnit( hoverBorder?.left, bU ),

		// Hover Radius (Falls back to normal radius, uses hrU)
		'--radius-top-h-IP': withUnit( hoverRadius?.top, rU ),
		'--radius-right-h-IP': withUnit( hoverRadius?.right, rU ),
		'--radius-bottom-h-IP': withUnit( hoverRadius?.bottom, rU ),
		'--radius-left-h-IP': withUnit( hoverRadius?.left, rU ),
	} );
};
