'use strict';

module.exports = {
	name: 'bond',
	items: [

		// Generic bonds
		{
			not: ['lifestyle:wretched', 'lifestyle:squalid'],
			value: result => `wants to change ${result.pronouns[2]} job`
		},
		{
			not: ['lifestyle:wretched', 'lifestyle:squalid'],
			value: result => `wants to get better at ${result.pronouns[2]} job`
		},
		{
			only: ['personality:caring'],
			value: 'wants to please people'
		},
		{
			only: ['personality:uncaring'],
			value: 'wants to hurt people'
		},
		{
			value: result => `wants vengeance against those who wronged ${result.pronouns[1]}`
		},
		{
			value: 'needs to repay a life debt'
		},
		{
			value: 'needs to avoid a corrupt official'
		},
		{
			only: ['personality:caring'],
			value: 'idolizes a hero of the old tales'
		},
		{
			only: ['personality:uncaring'],
			value: result => `wants to best ${result.pronouns[2]} rival`
		},
		{
			value: result => `craves the approval of ${result.pronouns[2]} father`
		},
		{
			only: ['personality:caring'],
			value: 'likes to make people laugh'
		},
		{
			value: 'fetishises a race other than theirs'
		},
		{
			only: ['personality:positive'],
			value: 'will do anything to avoid work'
		},

		// Craft industry specific
		{
			only: ['industry:crafts'],
			weight: 2,
			value: result => {
				return `wants recognition for ${result.pronouns[2]} ${result.craftItems || 'craft'}`;
			}
		},
		{
			only: ['industry:crafts'],
			weight: 2,
			value: result => {
				return `owes a debt of gratitude to the Master ${result.occupation} who took them in`;
			}
		},
		{
			only: ['industry:crafts'],
			not: ['personality:caring'],
			weight: 2,
			value: result => {
				return `couldn’t really care less about crafting ${result.craftItems || 'their wares'}`;
			}
		},
		{
			only: ['industry:crafts'],
			weight: 2,
			value: result => {
				return `wants everybody to care about ${result.craftItems || 'their craft'} as much as they do`;
			}
		},

		// Construction industry specific
		{
			only: ['industry:construction'],
			weight: 2,
			value: 'wants to work on larger building projects'
		},

		// Education industry specific
		{
			only: ['industry:education'],
			not: ['personality:uncaring'],
			weight: 2,
			value: 'wants to protect their students'
		},
		{
			only: ['industry:education'],
			not: ['personality:uncaring'],
			weight: 2,
			value: 'wants to impart their knowledge to everyone'
		},
		{
			only: ['industry:education'],
			weight: 2,
			value: 'wants to protect their place of study'
		},

		// Entertainment industry specific
		{
			only: ['industry:entertainment'],
			weight: 2,
			value: 'wants to be famous no matter what it takes'
		},

		// Healthcare industry specific
		{
			only: ['industry:healthcare'],
			not: ['personality:uncaring'],
			weight: 2,
			value: 'hates to see others suffer'
		},

		// Illegal industry specific
		{
			only: ['industry:illegal'],
			not: ['personality:uncaring'],
			weight: 3,
			value: 'seeks to atone for past misdeeds'
		},
		{
			only: ['industry:illegal'],
			weight: 2,
			value: 'wants to be rich'
		},

		// Religion industry specific
		{
			only: ['industry:religion'],
			weight: 2,
			value: result => {
				return `wants to protect the ${result.placeOfWorship || 'church'} where they serve`;
			}
		},
		{
			only: ['industry:religion'],
			weight: 2,
			value: 'seeks enlightenment'
		},

		// Retail industry specific
		{
			only: ['industry:retail'],
			weight: 2,
			value: result => {
				return `wants everyone to appreciate the quality of ${result.pronouns[2]} ${result.retailItems || 'goods'}`;
			}
		},
		{
			only: ['industry:retail'],
			not: ['personality:caring'],
			weight: 2,
			value: result => {
				return `couldn't really care less about selling ${result.retailItems || 'things'}`;
			}
		},
		{
			only: ['industry:retail'],
			weight: 2,
			value: result => {
				return `needs to sell more ${result.retailItems || 'things'} to make ends meet`;
			}
		},
		{
			only: ['industry:retail'],
			weight: 2,
			value: 'is very pushy in their sales technique'
		},

		// Military/Security industry specific
		{
			only: ['industry:military', 'industry:security'],
			weight: 2,
			value: 'wishes to be seen as a hero'
		},
		{
			only: ['industry:military', 'industry:security'],
			weight: 2,
			value: result => `wants to protect ${result.pronouns[2]} homeland`
		},

		// Lifestyle specific
		{
			only: ['lifestyle:wretched', 'lifestyle:squalid', 'lifestyle:poor'],
			weight: 2,
			value: 'will jump at any opportunity to make some coin'
		},
		{
			only: ['lifestyle:squalid', 'lifestyle:poor'],
			weight: 2,
			value: 'is desperate to repay a loan'
		},
		{
			only: ['lifestyle:squalid', 'lifestyle:poor', 'lifestyle:modest'],
			not: ['personality:uncaring'],
			weight: 2,
			value: result => `wants to better support ${result.pronouns[2]} family`
		},
		{
			only: ['lifestyle:squalid', 'lifestyle:poor', 'lifestyle:modest'],
			not: ['personality:uncaring'],
			value: 'needs wealth to secure someoneʼs love'
		},

		// Race specific
		{
			only: ['race:draconic'],
			weight: 2,
			value: 'wishes to serve a dragon'
		},
		{
			only: ['race:draconic', 'race:infernal', 'race:orcish'],
			weight: 2,
			value: 'hates being stared at'
		},
		{
			only: ['race:draconic', 'race:infernal', 'race:orcish'],
			weight: 2,
			value: 'is fiercely proud of their heritage'
		},
		{
			only: ['race:orcish'],
			weight: 2,
			value: 'goes to a great deal of trouble to pass as human'
		},
		{
			only: ['race:infernal'],
			weight: 2,
			value: 'would love to rid themselves of their infernal heritage'
		},
		{
			only: ['race:dwarven'],
			weight: 2,
			value: 'dreams of finding a dragonʼs hoard'
		},
		{
			only: ['race:dwarven'],
			not: ['personality:caring'],
			weight: 2,
			value: 'values gold above all else'
		},
		{
			only: ['race:elven'],
			weight: 2,
			value: 'dreams of finding a way into the feywild'
		},
		{
			only: ['race:elven'],
			weight: 2,
			value: 'values order above all else'
		},
		{
			only: ['race:gnomish'],
			weight: 2,
			value: 'wants to be an inventor'
		},
		{
			only: ['race:gnomish'],
			weight: 2,
			value: 'loves to make people laugh'
		}
	]
};
