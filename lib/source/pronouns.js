'use strict';

module.exports = {
	name: 'pronouns',
	items: [
		{
			only: ['name:male'],
			weight: 2,
			value: ['he', 'him', 'his']
		},
		{
			only: ['name:female'],
			weight: 2,
			value: ['she', 'her', 'her']
		},
		{
			value: ['they', 'them', 'their']
		}
	]
};
