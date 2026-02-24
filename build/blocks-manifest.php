<?php
// This file is generated. Do not modify it manually.
return array(
	'icon-list' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/icon-list',
		'version' => '0.1.0',
		'title' => 'Icon List',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'preset' => array(
				'type' => 'string',
				'default' => 'preset-1'
			),
			'listOrientation' => array(
				'type' => 'string',
				'default' => 'vertical'
			),
			'itemsGap' => array(
				'type' => 'number',
				'default' => 10
			),
			'selectedIcon' => array(
				'type' => 'string'
			),
			'hasIcon' => array(
				'type' => 'boolean',
				'default' => false
			),
			'iconSize' => array(
				'type' => 'number',
				'default' => 20
			),
			'separatorType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'separatorColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'separatorThickness' => array(
				'type' => 'number',
				'default' => 1
			),
			'itemWidthType' => array(
				'type' => 'string',
				'default' => 'auto'
			),
			'itemsWidth' => array(
				'type' => 'number',
				'default' => 200
			),
			'fontWeight' => array(
				'type' => 'number',
				'default' => 400
			),
			'fontFamily' => array(
				'type' => 'string',
				'default' => '"Open Sans", sans-serif'
			),
			'fontSize' => array(
				'type' => 'number',
				'default' => 16
			),
			'fontHeight' => array(
				'type' => 'number',
				'default' => 1.2
			),
			'letterSpacing' => array(
				'type' => 'number',
				'default' => 0
			),
			'wordSpacing' => array(
				'type' => 'number',
				'default' => 0
			),
			'isItalic' => array(
				'type' => 'boolean',
				'default' => false
			),
			'isUnderline' => array(
				'type' => 'boolean',
				'default' => false
			),
			'isStrikethrough' => array(
				'type' => 'boolean',
				'default' => false
			),
			'textTransform' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'iconColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'itemStyleType' => array(
				'type' => 'string',
				'default' => 'normal'
			),
			'backgroundType' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#fff'
			),
			'backgroundGradient' => array(
				'type' => 'string'
			),
			'allPadding' => array(
				'type' => 'number',
				'default' => 0
			),
			'allPaddingTop' => array(
				'type' => 'number'
			),
			'allPaddingRight' => array(
				'type' => 'number'
			),
			'allPaddingLeft' => array(
				'type' => 'number'
			),
			'allPaddingBottom' => array(
				'type' => 'number'
			),
			'padding' => array(
				'type' => 'number',
				'default' => 0
			),
			'paddingTop' => array(
				'type' => 'number'
			),
			'paddingRight' => array(
				'type' => 'number'
			),
			'paddingBottom' => array(
				'type' => 'number'
			),
			'paddingLeft' => array(
				'type' => 'number'
			),
			'border' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderTop' => array(
				'type' => 'number'
			),
			'borderRight' => array(
				'type' => 'number'
			),
			'borderBottom' => array(
				'type' => 'number'
			),
			'borderLeft' => array(
				'type' => 'number'
			),
			'borderType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => '#2F2F2F'
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderRadiusTop' => array(
				'type' => 'number'
			),
			'borderRadiusRight' => array(
				'type' => 'number'
			),
			'borderRadiusBottom' => array(
				'type' => 'number'
			),
			'borderRadiusLeft' => array(
				'type' => 'number'
			),
			'hadBoxShadow' => array(
				'type' => 'boolean',
				'default' => 'none'
			),
			'hoverBackgroundType' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'hoverBackgroundColor' => array(
				'type' => 'string'
			),
			'hoverBackgroundGradient' => array(
				'type' => 'string'
			),
			'hoverBorderType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'hoverBorderColor' => array(
				'type' => 'string'
			),
			'hoverBorder' => array(
				'type' => 'number',
				'default' => 0
			),
			'hoverBorderTop' => array(
				'type' => 'number'
			),
			'hoverBorderRight' => array(
				'type' => 'number'
			),
			'hoverBorderBottom' => array(
				'type' => 'number'
			),
			'hoverBorderLeft' => array(
				'type' => 'number'
			),
			'hoverBorderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'hoverBorderRadiusTop' => array(
				'type' => 'number'
			),
			'hoverBorderRadiusRight' => array(
				'type' => 'number'
			),
			'hoverBorderRadiusBottom' => array(
				'type' => 'number'
			),
			'hoverBorderRadiusLeft' => array(
				'type' => 'number'
			),
			'hoverHasBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hoverPadding' => array(
				'type' => 'number',
				'default' => 0
			),
			'hoverPaddingTop' => array(
				'type' => 'number'
			),
			'hoverPaddingRight' => array(
				'type' => 'number'
			),
			'hoverPaddingBottom' => array(
				'type' => 'number'
			),
			'hoverPaddingLeft' => array(
				'type' => 'number'
			)
		),
		'textdomain' => 'icon-list',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'icon-list-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/icon-list-item',
		'version' => '0.1.0',
		'title' => 'Icon List Item',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'textContent' => array(
				'type' => 'string',
				'default' => ''
			),
			'selectedIcon' => array(
				'type' => 'string',
				'default' => ''
			),
			'itemStyleType' => array(
				'type' => 'string',
				'default' => 'normal'
			),
			'backgroundType' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#fff'
			),
			'backgroundGradient' => array(
				'type' => 'string'
			),
			'padding' => array(
				'type' => 'number',
				'default' => 10
			),
			'paddingTop' => array(
				'type' => 'number'
			),
			'paddingRight' => array(
				'type' => 'number'
			),
			'paddingLeft' => array(
				'type' => 'number'
			),
			'paddingBottom' => array(
				'type' => 'number'
			),
			'border' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderTop' => array(
				'type' => 'number'
			),
			'borderRight' => array(
				'type' => 'number'
			),
			'borderBottom' => array(
				'type' => 'number'
			),
			'borderLeft' => array(
				'type' => 'number'
			),
			'margin' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginTop' => array(
				'type' => 'number'
			),
			'marginRight' => array(
				'type' => 'number'
			),
			'marginBottom' => array(
				'type' => 'number'
			),
			'marginLeft' => array(
				'type' => 'number'
			),
			'borderType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => '#2F2F2F'
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderRadiusTop' => array(
				'type' => 'number'
			),
			'borderRadiusRight' => array(
				'type' => 'number'
			),
			'borderRadiusBottom' => array(
				'type' => 'number'
			),
			'borderRadiusLeft' => array(
				'type' => 'number'
			),
			'hadBoxShadow' => array(
				'type' => 'boolean',
				'default' => 'none'
			),
			'hoverBackgroundType' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'hoverBackgroundColor' => array(
				'type' => 'string'
			),
			'hoverBackgroundGradient' => array(
				'type' => 'string'
			),
			'hoverBorderType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'hoverBorderColor' => array(
				'type' => 'string'
			),
			'hoverBorder' => array(
				'type' => 'number',
				'default' => 0
			),
			'hoverBorderTop' => array(
				'type' => 'number'
			),
			'hoverBorderRight' => array(
				'type' => 'number'
			),
			'hoverBorderBottom' => array(
				'type' => 'number'
			),
			'hoverBorderLeft' => array(
				'type' => 'number'
			),
			'hoverBorderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'hoverBorderRadiusTop' => array(
				'type' => 'number'
			),
			'hoverBorderRadiusRight' => array(
				'type' => 'number'
			),
			'hoverBorderRadiusBottom' => array(
				'type' => 'number'
			),
			'hoverBorderRadiusLeft' => array(
				'type' => 'number'
			),
			'hoverHasBoxShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'hoverPadding' => array(
				'type' => 'number',
				'default' => 0
			),
			'hoverPaddingTop' => array(
				'type' => 'number'
			),
			'hoverPaddingRight' => array(
				'type' => 'number'
			),
			'hoverPaddingBottom' => array(
				'type' => 'number'
			),
			'hoverPaddingLeft' => array(
				'type' => 'number'
			)
		),
		'textdomain' => 'icon-list-item',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
