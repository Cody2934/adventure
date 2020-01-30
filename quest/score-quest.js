function scoreQuest(choice, questId, user) {
    // subtract mind to user according to the choice
    user.mind -= choice.mind;
    // set this quest id to completed
    user.completed[questId] = true;
}

export default scoreQuest;
