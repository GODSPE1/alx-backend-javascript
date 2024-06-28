export default class HolbertonClass {
    constructor (size, location) {
        if (typeof size !== 'number') {
            throw new TypeError('size must be Number');
        } else if (typeof location !== 'string') {
            throw new TypeError('loction must String');
        }

        this._size = size;
        this._location = location;
    }
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this._size
        }
        return this._location
    }
}