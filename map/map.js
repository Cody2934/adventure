import { getUser } from '../data/api.js';
import quests from '../data/quest-data.js';
import loadProfile from '../common/load-profile.js';
import createQuestLink from './create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';
import hasCompletedAllQuests from './has-completed-all-quests.js';
import isBrainDead from '../common/is-brain-dead.js';

loadProfile(); 

// go grab the user from localStorage
const user = getUser();

// if they're BrainDead or if they've completed all the quests send them to results page
if (isBrainDead(user) || hasCompletedAllQuests(quests, user)) {
    window.location = '/result/index.html';
}
// getting some quest element from DOM
const nav = document.getElementById('quests');

for (let i = 0; i < quests.length; i++) {
    // for every quest
    const quest = quests[i];
    let questDisplay = null;


    // if the user has completed it
    if (user.completed[quest.id]) {
        // make a completed quest display (with a check-mark)
        questDisplay = createCompletedQuest(quest);
    }
    else {
        // otherwise, make a link to the quest
        questDisplay = createQuestLink(quest);
    }
    nav.appendChild(questDisplay); // add the quest display to the nav
}