'use strict';

module.exports = {
	name: 'bodyAttribute',
	items: [

		// General body features
		{
			not: ['lifestyle:wretched', 'lifestyle:squalid'],
			value: 'a round belly'
		},
		{
			not: ['lifestyle:wretched', 'lifestyle:squalid'],
			value: 'a rotund physique'
		},
		{
			value: 'a lithe figure'
		},
		{
			value: 'a tall physique'
		},
		{
			value: 'a short physique'
		},
		{
			value: 'a towering physique'
		},
		{
			value: 'an average build'
		},
		{
			value: 'a hulking figure'
		},
		{
			only: ['industry:military'],
			weight: 2,
			value: 'a muscular hulking figure'
		},
		{
			value: 'a particularly slim frame'
		},
		{
			not: ['race:gnomish', 'lifestyle:wretched', 'lifestyle:squalid', 'lifestyle:poor'],
			value: 'bulging muscles'
		},
		{
			value: 'covered in scars'
		},
		{
			value: 'a slouching figure'
		},

		// Arm features
		{
			not: ['race:gnomish', 'lifestyle:wretched', 'lifestyle:squalid', 'lifestyle:poor'],
			value: 'muscular arms'
		},
		{
			not: ['lifestyle:wealthy', 'lifestyle:aristocratic'],
			value: 'one arm in a sling'
		},
		{
			value: 'a missing arm'
		},
		{
			only: ['industry:labour', 'industry:construction', 'industry:military', 'industry:maritime'],
			value: 'calloused hands'
		},
		{
			only: ['lifestyle:comfortable', 'lifestyle:wealthy', 'lifestyle:aristocratic'],
			value: 'well manicured hands'
		},

		// Leg features
		{
			value: 'a wooden leg'
		},
		{
			not: ['lifestyle:wealthy', 'lifestyle:aristocratic'],
			value: 'walking with a crutch'
		},
		{
			value: 'walks with a limp'
		},

		// Clothing features
		{
			only: ['lifestyle:squalid', 'lifestyle:poor', 'lifestyle:moderate'],
			weight: 2,
			value: 'wearing a grubby overcloak'
		},
		{
			only: ['lifestyle:squalid', 'lifestyle:poor', 'lifestyle:moderate'],
			value: 'wearing patched up clothing'
		},
		{
			only: ['lifestyle:squalid', 'lifestyle:poor', 'lifestyle:moderate'],
			value: 'wearing a hooded cloak'
		},
		{
			only: ['lifestyle:wretched', 'lifestyle:squalid'],
			weight: 2,
			value: 'wearing tattered rags for clothes'
		},
		{
			only: ['lifestyle:wretched', 'lifestyle:squalid'],
			weight: 2,
			value: 'wearing no shoes'
		},
		{
			only: ['lifestyle:moderate', 'lifestyle:comfortable'],
			value: 'wearing neat clothes'
		},
		{
			only: ['lifestyle:moderate', 'lifestyle:comfortable'],
			value: 'wearing clothing above their station'
		},
		{
			only: ['industry:construction', 'industry:labour'],
			value: 'wearing an old workers cap'
		},
		{
			only: ['lifestyle:comfortable', 'lifestyle:wealthy'],
			value: 'wearing ostentatious hat'
		},
		{
			only: ['lifestyle:comfortable', 'lifestyle:wealthy', 'lifestyle:aristocratic'],
			value: 'wearing clothes befitting their station'
		},
		{
			only: ['lifestyle:comfortable', 'lifestyle:wealthy', 'lifestyle:aristocratic'],
			weight: 2,
			value: 'wearing luxurious expensive clothing'
		},
		{
			only: ['industry:military'],
			weight: 2,
			value: 'wearing gleaming armour'
		},
		{
			only: ['industry:military', 'lifestyle:moderate'],
			weight: 2,
			value: 'wearing beaten up armour'
		},
		{
			only: ['industry:military', 'lifestyle:moderate'],
			weight: 2,
			value: 'wearing patched up armour'
		},
		{
			value: 'wearing a dark cloak'
		},

		// Scent features
		{
			not: ['lifestyle:moderate', 'lifestyle:comfortable', 'lifestyle:wealthy', 'lifestyle:aristocratic'],
			value: 'the smell of animals'
		},
		{
			not: ['lifestyle:moderate', 'lifestyle:comfortable', 'lifestyle:wealthy', 'lifestyle:aristocratic'],
			value: 'the faint smell of sewage'
		},
		{
			not: ['lifestyle:wealthy', 'lifestyle:aristocratic'],
			value: 'the smell of sweat'
		},
		{
			only: ['lifestyle:wealthy', 'lifestyle:aristocratic'],
			value: 'the smell of expensive perfume'
		}

	]
};
