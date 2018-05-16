'use strict';

const generate = require('smart-random')([
	require('./source/races'),
	require('./source/names'),
	require('./source/occupations'),
	require('./source/pronouns'),
	require('./source/personalities'),
	require('./source/bonds'),
	require('./source/facial-attributes'),
	require('./source/body-attributes')
]);

module.exports = function createBff(format = 'text', character = {}) {
	character = generate(character);
	if (format === 'text') {
		return formatCharacterAsText(character);
	}
	if (format === 'html') {
		return formatCharacterAsHtml(character);
	}
	return character;
};

function formatCharacterAsText(character) {
	return stripExtraWhitespace(`
		${character.name} is ${getDeterminer(character.race)}
		${character.race} ${character.occupation}
		with ${character.facialAttribute} and ${character.bodyAttribute}.
		${character.name} ${character.personality}, and ${character.bond}.
	`);
}

function formatCharacterAsHtml(character) {
	return stripExtraWhitespace(`
		<span data-property="name">${character.name}</span> is ${getDeterminer(character.race)}
		<span data-property="race">${character.race}</span> <span data-property="occupation">${character.occupation}</span>
		with <span data-property="facialAttribute">${character.facialAttribute}</span> and <span data-property="bodyAttribute">${character.bodyAttribute}</span>.
		${character.name} <span data-property="personality">${character.personality}</span>, and <span data-property="bond">${character.bond}</span>.
	`);
}

function getDeterminer(word) {
	return ('aeiou'.includes(word.toLowerCase()) ? 'an' : 'a');
}

function stripExtraWhitespace(string) {
	return string.trim().replace(/\s+/g, ' ');
}
