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
			'padding' => array(
				'type' => 'number',
				'default' => 10
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
			)
		),
		'textdomain' => 'icon-list-item',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
