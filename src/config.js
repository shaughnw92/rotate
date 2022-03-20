export const NAVIGATION = [
	'Skin Care',
	'Body & Hand',
	'Hair',
	'Fragrance',
	'Home',
	'Kits & Travel',
	'Gifts',
	'Read',
	'Stores',
	'Search',
]

export const MOBILE_NAVIGATION = ['Shop', 'Read', 'Stores', 'Search']

export const SIDE_NAVIGATION = ['Login', 'Cart']
export const MOBILE_SIDE_NAVIGATION = ['Search', 'Cart', 'Menu']

export const PRODUCT_INFO = [
	{ title: 'Suited to', blurb: 'Combination skin', modal: false },
	{ title: 'Skin feel', blurb: 'Purified, soft, refreshed', modal: false },
	{
		title: 'Key ingredients',
		blurb: 'Witch Hazel, Salicylic Acid, Sage Leaf',
		modal: true,
	},
]

export const PRODUCT_INTRO = {
	title: 'In Two Minds Facial Cleanser',
	blurb:
		'A gentle gel-based formulation that cleanses thoroughly without drying the skin or stripping its natural oils.',
}

export const SIZES = [
	{
		size: 100,
		unit: 'mL',
		price: '23.00',
		currency: '£',
		blurb: 'Pay in 30 days with',
	},
	{
		size: 200,
		unit: 'mL',
		price: '35.00',
		currency: '£',
		blurb: 'Make 3 payments of £11.66.',
	},
]

export const SIZES_OPTIONS = SIZES.map(({ size, unit }) => `${size} ${unit}`)

export const STANDARD_TABLE = [
	{
		heading: 'All orders',
		body: 'Complimentary',
	},
	{
		heading: 'Most areas',
		body: '3 business days',
	},
	{
		heading: 'Offshore locations',
		body: '4 business days',
	},
]

export const EXPRESS_TABLE = [
	{
		heading: 'Orders below £75',
		body: '£6.50',
	},
	{
		heading: 'Orders £75 and over',
		body: 'Complimentary',
	},
	{
		heading: 'Most areas',
		body: 'Next day if ordered before 12pm',
	},
	{
		heading: 'Offshore locations',
		body: '3 business days',
	},
]
