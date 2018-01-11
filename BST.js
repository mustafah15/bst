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

    add(data) {
        const node = this.root;
        if(node === null) {
            this.root = new Node(data);
            return;
        } else {
            this.searchTree(data, node);
        }
    }

    searchTree(data, node) {
        if (data < node.data) {
            if (node.left === null) {
                node.left = new Node(data);
                return;
            } else if (node.left !== null) {
                return this.searchTree(node.left);
            }
        } else if (data > node.data) {
            if (node.right === null) {
                node.right = new Node(data);
                return;
            } else if (node.right !== null) {
                return this.searchTree(node.right);
            }
        } else {
            return null;
        }
    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (current.data < data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
}