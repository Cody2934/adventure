//if the user pick one of the end game choices this automatically happens
function isBrainDead(user) {
    return user.mind <= 0;
}

export default isBrainDead;