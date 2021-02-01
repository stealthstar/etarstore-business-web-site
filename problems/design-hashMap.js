/**
 * 706. Design HashMap
 *
 * Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

Example:

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found)

Note:

All keys and values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashMap library.

 * Initialize your data structure here.
 */
var MyHashMap = function () {
    this.memory = []
}

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    this.memory[key] = value
}

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    if (!this.hasKey(key)) {
        return -1
    }
    return this.memory[key]
}

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    delete this.memory[key]
}

MyHashMap.prototype.hasKey = function (key) {
    return this.memory[key] !== undefined
}

MyHashMap.prototype.getAll = function () {
    return this.memory
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

const hashMap = new MyHashMap()
hashMap.remove(2)
hashMap.put(3, 11)
hashMap.put(4, 13)
hashMap.put(15, 6)
hashMap.put(6, 15)
hashMap.put(8, 8)
hashMap.put(11, 0)
console.log(hashMap.get(11))
hashMap.put(1, 10)
hashMap.put(12, 14)

console.log(hashMap.getAll())