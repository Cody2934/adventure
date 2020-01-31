// quests with id of outside, room, and lecture
//                   outside: bus, microdose, and walk
//                           room: dog, talk, and lab
//                                      lecture: surf, points, and attention
const outside = {
    id: 'outside',
    title: 'Take a step outside',
    map: {
    },
    image: 'outside.jpg',
    audio: 'outside.wav',
    description: `You've decided to take a walk outside. It's a beautiful day. All of downtown Portland is at your disposal. What will you do?`,
    choices: [{
        id: 'walk',
        description: 'Go for a walk.',
        result: `You decide to go for a walk to the local park to clear your head. You return bright and ready to take anything on. No mind points are lost`,
        mind: 0,
    }, {
        id: 'bus',
        description: 'Catch a bus and GTFO!',
        result: `You've decided this is all far too tough and you would rather live the rest of your life in your parents basement eating pizza pockets and playing video games with your competitive imaginary friends. You dropped out.`,
        mind: 6,
    }, {
        id: 'microdose',
        description: 'Something to take the edge off.',
        result: `Just a little of the good stuff wont hurt right??? Uh oh. You had a little too much of the good stuff and now it has become harder to pay attention. Lose 1 mind point.`,
        mind: 1,
    }]
};


const room = {
    id: 'room',
    title: 'To the Big Room',
    map: {
    },
    image: 'room.jpg',
    audio: 'room.wav',
    description: `You've decided to checkout the big room where some of your cohortmates are conversing. What do you do?`,
    choices: [{
        id: 'lab',
        description: 'Work on your lab.',
        result: `You decide to work diligently on the lab that's due using all resources available. No mind points are lost.`,
        mind: 0,
    }, {
        id: 'dog',
        description: 'Forcefully pet the dog.',
        result: `After seeing the majestic pooches you are overcome with the need to pet and love them. The pooches scream and cry for mom as you approach but you pay no attention as you must show them your love and good intentions. Megan see and you are escorted off the property. Never to return.`,
        mind: 6,
    }, {
        id: 'talk',
        description: 'Talk with some of your cohortmates.',
        result: `You talk with your newfound friends, blabbing away about your weekend plans. You do not get a lot done but at least you have the moral support. Lose 1 mind point.`,
        mind: 1,
    }]
};


const lecture = {
    id: 'lecture',
    title: 'Checkout the classroom',
    map: {
    },
    image: 'lecture.jpeg', 
    audio: 'lecture.wav',
    description: `Oh No! You have stumbled into a lecture!`,
    choices: [{
        id: 'attention',
        description: 'Pat attention.',
        result: `You decide to pay attention and take notes. No mind points are lost.`,
        mind: 0,
    }, {
        id: 'surf',
        description: 'Surf the web with the volume on.',
        result: `While surfing the web on some questionable sites an abrupt noises came from your laptop. Everyone realizes what you are watching and you run out in embarrassment never to return.`,
        mind: 6,
    }, {
        id: 'points',
        description: 'Work on recovering some lost lab points.',
        result: `You decide to work on recovering some of your lost points. You miss most of the lecture and are forced into a reoccurring theme. Lose 1 mind point.`,
        mind: 1,
    }]
};


const quests = [
    outside, 
    room, 
    lecture,
];


export default quests;

