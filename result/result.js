import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreMind from './score-mind.js';
import { mindMessages } from './message.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const mindResult = scoreMind(user.mind);
const mindMessage = mindMessages[mindResult];

let story = 'So what happened you ask??? As our adventure comes to a close, ';
story += user.name + ', ';
story += mindMessage + '.';

storyDisplay.textContent = story;