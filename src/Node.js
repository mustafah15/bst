'use strict';

class Node {

    constructor(data, left = null, right = null, parent = null) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }

    delete() {
        delete this.data;
        delete this.right;
        delete this.left;
    }

}

module.exports = Node;
