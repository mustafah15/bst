'uset strict';

class Node {

    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    /**
     * @private
     * @summary search tree with value where to add new node
     * */
    _searchTree(data, node) {
        if(data < node.data) {
            if(node.left === null) {
                node.left = new Node(data);
                return;
            } else if(node.left !== null) {
                return this._searchTree(data, node.left);
            }
        } else if(data > node.data) {
            if(node.right === null) {
                node.right = new Node(data);
                return;
            } else if(node.right !== null) {
                return this._searchTree(data, node.right);
            }
        } else {
            return null;
        }
    }

    /**
     * @summary add new node
     * @param {*} data
     * */
    add(data) {
        const node = this.root;
        if(node === null) {
            this.root = new Node(data);
            return;
        } else {
            this._searchTree(data, node);
        }
    }

    /**
     * @summary find the min key value in the tree
     * */
    findMin() {
        let current = this.root;
        while(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    /**
    * @summary find max key value in the tree
    */
    findMax() {
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    /**
     *  @summary find node with it's key
     */
    find(data) {
        let current = this.root;
        while(current.data !== data) {
            if(current.data > data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if(current === null) {
                return null;
            }
        }
        return current;
    }

    /**
     * @summary tree in order traverse
     */
    inOrder() {
        if(this.root === null) {
            return null;
        }
        this._traverseInOrder(this.root);
    }

    /**
     * @summary tree post order traverse
     * */
    postOrder() {
        if(this.root === null) {
            return null;
        }
        this._traversePostOrder(this.root);
    }

    /**
     * @summary tree pre order traverse
     * */
    preOrder() {
        if(this.root === null) {
            return null;
        }
        this._traversePreOrder(this.root);
    }

    /**
     * @private
     */
    _traverseInOrder(node) {
        node.left && this._traverseInOrder(node.left);
        console.log(node.data);
        node.right && this._traverseInOrder(node.right);
    }

    /**
     * @private
     */
    _traversePostOrder(node) {
        console.log(node.data);
        node.left && this._traverseInOrder(node.left);
        node.right && this._traverseInOrder(node.right);
    }

    /**
     * @private
     */
    _traversePreOrder(node) {
        node.left && this._traverseInOrder(node.left);
        node.right && this._traverseInOrder(node.right);
        console.log(node.data);
    }

}

module.exports = BinarySearchTree;
