const outside = {
    id: 'outside',
    title: 'Take a step outside',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '',//pic of downtown
    //audio: 'monsters.wav',
    //action: 'monster-scream.wav',
    description: `
        You've decided to take a walk outside. All of downtown Portland at your disposal, what will you do???
    `,
    choices: [{
        id: 'bus',
        description: 'Catch a bus home',
        result: `
            You've decided this is all far too tough and you would rather live the rest of your life in your parents basement eating pizza pockets and playing video games with your competitive imaginary friends. 
        `,
        //hp: 0,
        //gold: 35
    }, {
        id: 'microdose',
        description: 'Something to take the edge off',
        result: `
            Just a little of the good stuff wont hurt right??? Uh oh. You had a little too much and now it has become harder to pay attention.
        `,
        //hp: -30,
        //gold: 50
    }, {
        id: 'walk',
        description: 'Go for a walk to destress and reflect',
        result: `
            You decide to go for a walk to the local park to clear your head and return refreshed.
        `,
        //hp: -50,
        //gold: 0
    }]
};
const room = {
    id: 'room',
    title: 'To the Big Room',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '',//pic of main area
    //audio: 'monsters.wav',
    //action: 'monster-scream.wav',
    description: `
        You've decided to checkout the big room where some of your cohortmates are at. What do you do???
    `,
    choices: [{
        id: 'dog',
        description: 'Forcefully pet the dog',
        result: `
            After seeing the majestic pooches you are overcome with the need to pet and love them. The pooches scream and cry for mom as you approach but you pay no attention.
        `,
        //hp: 0,
        //gold: 35
    }, {
        id: 'talk',
        description: 'Talk with some of your cohortmates',
        result: `
            You talk with your newfound friends blabbing away at nothing at everything. You do not get a lot done but at least you have the moral support.
        `,
        //hp: -30,
        //gold: 50
    }, {
        id: 'lab',
        description: 'Work on your lab',
        result: `
            You decide to work diligently on the lab using all resources available.
        `,
        //hp: -50,
        //gold: 0
    }]
};
const lecture = {
    id: 'lecture',
    title: 'Checkout the classroom',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '',//pic of classroom
    //audio: 'monsters.wav',
    //action: 'monster-scream.wav',
    description: `
        Oh No! You have stumbled into a lecture!!!
    `,
    choices: [{
        id: 'surf',
        description: 'Surf the web with the volume on',
        result: `
            While surfing the web on some questionable sites some abrupt noise came from your laptop. Everyone realizes what you are watching and you run out in embarrassment. 
        `,
        //hp: 0,
        //gold: 35
    }, {
        id: 'points',
        description: 'Work on recovering some lost points',
        result: `
            You decide to work on recovering some of your lost points. You miss most of the lecture and are forced into a reoccurring theme. 
        `,
        //hp: -30,
        //gold: 50
    }, {
        id: 'attention',
        description: 'Pat attention',
        result: `
            You decide to pay attention and take notes.
        `,
        //hp: -50,
        //gold: 0
    }]
};

const quests = [
    outside, 
    room, 
    lecture,
];

export default quests;