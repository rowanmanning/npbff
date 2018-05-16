'use strict';

module.exports = {
	name: 'facialAttribute',
	items: [

		// General skin/facial features
		{
			not: ['race:draconic', 'race:infernal'],
			value: 'a sallow and withered complexion'
		},
		{
			not: ['race:draconic'],
			value: 'large drooping jowls'
		},
		{
			not: ['race:draconic'],
			value: 'weathered and cracked skin'
		},
		{
			not: ['race:draconic', 'race:orcish'],
			value: 'rosy cheeks'
		},
		{
			not: ['race:draconic', 'race:infernal', 'race:orcish'],
			value: 'a healthy tan'
		},
		{
			value: 'a facial tattoo'
		},
		{
			only: ['race:infernal'],
			value: 'tightly-spiraled black horns'
		},
		{
			value: 'a scar across one eye'
		},

		// Brow features
		{
			not: ['race:draconic'],
			value: 'an impressive monobrow'
		},
		{
			value: 'a very prominent brow'
		},
		{
			value: 'an eyebrow piercing'
		},

		// Eye features
		{
			value: 'eyes of different colours'
		},
		{
			value: 'bright and piercing eyes'
		},
		{
			value: 'an eye patch'
		},
		{
			value: 'a glass eye'
		},
		{
			value: 'an eye twitch'
		},
		{
			value: 'violet eyes'
		},
		{
			value: 'dark eyes'
		},
		{
			value: result => `large bags under ${result.pronouns[2]} eyes`
		},
		{
			value: 'green eyes'
		},
		{
			only: ['race:infernal'],
			value: 'smouldering red eyes'
		},
		{
			only: ['race:draconic'],
			value: 'dimly-glowing yellow eyes'
		},
		{
			value: 'strangely captivating eyes'
		},

		// Nose features
		{
			not: ['race:draconic', 'race:elven'],
			value: 'a bulbous and pock-marked nose'
		},
		{
			not: ['race:draconic', 'race:elven'],
			value: 'a bulbous nose'
		},
		{
			not: ['race:draconic', 'race:elven'],
			value: 'a pock-marked nose'
		},
		{
			not: ['race:draconic'],
			value: 'a crooked nose'
		},
		{
			not: ['race:draconic'],
			value: 'an upturned nose'
		},
		{
			value: 'a nose ring'
		},

		// Mouth features
		{
			value: 'an underbite'
		},
		{
			value: 'an overbite'
		},
		{
			value: 'an confident smile'
		},
		{
			value: 'a permanent smirk'
		},
		{
			not: ['race:draconic'],
			value: 'especially full lips'
		},

		// Teeth features
		{
			only: ['race:draconic', 'race:infernal', 'race:orcish'],
			value: 'teeth filed to sharp points'
		},
		{
			value: 'buck teeth'
		},
		{
			value: 'perfect white teeth'
		},
		{
			value: 'impossibly crooked teeth'
		},
		{
			value: 'several missing teeth'
		},
		{
			not: ['lifestyle:wretched', 'lifestyle:squalid'],
			value: 'a gold tooth'
		},
		{
			only: ['lifestyle:wretched', 'lifestyle:squalid'],
			value: 'wooden dentures'
		},

		// Ear features
		{
			not: ['race:draconic'],
			value: 'ears covered in piercings'
		},
		{
			not: ['race:draconic'],
			value: 'large protruding ears'
		},
		{
			not: ['race:draconic'],
			value: 'a missing ear'
		},

		// Jaw features
		{
			value: 'a strong jaw'
		},
		{
			value: 'a cleft chin'
		},
		{
			value: 'a weak jaw'
		},
		{
			value: 'a crooked jaw'
		},

		// Hair features
		{
			not: ['race:draconic', 'race:infernal', 'race:orc'],
			value: 'long golden hair'
		},
		{
			not: ['race:draconic', 'race:infernal', 'race:orc'],
			value: 'long red hair'
		},
		{
			not: ['race:draconic', 'race:infernal'],
			value: 'long brown hair'
		},
		{
			not: ['race:draconic', 'race:infernal'],
			value: 'very short dark hair'
		},
		{
			not: ['race:draconic', 'race:infernal', 'race:orc'],
			value: 'cropped red hair'
		},
		{
			not: ['race:draconic', 'race:infernal', 'race:orc'],
			value: 'cropped blonde hair'
		},
		{
			not: ['race:draconic', 'race:infernal', 'race:orc'],
			value: 'cropped brown hair'
		},
		{
			not: ['race:draconic'],
			value: 'a topknot'
		},
		{
			only: ['lifestyle:wretched', 'lifestyle:squalid', 'lifestyle:poor'],
			not: ['race:draconic'],
			value: 'matted knots of hair'
		},
		{
			not: ['race:draconic'],
			value: 'tightly braided hair'
		},
		{
			not: ['race:draconic'],
			value: 'flawless hair'
		},
		{
			not: ['race:draconic'],
			value: 'hair pulled into a tight bun'
		},
		{
			not: ['race:draconic'],
			value: 'dreadlocked hair'
		},

		// Beard features
		{
			only: ['name:male'],
			not: ['race:draconic'],
			value: 'a full beard'
		},
		{
			only: ['name:male'],
			not: ['race:draconic', 'race:dwarven'],
			value: 'several days worth of stubble'
		},
		{
			only: ['name:male'],
			not: ['race:draconic'],
			value: 'an impressive beard'
		},
		{
			only: ['name:male'],
			not: ['race:draconic', 'race:elven'],
			value: 'a forked beard'
		},
		{
			only: ['name:male', 'lifestyle:comfortable', 'lifestyle:wealthy', 'lifestyle:aristocratic'],
			not: ['race:draconic'],
			value: 'a luxurious oiled beard'
		},
		{
			only: ['name:male', 'lifestyle:comfortable', 'lifestyle:wealthy', 'lifestyle:aristocratic'],
			not: ['race:draconic', 'race:dwarven'],
			value: 'a stylish waxed moustache'
		},
		{
			only: ['name:male'],
			not: ['race:draconic', 'race:elven'],
			value: 'a bushy moustache'
		},
		{
			only: ['race:dwarven'],
			not: ['name:female'],
			weight: 2,
			value: 'an impressive beard'
		},
		{
			only: ['race:dwarven'],
			not: ['name:female'],
			weight: 2,
			value: 'a long plaited beard'
		},
		{
			only: ['race:dwarven'],
			not: ['name:female'],
			weight: 2,
			value: 'a beard tucked into their belt'
		},
		{
			only: ['race:dwarven'],
			not: ['name:female'],
			weight: 2,
			value: 'a huge bushy beard'
		}

	]
};
