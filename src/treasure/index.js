export default class Treasure {
    #x;
    #y;

    set x (val) {}
    get x () {
        if (!this.#x) {
            throw new Error('You should hide treasure first!');
        }

        return this.#x;
    }

    set y (val) {}
    get y () {
        if (!this.#y) {
            throw new Error('You should hide treasure first!');
        }

        return this.#y;
    }

    static hideTreasure (treasureInstance) {
        // TODO: зарандомить
        treasureInstance.#x = 10;
        treasureInstance.#y = 10;
    }
}


