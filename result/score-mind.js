// function that takes your final mind score and give you a final result
function scoreMind(mind) {
    if (mind <= 0) {
        return 'brainDead';
    }
    if (mind >= 5) {
        return 'success';
    }
    return 'mid';
}

export default scoreMind;