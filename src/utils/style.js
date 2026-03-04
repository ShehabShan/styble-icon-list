export const getResolvedSides = ( base, top, right, bottom, left ) => {
	const isValid = ( v ) => v !== undefined && v !== null && v !== '';

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

	const getFallbackValue = ( hoverVal, normalVal ) => {
		const isValid = ( v ) => v !== undefined && v !== null && v !== '';

		return isValid( hoverVal ) ? hoverVal : normalVal;
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

	const sMargin = getBox( attributes, 'sectionMargin' );

	const sPadding = getBox( attributes, 'sectionPadding' );

	const sBorder = getBox( attributes, 'sectionBorder' );

	const sBorderRadius = getBox( attributes, 'sectionBorderRadius' );

	const sHoverMargin = getBox( attributes, 'sectionHoverMargin' );

	const sHoverPadding = getBox( attributes, 'sectionHoverPadding' );

	const sHoverBorder = getBox( attributes, 'sectionHoverBorder' );

	const sHoverBorderRadius = getBox( attributes, 'sectionHoverBorderRadius' );

	const margin = getBox( attributes, 'margin' );

	const padding = getBox( attributes, 'padding' );

	const border = getBox( attributes, 'border' );

	const borderRadius = getBox( attributes, 'borderRadius' );

	const hoverPadding = getBox( attributes, 'hoverPadding' );

	const hoverBorder = getBox( attributes, 'hoverBorder' );

	const hoverMargin = getBox( attributes, 'hoverMargin' );

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
		attributes?.sectionHoverBackgroundGradient ||
		attributes?.sectionHoverBackgroundColor;

	return cleanStyles( {
		// ===============================
		//Advance Section
		// ===============================
		'--section-width':
			attributes?.sectionWidth && `${ attributes?.sectionWidth }px`,
		'--section-alignment': attributes?.sectionAlignment,
		'--section-box-shadow': attributes?.sectionHasBoxShadow && S_SHADOW_VAL,

		'--separator-thickness': withUnit(
			attributes?.separatorThickness,
			'px'
		),
		'--separator-color': attributes?.separatorColor,
		'--separator-style': attributes?.separatorType,
		// '--icon-size': withUnit( attributes?.iconSize, 'px' ),

		// ===============================
		// PARENT CONTAINER STYLES (Padding use pU)
		// ===============================

		'--section-background-color': sBackgroundValue || null,

		// Padding (use pU)
		'--section-padding-top': withUnit( sPadding?.top, spU ),
		'--section-padding-right': withUnit( sPadding?.right, spU ),
		'--section-padding-bottom': withUnit( sPadding?.bottom, spU ),
		'--section-padding-left': withUnit( sPadding?.left, spU ),

		//parent border
		'--section-border-color': attributes?.sectionBorderColor,
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

		'--section-background-color-h':
			sHoverBackgroundValue || sBackgroundValue || null,

		'--section-box-shadow-h':
			attributes?.sectionHoverHasBoxShadow ||
			attributes?.sectionHasBoxShadow
				? S_SHADOW_VAL
				: null,

		// Padding Hover (Falls back to normal padding)
		'--section-padding-top-h': withUnit(
			getFallbackValue( sHoverPadding?.top, sPadding?.top ),
			pU
		),
		'--section-padding-right-h': withUnit(
			getFallbackValue( sHoverPadding?.right, sPadding?.right ),
			pU
		),
		'--section-padding-bottom-h': withUnit(
			getFallbackValue( sHoverPadding?.bottom, sPadding?.bottom ),
			pU
		),
		'--section-padding-left-h': withUnit(
			getFallbackValue( sHoverPadding?.left, sPadding?.left ),
			pU
		),

		// Border Hover
		'--section-border-color-h':
			attributes?.sectionHoverBorderColor ||
			attributes?.sectionBorderColor,
		'--section-border-style-h':
			attributes?.sectionHoverBorderType || attributes?.sectionBorderType,

		'--section-border-top-width-h': withUnit(
			getFallbackValue( sHoverBorder?.top, sBorder?.top ),
			bU
		),
		'--section-border-right-width-h': withUnit(
			getFallbackValue( sHoverBorder?.right, sBorder?.right ),
			bU
		),
		'--section-border-bottom-width-h': withUnit(
			getFallbackValue( sHoverBorder?.bottom, sBorder?.bottom ),
			bU
		),
		'--section-border-left-width-h': withUnit(
			getFallbackValue( sHoverBorder?.left, sBorder?.left ),
			bU
		),

		// Margin Hover
		'--section-margin-top-h': withUnit(
			getFallbackValue( sHoverMargin?.top, sMargin?.top ),
			mU
		),
		'--section-margin-right-h': withUnit(
			getFallbackValue( sHoverMargin?.right, sMargin?.right ),
			mU
		),
		'--section-margin-bottom-h': withUnit(
			getFallbackValue( sHoverMargin?.bottom, sMargin?.bottom ),
			mU
		),
		'--section-margin-left-h': withUnit(
			getFallbackValue( sHoverMargin?.left, sMargin?.left ),
			mU
		),

		// Border Width (use bU)

		// Border Radius (use rU)

		// Border Radius Hover Fallback
		'--section-border-radius-top-h': withUnit(
			getFallbackValue( sHoverBorderRadius?.top, sBorderRadius?.top ),
			rU
		),
		'--section-border-radius-right-h': withUnit(
			getFallbackValue( sHoverBorderRadius?.right, sBorderRadius?.right ),
			rU
		),
		'--section-border-radius-bottom-h': withUnit(
			getFallbackValue(
				sHoverBorderRadius?.bottom,
				sBorderRadius?.bottom
			),
			rU
		),
		'--section-border-radius-left-h': withUnit(
			getFallbackValue( sHoverBorderRadius?.left, sBorderRadius?.left ),
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
		'--box-shadow-h':
			attributes?.hoverHasBoxShadow || attributes?.hasBoxShadow
				? SHADOW_VAL
				: null,

		// Border Color & Style Fallbacks
		'--border-color-h':
			attributes?.hoverBorderColor || attributes?.borderColor,
		'--border-style-h':
			attributes?.hoverBorderType || attributes?.borderType,

		// Hover Padding (Falls back to normal padding, uses hpU)
		'--padding-top-h': withUnit(
			getFallbackValue( hoverPadding?.top, padding?.top ),
			hpU
		),
		'--padding-right-h': withUnit(
			getFallbackValue( hoverPadding?.right, padding?.right ),
			hpU
		),
		'--padding-bottom-h': withUnit(
			getFallbackValue( hoverPadding?.bottom, padding?.bottom ),
			hpU
		),
		'--padding-left-h': withUnit(
			getFallbackValue( hoverPadding?.left, padding?.left ),
			hpU
		),

		// Hover Margin (Falls back to normal margin, uses hmU)
		'--margin-top-h': withUnit(
			getFallbackValue( hoverMargin?.top, margin?.top ),
			hmU
		),
		'--margin-right-h': withUnit(
			getFallbackValue( hoverMargin?.right, margin?.right ),
			hmU
		),
		'--margin-bottom-h': withUnit(
			getFallbackValue( hoverMargin?.bottom, margin?.bottom ),
			hmU
		),
		'--margin-left-h': withUnit(
			getFallbackValue( hoverMargin?.left, margin?.left ),
			hmU
		),

		// Hover Border Width (Falls back to normal border width, uses hbU)
		'--border-top-h': withUnit(
			getFallbackValue( hoverBorder?.top, border?.top ),
			hbU
		),
		'--border-right-h': withUnit(
			getFallbackValue( hoverBorder?.right, border?.right ),
			hbU
		),
		'--border-bottom-h': withUnit(
			getFallbackValue( hoverBorder?.bottom, border?.bottom ),
			hbU
		),
		'--border-left-h': withUnit(
			getFallbackValue( hoverBorder?.left, border?.left ),
			hbU
		),

		// Hover Radius (Falls back to normal radius, uses hrU)
		'--radius-top-h': withUnit(
			getFallbackValue( hoverRadius?.top, borderRadius?.top ),
			hrU
		),
		'--radius-right-h': withUnit(
			getFallbackValue( hoverRadius?.right, borderRadius?.right ),
			hrU
		),
		'--radius-bottom-h': withUnit(
			getFallbackValue( hoverRadius?.bottom, borderRadius?.bottom ),
			hrU
		),
		'--radius-left-h': withUnit(
			getFallbackValue( hoverRadius?.left, borderRadius?.left ),
			hrU
		),
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

	const getFallbackValue = ( hoverVal, normalVal ) => {
		const isValid = ( v ) => v !== undefined && v !== null && v !== '';

		return isValid( hoverVal ) ? hoverVal : normalVal;
	};

	const SHADOW_VAL = 'rgb(38, 57, 77) 0px 20px 30px -10px';

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
		'--bg-h-IP': hoverBackground || backgroundValue || null,
		'--box-shadow-h-IP':
			attributes?.hoverHasBoxShadow || attributes?.hasBoxShadow
				? SHADOW_VAL
				: null,
		'--border-color-h-IP':
			attributes?.hoverBorderColor || attributes?.childBorderColor,
		'--border-style-h-IP':
			attributes?.hoverBorderType || attributes?.childBorderType,

		// Hover Padding (Falls back to normal padding, uses hpU)
		'--padding-top-h-IP': withUnit(
			getFallbackValue( hoverPadding?.top, padding?.top ),
			hpU
		),
		'--padding-right-h-IP': withUnit(
			getFallbackValue( hoverPadding?.right, padding?.right ),
			hpU
		),
		'--padding-bottom-h-IP': withUnit(
			getFallbackValue( hoverPadding?.bottom, padding?.bottom ),
			hpU
		),
		'--padding-left-h-IP': withUnit(
			getFallbackValue( hoverPadding?.left, padding?.left ),
			hpU
		),

		// Hover Margin (Falls back to normal margin, uses hmU)
		'--margin-top-h-IP': withUnit(
			getFallbackValue( hoverMargin?.top, margin?.top ),
			hmU
		),
		'--margin-right-h-IP': withUnit(
			getFallbackValue( hoverMargin?.right, margin?.right ),
			hmU
		),
		'--margin-bottom-h-IP': withUnit(
			getFallbackValue( hoverMargin?.bottom, margin?.bottom ),
			hmU
		),
		'--margin-left-h-IP': withUnit(
			getFallbackValue( hoverMargin?.left, margin?.left ),
			hmU
		),

		// Hover Border Width (Falls back to normal border width, uses hbU)
		'--border-top-h-IP': withUnit(
			getFallbackValue( hoverBorder?.top, border?.top ),
			hbU
		),
		'--border-right-h-IP': withUnit(
			getFallbackValue( hoverBorder?.right, border?.right ),
			hbU
		),
		'--border-bottom-h-IP': withUnit(
			getFallbackValue( hoverBorder?.bottom, border?.bottom ),
			hbU
		),
		'--border-left-h-IP': withUnit(
			getFallbackValue( hoverBorder?.left, border?.left ),
			hbU
		),

		// Hover Radius (Falls back to normal radius, uses hrU)
		'--radius-top-h-IP': withUnit(
			getFallbackValue( hoverRadius?.top, borderRadius?.top ),
			hrU
		),
		'--radius-right-h-IP': withUnit(
			getFallbackValue( hoverRadius?.right, borderRadius?.right ),
			hrU
		),
		'--radius-bottom-h-IP': withUnit(
			getFallbackValue( hoverRadius?.bottom, borderRadius?.bottom ),
			hrU
		),
		'--radius-left-h-IP': withUnit(
			getFallbackValue( hoverRadius?.left, borderRadius?.left ),
			hrU
		),
	} );
};
