'use strict';

module.exports = {
	name: 'personality',
	items: [

		// Generic personalities
		{
			value: 'adapts themself to any situation',
			tags: ['personality:positive', 'trait:extrovert']
		},
		{
			value: 'is adventurous',
			tags: ['personality:positive', 'trait:extrovert']
		},
		{
			value: 'agrees with everything',
			tags: ['personality:neutral']
		},
		{
			value: 'is perceptive',
			tags: ['personality:positive']
		},
		{
			value: 'is a friend to everyone',
			tags: ['personality:positive', 'trait:extrovert', 'trait:caring']
		},
		{
			value: 'is an optimist',
			tags: ['personality:neutral']
		},
		{
			value: 'is a pessimist',
			tags: ['personality:neutral']
		},
		{
			value: 'assumes the best in everyone',
			tags: ['personality:positive']
		},
		{
			value: 'expects the worst in everyone',
			tags: ['personality:negative']
		},
		{
			value: 'is appreciative of attention',
			tags: ['personality:positive', 'trait:extrovert']
		},
		{
			value: 'is extremely articulate',
			tags: ['personality:positive']
		},
		{
			value: 'aspires to greater things',
			tags: ['personality:positive']
		},
		{
			value: 'is benevolent',
			tags: ['personality:positive', 'trait:caring']
		},
		{
			value: 'has a cutting wit',
			tags: ['personality:neutral']
		},
		{
			value: 'is calm and relaxed',
			tags: ['personality:positive']
		},
		{
			value: 'cares about everyone',
			tags: ['personality:positive', 'trait:caring']
		},
		{
			value: 'challenges everything',
			tags: ['personality:neutral', 'trait:extrovert']
		},
		{
			value: 'likes to charm people',
			tags: ['personality:neutral', 'trait:extrovert']
		},
		{
			value: 'is cheerful',
			tags: ['personality:positive']
		},
		{
			value: 'is very intelligent',
			tags: ['personality:positive']
		},
		{
			value: 'is compassionate',
			tags: ['personality:positive', 'trait:caring']
		},
		{
			value: 'is over-confident',
			tags: ['personality:negative', 'trait:extrovert']
		},
		{
			value: 'likes to be cooperative',
			tags: ['personality:positive', 'trait:caring']
		},
		{
			value: 'is courageous in the face of danger',
			tags: ['personality:positive']
		},
		{
			value: 'is very creative',
			tags: ['personality:positive']
		},
		{
			value: 'considers themself cultured',
			tags: ['personality:neutral']
		},
		{
			value: 'is curious',
			tags: ['personality:positive']
		},
		{
			value: 'is well disciplined',
			tags: ['personality:positive']
		},
		{
			value: 'is dramatic',
			tags: ['personality:negative', 'trait:extrovert']
		},
		{
			value: 'has a great sense of duty',
			tags: ['personality:neutral']
		},
		{
			value: 'is well educated',
			tags: ['personality:positive']
		},
		{
			value: 'has an elegant manner',
			tags: ['personality:positive']
		},
		{
			value: 'is empathetic',
			tags: ['personality:positive', 'trait:caring']
		},
		{
			value: 'is very energetic',
			tags: ['personality:neutral']
		},
		{
			value: 'is enthusiastic about everything',
			tags: ['personality:positive', 'trait:extrovert']
		},
		{
			value: 'is loyal',
			tags: ['personality:positive', 'trait:caring']
		},
		{
			value: 'is forceful',
			tags: ['personality:negative', 'trait:extrovert']
		},
		{
			value: 'is friendly',
			tags: ['personality:positive']
		},
		{
			value: 'considers themself gallant',
			tags: ['personality:negative']
		},
		{
			value: result => `goes out of ${result.pronouns[2]} way to be generous`,
			tags: ['personality:positive', 'trait:caring']
		},
		{
			value: 'has a gentle spirit',
			tags: ['personality:positive', 'trait:introvert']
		},
		{
			value: 'sees the value in a hard dayʼs work',
			tags: ['personality:positive']
		},
		{
			value: 'will never tell a lie',
			tags: ['personality:positive']
		},
		{
			value: 'likes to crack jokes',
			tags: ['personality:positive']
		},
		{
			value: 'is very idealistic',
			tags: ['personality:neutral']
		},
		{
			value: 'has an active imagination',
			tags: ['personality:positive', 'trait:introvert']
		},
		{
			value: 'is incorruptible',
			tags: ['personality:positive']
		},
		{
			value: 'is a natural leader',
			tags: ['personality:positive', 'trait:caring']
		},
		{
			value: 'has liberal views',
			tags: ['personality:neutral', 'trait:caring']
		},
		{
			value: 'is mature',
			tags: ['personality:neutral']
		},
		{
			value: result => `has a meticulous air about ${result.pronouns[1]}`,
			tags: ['personality:neutral']
		},
		{
			value: 'is overly modest',
			tags: ['personality:positive']
		},
		{
			value: 'is authoritarian',
			tags: ['personality:neutral']
		},
		{
			value: 'is non-authoritarian',
			tags: ['personality:neutral']
		},
		{
			value: 'is passionate',
			tags: ['personality:positive']
		},
		{
			value: 'is very patient',
			tags: ['personality:positive', 'trait:caring']
		},
		{
			value: 'is a true patriot',
			tags: ['personality:neutral']
		},
		{
			value: 'is a perfectionist',
			tags: ['personality:neutral']
		},
		{
			value: 'has high principles',
			tags: ['personality:positive']
		},
		{
			value: 'is protective',
			tags: ['personality:positive', 'trait:caring']
		},
		{
			value: result => `lives in ${result.pronouns[2]} own world`,
			tags: ['personality:neutral', 'trait:introvert']
		},
		{
			value: 'is very reliable',
			tags: ['personality:positive']
		},
		{
			value: 'defers to everyone',
			tags: ['personality:negative', 'trait:introvert']
		},
		{
			value: 'is a romantic',
			tags: ['personality:neutral']
		},
		{
			value: result => `is selfless in ${result.pronouns[2]} actions`,
			tags: ['personality:positive', 'trait:caring']
		},
		{
			value: 'is quite self-critical',
			tags: ['personality:neutral']
		},
		{
			value: 'is sober in demeanour',
			tags: ['personality:neutral']
		},
		{
			value: 'is very studious',
			tags: ['personality:positive']
		},
		{
			value: 'is tolerant of all people',
			tags: ['personality:positive']
		},
		{
			value: 'is extremely trusting',
			tags: ['personality:neutral']
		},
		{
			value: 'is warm and kindly',
			tags: ['personality:positive', 'trait:caring']
		},
		{
			value: 'is absentminded',
			tags: ['personality:neutral']
		},
		{
			value: 'has an aggressive demeanour',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'is ambitious',
			tags: ['personality:positive']
		},
		{
			value: 'is very businesslike',
			tags: ['personality:neutral', 'trait:uncaring']
		},
		{
			value: 'likes to keep busy',
			tags: ['personality:neutral']
		},
		{
			value: 'is competitive in all aspects of life',
			tags: ['personality:neutral']
		},
		{
			value: result => `is conservative in ${result.pronouns[2]} views`,
			tags: ['personality:neutral', 'trait:uncaring']
		},
		{
			value: 'is deceptive',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'gets emotional about small things',
			tags: ['personality:negative']
		},
		{
			value: result => `has an enigmatic air about ${result.pronouns[1]}`,
			tags: ['personality:neutral', 'trait:introvert']
		},
		{
			value: 'is folksy',
			tags: ['personality:neutral', 'trait:extrovert']
		},
		{
			value: 'acts very formally',
			tags: ['personality:neutral']
		},
		{
			value: 'is very frugal',
			tags: ['personality:neutral']
		},
		{
			value: 'is overly impressionable',
			tags: ['personality:negative']
		},
		{
			value: 'has an intensity that makes people uncomfortable',
			tags: ['personality:negative', 'trait:extrovert']
		},
		{
			value: result => `has a maternal air about ${result.pronouns[1]}`,
			tags: ['personality:positive', 'trait:caring']
		},
		{
			value: 'is very moral',
			tags: ['personality:positive', 'trait:caring']
		},
		{
			value: 'is noncommittal',
			tags: ['personality:negative']
		},
		{
			value: 'has old-fashioned attitudes',
			tags: ['personality:neutral', 'trait:uncaring']
		},
		{
			value: 'is outspoken to the point of rudeness',
			tags: ['personality:negative', 'trait:extrovert', 'trait:uncaring']
		},
		{
			value: 'is quite political',
			tags: ['personality:neutral']
		},
		{
			value: 'appears to be preoccupied with something',
			tags: ['personality:neutral', 'trait:introvert']
		},
		{
			value: 'is very quiet',
			tags: ['personality:neutral', 'trait:introvert']
		},
		{
			value: 'is reserved and shy',
			tags: ['personality:neutral', 'trait:introvert']
		},
		{
			value: 'uses sarcasm abundantly',
			tags: ['personality:neutral']
		},
		{
			value: 'is skeptical of most things',
			tags: ['personality:neutral']
		},
		{
			value: 'has a stern demeanour',
			tags: ['personality:neutral']
		},
		{
			value: 'is stubborn',
			tags: ['personality:negative']
		},
		{
			value: 'has no ambition',
			tags: ['personality:negative']
		},
		{
			value: 'has no inhibitions',
			tags: ['personality:negative', 'trait:extrovert']
		},
		{
			value: 'is abrasive',
			tags: ['personality:negative', 'trait:extrovert']
		},
		{
			value: 'is aloof',
			tags: ['personality:negative', 'trait:introvert']
		},
		{
			value: 'is completely amoral',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'has anger-management issues',
			tags: ['personality:negative']
		},
		{
			value: 'is visibly anxious',
			tags: ['personality:negative', 'trait:introvert']
		},
		{
			value: 'loves to argue',
			tags: ['personality:negative', 'trait:extrovert']
		},
		{
			value: result => `has a bewildered air about ${result.pronouns[1]}`,
			tags: ['personality:negative']
		},
		{
			value: 'is extremely blunt',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'is sly and calculating',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'is callous',
			tags: ['personality:negative']
		},
		{
			value: 'is old and cantankerous',
			tags: ['personality:negative']
		},
		{
			value: 'is careless',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'is overly cautious',
			tags: ['personality:negative', 'trait:introvert']
		},
		{
			value: 'is a clumsy oaf',
			tags: ['personality:negative']
		},
		{
			value: result => `is cold in ${result.pronouns[2]} demeanour`,
			tags: ['personality:negative']
		},
		{
			value: 'is a conformist',
			tags: ['personality:negative']
		},
		{
			value: result => `is cowardly in ${result.pronouns[2]} actions`,
			tags: ['personality:negative']
		},
		{
			value: result => `aims to shock with ${result.pronouns[2]} crudeness`,
			tags: ['personality:negative', 'trait:extrovert']
		},
		{
			value: 'is cruel',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'is cynical about most things',
			tags: ['personality:negative']
		},
		{
			value: 'loves to live decadently',
			tags: ['personality:negative']
		},
		{
			value: 'never tells the truth',
			tags: ['personality:negative']
		},
		{
			value: 'is devious',
			tags: ['personality:negative']
		},
		{
			value: 'is a boring person',
			tags: ['personality:negative']
		},
		{
			value: 'is very egocentric',
			tags: ['personality:negative']
		},
		{
			value: result => `envies everyone around ${result.pronouns[1]} for something`,
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'displays erratic behaviour',
			tags: ['personality:negative']
		},
		{
			value: 'is flamboyant',
			tags: ['personality:neutral', 'trait:extrovert']
		},
		{
			value: 'has the memory of a goldfish',
			tags: ['personality:negative']
		},
		{
			value: 'is gloomy and sad',
			tags: ['personality:negative']
		},
		{
			value: 'has a greed that knows no bounds',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'lives a life of hedonism',
			tags: ['personality:negative']
		},
		{
			value: 'is impatient with everyone',
			tags: ['personality:negative']
		},
		{
			value: 'is extremely impulsive',
			tags: ['personality:negative']
		},
		{
			value: 'is intolerant of others',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: result => `has an irritable air about ${result.pronouns[1]}`,
			tags: ['personality:negative']
		},
		{
			value: 'is very lazy',
			tags: ['personality:negative']
		},
		{
			value: 'has an air of melancholy',
			tags: ['personality:negative', 'trait:introvert']
		},
		{
			value: 'only thinks of money',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'has violent mood swings',
			tags: ['personality:negative']
		},
		{
			value: 'loves the morbid and macabre',
			tags: ['personality:negative']
		},
		{
			value: 'is extremely narcissistic',
			tags: ['personality:negative']
		},
		{
			value: 'is narrow-minded',
			tags: ['personality:negative']
		},
		{
			value: 'obsesses over everything',
			tags: ['personality:negative', 'trait:introvert']
		},
		{
			value: 'is cripplingly paranoid',
			tags: ['personality:negative']
		},
		{
			value: 'is a pedant',
			tags: ['personality:negative']
		},
		{
			value: 'has a perverse way of thinking',
			tags: ['personality:negative']
		},
		{
			value: 'is power-hungry',
			tags: ['personality:negative', 'trait:extrovert', 'trait:uncaring']
		},
		{
			value: 'acts in a predatory way',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'holds a lot of prejudices',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'is presumptuous',
			tags: ['personality:negative']
		},
		{
			value: 'is overly pretentious',
			tags: ['personality:negative']
		},
		{
			value: 'is loud and rowdy',
			tags: ['personality:negative', 'trait:extrovert']
		},
		{
			value: 'has a sadistic side',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'only thinks of themself',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'is vapid and shallow',
			tags: ['personality:negative']
		},
		{
			value: 'is very unintelligent',
			tags: ['personality:negative']
		},
		{
			value: 'holds a lot of superstitious views',
			tags: ['personality:negative']
		},
		{
			value: result => `would betray ${result.pronouns[2]} own mother`,
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'loves nothing more than to cause trouble',
			tags: ['personality:negative']
		},
		{
			value: 'cares about nobody',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'thinks charity is for suckers',
			tags: ['personality:negative', 'trait:uncaring']
		},
		{
			value: 'is unfriendly',
			tags: ['personality:negative']
		},
		{
			value: 'is extremely weak-willed',
			tags: ['personality:negative']
		}

	]
};
