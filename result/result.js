import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreMind from './score-mind.js';
import { mindMessages } from './message.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const mindResult = scoreMind(user.mind);
const mindMessage = mindMessages[mindResult];

let story = 'After your time at Alchemy, ';
story += user.name + ', ';
story += mindMessage + '.';

storyDisplay.textContent = story;