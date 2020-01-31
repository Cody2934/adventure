function hasCompletedAllQuests(quests, user) {
    // check all of the quests
    for (let i = 0; i < quests.length; i++) {
        const quest = quests[i];
        // if any of the quests is incomplete return false
        if (!user.completed[quest.id]) {
            return false;
        }
    }
    // if all of the quests are complete return true
    return true;
}

export default hasCompletedAllQuests;