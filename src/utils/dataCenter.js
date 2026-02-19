import {
	Plus,
	Minus,
	Star,
	Shield,
	Zap,
	Flame,
	Trophy,
	Crown,
	TrendingUp,
	Mail,
	Phone,
	MessageSquare,
	Send,
	Globe,
	Briefcase,
	Lock,
	Settings,
	User,
	Users,
	Heart,
	Smile,
	Clock,
	Calendar,
	Bell,
	Search,
} from 'lucide-react';

export const iconLibrary = [
	{ name: 'plus', icon: Plus },
	{ name: 'minus', icon: Minus },
	{ name: 'star', icon: Star },
	{ name: 'shield', icon: Shield },
	{ name: 'zap', icon: Zap },
	{ name: 'flame', icon: Flame },
	{ name: 'trophy', icon: Trophy },
	{ name: 'crown', icon: Crown },
	{ name: 'trending', icon: TrendingUp },
	{ name: 'mail', icon: Mail },
	{ name: 'phone', icon: Phone },
	{ name: 'message', icon: MessageSquare },
	{ name: 'send', icon: Send },
	{ name: 'globe', icon: Globe },
	{ name: 'briefcase', icon: Briefcase },
	{ name: 'lock', icon: Lock },
	{ name: 'settings', icon: Settings },
	{ name: 'user', icon: User },
	{ name: 'users', icon: Users },
	{ name: 'heart', icon: Heart },
	{ name: 'smile', icon: Smile },
	{ name: 'clock', icon: Clock },
	{ name: 'calendar', icon: Calendar },
	{ name: 'bell', icon: Bell },
	{ name: 'search', icon: Search },
];

const fontFamilies = {
	inter: {
		name: 'Inter',
		slug: 'inter',
		fontFamily: 'Inter, sans-serif',
	},
	roboto: {
		name: 'Roboto',
		slug: 'roboto',
		fontFamily: 'Roboto, sans-serif',
	},
	openSans: {
		name: 'Open Sans',
		slug: 'open-sans',
		fontFamily: '"Open Sans", sans-serif',
	},
	lato: {
		name: 'Lato',
		slug: 'lato',
		fontFamily: 'Lato, sans-serif',
	},
	poppins: {
		name: 'Poppins',
		slug: 'poppins',
		fontFamily: 'Poppins, sans-serif',
	},
	montserrat: {
		name: 'Montserrat',
		slug: 'montserrat',
		fontFamily: 'Montserrat, sans-serif',
	},
	sourceSansPro: {
		name: 'Source Sans Pro',
		slug: 'source-sans-pro',
		fontFamily: '"Source Sans Pro", sans-serif',
	},
	nunito: {
		name: 'Nunito',
		slug: 'nunito',
		fontFamily: 'Nunito, sans-serif',
	},
	raleway: {
		name: 'Raleway',
		slug: 'raleway',
		fontFamily: 'Raleway, sans-serif',
	},
	ubuntu: {
		name: 'Ubuntu',
		slug: 'ubuntu',
		fontFamily: 'Ubuntu, sans-serif',
	},
	merriweather: {
		name: 'Merriweather',
		slug: 'merriweather',
		fontFamily: 'Merriweather, serif',
	},
	playfairDisplay: {
		name: 'Playfair Display',
		slug: 'playfair-display',
		fontFamily: '"Playfair Display", serif',
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
	archivo: {
		name: 'Archivo',
		slug: 'archivo',
		fontFamily: 'Archivo, sans-serif',
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
