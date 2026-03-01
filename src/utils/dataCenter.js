const fontFamilies = {
	inter: {
		name: 'Inter',
		slug: 'inter',
		fontFamily: 'Inter, sans-serif',
	},

	merriweather: {
		name: 'Merriweather',
		slug: 'merriweather',
		fontFamily: 'Merriweather, serif',
	},

	oswald: {
		name: 'Oswald',
		slug: 'oswald',
		fontFamily: 'Oswald, sans-serif',
	},
	firaCode: {
		name: 'Fira Code',
		slug: 'fira-code',
		fontFamily: '"Fira Code", monospace',
	},
	manrope: {
		name: 'Manrope',
		slug: 'manrope',
		fontFamily: 'Manrope, sans-serif',
	},
	workSans: {
		name: 'Work Sans',
		slug: 'work-sans',
		fontFamily: '"Work Sans", sans-serif',
	},

	ptSans: {
		name: 'PT Sans',
		slug: 'pt-sans',
		fontFamily: '"PT Sans", sans-serif',
	},
	georgia: {
		name: 'Georgia',
		slug: 'georgia',
		fontFamily: 'Georgia, serif',
	},
	systemUi: {
		name: 'System UI',
		slug: 'system-ui',
		fontFamily:
			'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
	},
};

export const fontOptions = [
	{ label: 'Default', value: '' },
	...Object.values( fontFamilies ).map( ( font ) => ( {
		label: font.name,
		value: font.fontFamily,
	} ) ),
];

// src/utils/presets.js
export const presetData = {
	'preset-1': {
		backgroundColor: '#FFFFFF',
		borderColor: '#FFFFFF',
		borderType: 'none',
		hadBoxShadow: false,
	},
	'preset-2': {
		backgroundColor: '#F5F5FF',
		borderColor: '#4649FF',
		borderType: 'solid',
		borderTop: 1,
		borderRight: 1,
		borderBottom: 1,
		borderLeft: 1,
		borderRadiusTop: 30,
		borderRadiusRight: 30,
		borderRadiusBottom: 30,
		borderRadiusLeft: 30,
	},
	scratch: {
		// Default empty values
	},
};

export const extractedIcons = [
	{ keyName: 'admin-site' },
	{ keyName: 'admin-media' },
	{ keyName: 'admin-page' },
	{ keyName: 'admin-comments' },
	{ keyName: 'admin-appearance' },
	{ keyName: 'admin-plugins' },
	{ keyName: 'admin-users' },
	{ keyName: 'admin-tools' },
	{ keyName: 'admin-settings' },
	{ keyName: 'admin-network' },

	{ keyName: 'dashboard' },
	{ keyName: 'menu' },
	{ keyName: 'menu-alt' },
	{ keyName: 'menu-alt2' },
	{ keyName: 'menu-alt3' },

	{ keyName: 'star-filled' },
	{ keyName: 'star-half' },
	{ keyName: 'star-empty' },
	{ keyName: 'heart' },
	{ keyName: 'smiley' },

	{ keyName: 'format-image' },
	{ keyName: 'format-gallery' },
	{ keyName: 'format-audio' },
	{ keyName: 'format-video' },
	{ keyName: 'format-chat' },
	{ keyName: 'format-status' },
	{ keyName: 'format-aside' },
	{ keyName: 'format-links' },
	{ keyName: 'format-quote' },

	{ keyName: 'media-archive' },
	{ keyName: 'media-audio' },
	{ keyName: 'media-code' },
	{ keyName: 'media-default' },
	{ keyName: 'media-document' },
	{ keyName: 'media-interactive' },
	{ keyName: 'media-spreadsheet' },
	{ keyName: 'media-text' },
	{ keyName: 'media-video' },

	{ keyName: 'image-crop' },
	{ keyName: 'image-rotate' },
	{ keyName: 'image-rotate-left' },
	{ keyName: 'image-rotate-right' },
	{ keyName: 'image-flip-vertical' },
	{ keyName: 'image-flip-horizontal' },
	{ keyName: 'image-filter' },

	{ keyName: 'yes' },
	{ keyName: 'no' },
	{ keyName: 'plus' },
	{ keyName: 'plus-alt' },
	{ keyName: 'minus' },
	{ keyName: 'dismiss' },
	{ keyName: 'marker' },

	{ keyName: 'arrow-up' },
	{ keyName: 'arrow-down' },
	{ keyName: 'arrow-left' },
	{ keyName: 'arrow-right' },
	{ keyName: 'arrow-up-alt' },
	{ keyName: 'arrow-down-alt' },
	{ keyName: 'arrow-left-alt' },
	{ keyName: 'arrow-right-alt' },
	{ keyName: 'arrow-up-alt2' },
	{ keyName: 'arrow-down-alt2' },
	{ keyName: 'arrow-left-alt2' },
	{ keyName: 'arrow-right-alt2' },

	{ keyName: 'external' },
	{ keyName: 'location' },
	{ keyName: 'location-alt' },
	{ keyName: 'calendar' },
	{ keyName: 'clock' },
	{ keyName: 'email' },
	{ keyName: 'phone' },
	{ keyName: 'cart' },
	{ keyName: 'money' },

	{ keyName: 'search' },
	{ keyName: 'visibility' },
	{ keyName: 'hidden' },
	{ keyName: 'edit' },
	{ keyName: 'trash' },
	{ keyName: 'download' },
	{ keyName: 'upload' },
	{ keyName: 'backup' },
	{ keyName: 'clipboard' },

	{ keyName: 'lock' },
	{ keyName: 'unlock' },
	{ keyName: 'shield' },
	{ keyName: 'warning' },
	{ keyName: 'info' },
	{ keyName: 'lightbulb' },
	{ keyName: 'admin-home' },
	{ keyName: 'admin-collapse' },
	{ keyName: 'admin-generic' },
	{ keyName: 'wordpress' },
];
