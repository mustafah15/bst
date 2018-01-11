'use strict';

const BST = require('./src/BinarySearchTree');

let bst = new BST();

bst.add(7);
bst.add(17);
bst.add(20);
bst.add(5);
bst.add(1);
bst.add(4);
bst.add(7);
bst.add(9);

console.log(JSON.stringify(bst.find(7), null, 4));
