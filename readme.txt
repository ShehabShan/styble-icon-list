=== Icon List ===
Contributors:      The WordPress Contributors
Tags:              block
Tested up to:      6.8
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Example block scaffolded with Create Block tool.

== Description ==

This is the long description. No limit, and you can use Markdown (as well as in the following sections).

For backwards compatibility, if this section is missing, the full length of the short description will be used, and
Markdown parsed.

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/icon-list` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= A question that someone might have =

An answer to that question.

= What about foo bar? =

Answer to foo bar dilemma.

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

== Changelog ==

= 0.1.0 =
* Release

== Arbitrary section ==

You may provide arbitrary sections, in the same format as the ones above. This may be of use for extremely complicated
plugins where more information needs to be conveyed that doesn't fit into the categories of "description" or
"installation." Arbitrary sections will be shown below the built-in sections outlined above.


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

	const getBox = ( attributes, prefix ) =>
		getResolvedSides(
			attributes?.[ prefix ],
			attributes?.[ `${ prefix }Top` ],
			attributes?.[ `${ prefix }Right` ],
			attributes?.[ `${ prefix }Bottom` ],
			attributes?.[ `${ prefix }Left` ]
		);

	const allPadding = getBox( attributes, 'allPadding' );

	// const allPadding = getResolvedSides(
	// 	attributes?.allPadding,
	// 	attributes?.allPaddingTop,
	// 	attributes?.allPaddingRight,
	// 	attributes?.allPaddingBottom,
	// 	attributes?.allPaddingLeft
	// );

	const margin = getBox( attributes, 'margin' );

	const childMargin = getBox( attributes, 'childMargin' );

	// const childMargin = getResolvedSides(
	// 	attributes?.childMargin,
	// 	attributes?.childMarginTop,
	// 	attributes?.childMarginRight,
	// 	attributes?.childMarginBottom,
	// 	attributes?.childMarginLeft
	// );

	const padding = getBox( attributes, 'padding' );
	const childPadding = getBox( attributes, 'childPadding' );

	const padding = getResolvedSides(
		attributes?.padding,
		attributes?.paddingTop,
		attributes?.paddingRight,
		attributes?.paddingBottom,
		attributes?.paddingLeft
	);
	const border = getBox( attributes, 'border' );
	const childBorder = getBox( attributes, 'childBorder' );
	// const border = getResolvedSides(
	// 	attributes?.border,
	// 	attributes?.borderTop,
	// 	attributes?.borderRight,
	// 	attributes?.borderBottom,
	// 	attributes?.borderLeft
	// );

	// const childBorder = getResolvedSides(
	// 	attributes?.childBorder,
	// 	attributes?.childBorderTop,
	// 	attributes?.childBorderRight,
	// 	attributes?.childBorderBottom,
	// 	attributes?.childBorderLeft
	// );
	//
	const margin = getBox( attributes, 'margin' );

	const borderRadius = getBox( attributes, 'borderRadius' );
	const borderRadius = getResolvedSides(
		attributes?.borderRadius,
		attributes?.borderRadiusTop,
		attributes?.borderRadiusRight,
		attributes?.borderRadiusBottom,
		attributes?.borderRadiusLeft
	);
	const hoverPadding = getBox( attributes, 'hoverPadding' );
	const hoverPadding = getResolvedSides(
		attributes?.hoverPadding,
		attributes?.hoverPaddingTop,
		attributes?.hoverPaddingRight,
		attributes?.hoverPaddingBottom,
		attributes?.hoverPaddingLeft
	);
	const hoverBorder = getBox( attributes, 'hoverBorder' );
	const hoverBorder = getResolvedSides(
		attributes?.hoverBorder,
		attributes?.hoverBorderTop,
		attributes?.hoverBorderRight,
		attributes?.hoverBorderBottom,
		attributes?.hoverBorderLeft
	);
	const childHoverBorder = getBox( attributes, 'childHoverBorder' );
	const childHoverBorder = getResolvedSides(
		attributes?.childHoverBorder,
		attributes?.childHoverBorderTop,
		attributes?.childHoverBorderRigchildHt,
		attributes?.childHoverBorderBottom,
		attributes?.childHoverBorderLeft
	);
	const hoverMargin = getBox( attributes, 'hoverMargin' );

	const hoverMargin = getResolvedSides(
		attributes?.hoverMargin,
		attributes?.hoverMarginTop,
		attributes?.hoverMarginRight,
		attributes?.hoverMarginBottom,
		attributes?.hoverMarginLeft
	);
	const hoverBorderRadius = getBox( attributes, 'hoverBorderRadius' );
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
