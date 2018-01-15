'uset strict';

const _ = require('lodash');
const Node = require('Node');

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
            if(_.isNil(node.left)) {
                node.left = new Node(data, null, null, node);
                return;
            } else if(!_.isNil(node.left)) {
                return this._searchTree(data, node.left);
            }
        } else if(data > node.data) {
            if(_.isNil(node.right)) {
                node.right = new Node(data, null, null, node);
                return;
            } else if(!_.isNil(node.right)) {
                return this._searchTree(data, node.right);
            }
        } else {
            return null;
        }
    }

    _successor(node) {
        node = this.find(node);
        if(node.right !== null) {
            return this.findMin(node.right);
        }

        let parent = node.parent;
        while(!_.isNil(parent) && node === parent.right) {
            node = parent;
            parent = parent.parent;
        }

        return parent;
    }

    _predecessor(node) {
        node = this.find(node);
        if(node.left !== null) {
            return this.findMax(node.left);
        }

        let parent = node.parent;
        while(parent !== null && node === parent.left) {
            node = parent;
            parent = parent.parent;
        }

        return parent.date;
    }

    deleteNode(data) {
        let node = this.find(data);
        if(_.isNil(node)) {
            return;
        }

        if(_.isNil(node.left) && _.isNil(node.right)) {
            node.delete();
            node = null;
            return;
        }

        if(_.isNil(node.left)) {
            if(node.parent.left.data === node.data) {
                node.parent.left = node.right;
            } else if(node.parent.right.data === node.data) {
                node.parent.right = node.right;
            }
            node.delete();
            return;
        } else if(_.isNil(node.right)) {
            if(node.parent.left.data === node.data) {
                node.parent.left = node.left;
            } else if(node.parent.right.data === node.data) {
                node.parent.right = node.left;
            }
            node.delete();
            return;
        } else {
            const successor = this._successor(node.data);
            const temp = successor.data;
            this.deleteNode(successor.data);
            node.data = temp;
            return;
        }
    }

    /**
     * @summary add new node
     * @param {*} data
     * */
    add(data) {
        const node = this.root;
        if(_.isNil(node)) {
            this.root = new Node(data);
            return;
        } else {
            this._searchTree(data, node);
        }
    }

    /**
     * @summary find the min key value in the tree
     * */
    findMin(current = null) {
        if(_.isNil(current)) {
            current = this.root;
        }

        while(!_.isNil(current.left)) {
            current = current.left;
        }

        return current;
    }

    /**
    * @summary find max key value in the tree
    */
    findMax(current = null) {
        if(_.isNil(current)) {
            current = this.root;
        }

        while(_.isNil(current.right)) {
            current = current.right;
        }

        return current;
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
            if(_.isNil(current)) {
                return null;
            }
        }
        return current;
    }

    /**
     * @summary tree in order traverse
     */
    inOrder() {
        if(_.isNil(this.root)) {
            return null;
        }
        this._traverseInOrder(this.root);
    }

    /**
     * @summary tree post order traverse
     * */
    postOrder() {
        if(_.isNil(this.root)) {
            return null;
        }
        this._traversePostOrder(this.root);
    }

    /**
     * @summary tree pre order traverse
     * */
    preOrder() {
        if(_.isNil(this.root)) {
            return null;
        }
        this._traversePreOrder(this.root);
    }

    /**
     * @private
     */
    _traverseInOrder(node) {
        node.left && this._traverseInOrder(node.left);
        node.data && console.log(node);
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
