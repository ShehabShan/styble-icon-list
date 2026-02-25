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
