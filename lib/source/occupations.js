'use strict';

module.exports = {
	name: 'occupation',
	items: [
		{
			value: 'Academic',
			tags: [
				'industry:education',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Actor',
			tags: [
				'industry:entertainment',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Apothecary',
			add: {
				craftItems: 'potions',
				retailItems: 'potions'
			},
			tags: [
				'industry:crafts',
				'industry:healthcare',
				'industry:retail',
				'lifestyle:modest'
			]
		},
		{
			value: 'Aristocrat',
			tags: [
				'industry:government',
				'lifestyle:aristocratic'
			]
		},
		{
			value: 'Armourer',
			add: {
				craftItems: 'armour and shields'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:poor',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Artist',
			tags: [
				'industry:arts',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Assassin',
			tags: [
				'industry:illegal',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Astrologer',
			tags: [
				'industry:education',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Baker',
			add: {
				craftItems: 'baked goods',
				retailItems: 'baked goods'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Barber',
			tags: [
				'industry:service',
				'lifestyle:modest'
			]
		},
		{
			value: 'Bartender',
			add: {
				retailItems: 'beer and wine'
			},
			tags: [
				'industry:hospitality',
				'industry:retail',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Beekeeper',
			tags: [
				'industry:agriculture',
				'lifestyle:modest'
			]
		},
		{
			value: 'Beggar',
			tags: [
				'lifestyle:wretched',
				'lifestyle:squalid'
			]
		},
		{
			value: 'Bellringer',
			add: {
				placeOfWorship: 'church'
			},
			tags: [
				'industry:religion',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Blacksmith',
			add: {
				craftItems: 'metalwork',
				retailItems: 'metalwork'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Brewer',
			add: {
				craftItems: 'ale'
			},
			tags: [
				'industry:crafts',
				'lifestyle:modest'
			]
		},
		{
			value: 'Bricklayer',
			tags: [
				'industry:construction',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Busker',
			tags: [
				'industry:entertainment',
				'lifestyle:squalid',
				'lifestyle:poor'
			]
		},
		{
			value: 'Butcher',
			add: {
				retailItems: 'meat'
			},
			tags: [
				'industry:retail',
				'lifestyle:modest'
			]
		},
		{
			value: 'Butler',
			tags: [
				'industry:hospitality',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Cartographer',
			add: {
				craftItems: 'maps'
			},
			tags: [
				'industry:crafts',
				'industry:education',
				'industry:transport',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Chimney sweep',
			tags: [
				'industry:labour',
				'industry:service',
				'lifestyle:squalid',
				'lifestyle:poor'
			]
		},
		{
			value: 'Clockmaker',
			add: {
				craftItems: 'clocks',
				retailItems: 'clocks'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Cobbler',
			add: {
				craftItems: 'shoes',
				retailItems: 'shoes'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Cook',
			tags: [
				'industry:service',
				'lifestyle:modest'
			]
		},
		{
			value: 'Cooper',
			add: {
				craftItems: 'casks and barrels'
			},
			tags: [
				'industry:crafts',
				'lifestyle:modest'
			]
		},
		{
			value: 'Courtesan',
			tags: [
				'industry:hospitality',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Cutpurse',
			tags: [
				'industry:illegal',
				'lifestyle:squalid',
				'lifestyle:poor'
			]
		},
		{
			value: 'Dairy Farmer',
			tags: [
				'industry:agriculture',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Dentist',
			tags: [
				'industry:healthcare',
				'lifestyle:modest'
			]
		},
		{
			value: 'Diplomat',
			tags: [
				'industry:government',
				'lifestyle:comfortable',
				'lifestyle:wealthy'
			]
		},
		{
			value: 'Ditch digger',
			tags: [
				'industry:labour',
				'lifestyle:squalid',
				'lifestyle:poor'
			]
		},
		{
			value: 'Doctor',
			tags: [
				'industry:healthcare',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Drug dealer',
			add: {
				retailItems: 'drugs'
			},
			tags: [
				'industry:illegal',
				'industry:retail',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Engraver',
			add: {
				craftItems: 'engravings'
			},
			tags: [
				'industry:arts',
				'industry:crafts',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Falconer',
			tags: [
				'lifestyle:modest'
			]
		},
		{
			value: 'Farmer',
			tags: [
				'industry:agriculture',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Farrier',
			add: {
				craftItems: 'horse shoes',
				retailItems: 'horse shoes'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Fence',
			add: {
				retailItems: 'stolen goods'
			},
			tags: [
				'industry:illegal',
				'industry:retail',
				'lifestyle:modest'
			]
		},
		{
			value: 'Fireman',
			tags: [
				'industry:security',
				'lifestyle:modest'
			]
		},
		{
			value: 'Fisherman',
			tags: [
				'industry:agriculture',
				'industry:maritime',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Fletcher',
			add: {
				craftItems: 'arrows',
				retailItems: 'arrows'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:modest'
			]
		},
		{
			value: 'Forester',
			tags: [
				'industry:labour',
				'industry:maintenance',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Fortune teller',
			tags: [
				'industry:service',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Fruit Farmer',
			tags: [
				'industry:agriculture',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Gambler',
			tags: [
				'industry:economic',
				'lifestyle:poor',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Gardener',
			tags: [
				'industry:labour',
				'industry:maintenance',
				'lifestyle:modest'
			]
		},
		{
			value: 'General',
			tags: [
				'industry:government',
				'industry:military',
				'lifestyle:comfortable',
				'lifestyle:wealthy'
			]
		},
		{
			value: 'Glassblower',
			add: {
				craftItems: 'glassware',
				retailItems: 'glassware'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Grave digger',
			tags: [
				'industry:labour',
				'lifestyle:poor'
			]
		},
		{
			value: 'Grave robber',
			tags: [
				'industry:illegal',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Greengrocer',
			add: {
				retailItems: 'fruits and vegetables'
			},
			tags: [
				'industry:retail',
				'lifestyle:modest'
			]
		},
		{
			value: 'Grifter',
			tags: [
				'industry:illegal',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Guard',
			tags: [
				'industry:military',
				'industry:security',
				'lifestyle:modest'
			]
		},
		{
			value: 'Haberdasher',
			add: {
				craftItems: 'buttons and thread',
				retailItems: 'buttons and thread'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Handyman',
			tags: [
				'industry:labour',
				'industry:maintenance',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Healer',
			tags: [
				'industry:healthcare',
				'lifestyle:modest'
			]
		},
		{
			value: 'Herbalist',
			tags: [
				'industry:healthcare',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Hermit',
			tags: [
				'lifestyle:wretched',
				'lifestyle:squalid'
			]
		},
		{
			value: 'Hunter',
			tags: [
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Jester',
			tags: [
				'industry:entertainment',
				'lifestyle:poor',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Jeweler',
			add: {
				craftItems: 'jewellery',
				retailItems: 'jewellery'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:comfortable',
				'lifestyle:wealthy'
			]
		},
		{
			value: 'Joiner',
			tags: [
				'industry:construction',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Lamp lighter',
			tags: [
				'industry:maintenance',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Lawyer',
			tags: [
				'industry:legal',
				'lifestyle:modest',
				'lifestyle:comfortable',
				'lifestyle:wealthy'
			]
		},
		{
			value: 'Leatherworker',
			add: {
				craftItems: 'leather goods',
				retailItems: 'leather goods'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Librarian',
			tags: [
				'industry:education',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Locksmith',
			add: {
				craftItems: 'keys and locks',
				retailItems: 'keys and locks'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Mason',
			tags: [
				'industry:construction',
				'industry:crafts',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Mercenary',
			tags: [
				'industry:military',
				'lifestyle:modest'
			]
		},
		{
			value: 'Messenger',
			tags: [
				'industry:service',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Midwife',
			tags: [
				'industry:healthcare',
				'lifestyle:modest'
			]
		},
		{
			value: 'Miller',
			add: {
				craftItems: 'flour',
				retailItems: 'flour'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Milliner',
			add: {
				craftItems: 'hats',
				retailItems: 'hats'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Miner',
			tags: [
				'industry:labour',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Minstrel',
			tags: [
				'industry:entertainment',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Moneylender',
			tags: [
				'industry:economic',
				'lifestyle:modest',
				'lifestyle:comfortable',
				'lifestyle:wealthy'
			]
		},
		{
			value: 'Monk',
			add: {
				placeOfWorship: 'monastery'
			},
			tags: [
				'industry:religion',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Mucker',
			tags: [
				'industry:labour',
				'lifestyle:squalid',
				'lifestyle:poor'
			]
		},
		{
			value: 'Orphan',
			tags: [
				'lifestyle:poor',
				'lifestyle:squalid'
			]
		},
		{
			value: 'Ostler',
			tags: [
				'industry:labour',
				'lifestyle:squalid',
				'lifestyle:poor'
			]
		},
		{
			value: 'Outlaw',
			tags: [
				'industry:illegal',
				'lifestyle:wretched',
				'lifestyle:squalid',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Painter',
			add: {
				craftItems: 'paintings'
			},
			tags: [
				'industry:arts',
				'industry:crafts',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Parchment maker',
			add: {
				craftItems: 'parchment',
				retailItems: 'parchment'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:modest'
			]
		},
		{
			value: 'Pawnbroker',
			add: {
				retailItems: 'anything worth a few coin'
			},
			tags: [
				'industry:retail',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Philosopher',
			tags: [
				'industry:education',
				'industry:humanities',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Pirate',
			tags: [
				'industry:illegal',
				'industry:maritime',
				'lifestyle:poor',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Priest',
			add: {
				placeOfWorship: 'church'
			},
			tags: [
				'industry:religion',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Prostitute',
			tags: [
				'industry:hospitality',
				'lifestyle:squalid',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Puppeteer',
			tags: [
				'industry:entertainment',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Sailor',
			tags: [
				'industry:maritime',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Scribe',
			add: {
				craftItems: 'books and letters'
			},
			tags: [
				'industry:crafts',
				'industry:education',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Scullion',
			tags: [
				'industry:labour',
				'lifestyle:poor'
			]
		},
		{
			value: 'Seamstress',
			add: {
				craftItems: 'clothing',
				retailItems: 'clothing'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:poor',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Servant',
			tags: [
				'industry:service',
				'lifestyle:squalid',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Sewerhand',
			tags: [
				'industry:maintenance',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Shepherd',
			tags: [
				'industry:agriculture',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Shipwright',
			add: {
				craftItems: 'ships',
				retailItems: 'ships'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:modest',
				'lifestyle:comfortable',
				'lifestyle:wealthy'
			]
		},
		{
			value: 'Shoe shiner',
			tags: [
				'industry:service',
				'lifestyle:squalid',
				'lifestyle:poor'
			]
		},
		{
			value: 'Smuggler',
			tags: [
				'industry:illegal',
				'industry:maritime',
				'industry:transport',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Soldier',
			tags: [
				'industry:military',
				'lifestyle:modest'
			]
		},
		{
			value: 'Spice merchant',
			add: {
				retailItems: 'spices'
			},
			tags: [
				'industry:retail',
				'lifestyle:modest',
				'lifestyle:comfortable',
				'lifestyle:wealthy'
			]
		},
		{
			value: 'Spy',
			tags: [
				'industry:legal',
				'industry:illegal',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Squire',
			tags: [
				'industry:service',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Stevedore',
			tags: [
				'industry:labour',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Stonecutter',
			add: {
				craftItems: 'stonework'
			},
			tags: [
				'industry:construction',
				'industry:crafts',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Street magician',
			tags: [
				'industry:entertainment',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Street sweeper',
			tags: [
				'industry:labour',
				'lifestyle:squalid',
				'lifestyle:poor'
			]
		},
		{
			value: 'Tailor',
			add: {
				craftItems: 'clothing',
				retailItems: 'clothing'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Taxidermist',
			add: {
				craftItems: 'stuffed animals',
				retailItems: 'stuffed animals'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:modest'
			]
		},
		{
			value: 'Teacher',
			tags: [
				'industry:education',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Thatcher',
			tags: [
				'industry:construction',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Thief',
			tags: [
				'industry:illegal',
				'lifestyle:poor',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Tinker',
			add: {
				craftItems: 'metalwork'
			},
			tags: [
				'industry:crafts',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Torturer',
			tags: [
				'industry:security',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Trader',
			add: {
				retailItems: 'goods'
			},
			tags: [
				'industry:retail',
				'lifestyle:modest',
				'lifestyle:comfortable',
				'lifestyle:wealthy'
			]
		},
		{
			value: 'Trapper',
			tags: [
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Urchin',
			tags: [
				'lifestyle:wretched',
				'lifestyle:squalid'
			]
		},
		{
			value: 'Vagrant',
			tags: [
				'lifestyle:wretched',
				'lifestyle:squalid'
			]
		},
		{
			value: 'Veterinarian',
			tags: [
				'industry:healthcare',
				'lifestyle:modest'
			]
		},
		{
			value: 'Vintner',
			add: {
				craftItems: 'wine',
				retailItems: 'wine'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:modest',
				'lifestyle:comfortable'
			]
		},
		{
			value: 'Wainwright',
			add: {
				craftItems: 'wagons and carts',
				retailItems: 'wagons and carts'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'industry:transport',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Weaponsmith',
			add: {
				craftItems: 'weapons',
				retailItems: 'weapons'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Weaver',
			add: {
				craftItems: 'fabric',
				retailItems: 'fabric'
			},
			tags: [
				'industry:crafts',
				'industry:retail',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		},
		{
			value: 'Woodcutter',
			tags: [
				'industry:labour',
				'lifestyle:poor',
				'lifestyle:modest'
			]
		}
	]
};
