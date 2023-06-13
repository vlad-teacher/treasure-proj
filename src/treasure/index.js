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

    #calculateSquaredKatet (coord1, coord2) {
        return Math.pow(coord1 - coord2, 2);
    }

    getLengthTo ({x,y}) { // click coords
        const squaredKatet1 = this.#calculateSquaredKatet(x, this.x);
        const squaredKatet2 = this.#calculateSquaredKatet(y, this.y);

        return Math.sqrt(squaredKatet1 + squaredKatet2);
    }

    static calculateRandomCoord (maxAmount) {
        const percent10 = Math.round(maxAmount * 0.1);
        return Math.floor(Math.random() * (maxAmount - 2 * percent10)) + percent10;
    }

    static hideTreasure (treasureInstance, {height, width}) {        
        treasureInstance.#x = Treasure.calculateRandomCoord(width);
        treasureInstance.#y = Treasure.calculateRandomCoord(height);
    }
}


