import {RANGES} from '../contants';

export default class GameController {
    #attemptCount = 0;

    getAttempts () {
        return this.#attemptCount;
    }

    increaseAttempt () {
        this.#attemptCount++;
    }

    isTreasureFound (length) {
        return length <= RANGES.FIND;
    }
}