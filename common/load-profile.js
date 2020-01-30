import { getUser } from '../data/api.js';
import isBrainDead from './is-brain-dead.js';

function loadProfile() {
    // DOM elements
    const name = document.getElementById('name');
    const mind = document.getElementById('mind');

    // Getting user out of local storage
    const user = getUser();

    // if there's no user
    if (!user) {
        // no user? go back to sign up:
        window.location = './';
    }

    // copy data from object to DOM properties:
    name.textContent = user.name;
    mind.textContent = user.mind;

    // if they chose one of the ending scenarios, say so in the header
    if (isBrainDead(user)) {
        mind.textContent = 'You Didnt Make It';
    }
    else {
        // otherwise show the user mind score
        mind.textContent = user.mind;
    }

}

export default loadProfile;