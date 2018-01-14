'use strict';

const BST = require('./src/BinarySearchTree');

const bst = new BST();

bst.add(15);
bst.add(17);
bst.add(20);
bst.add(25);
bst.add(5);
bst.add(2);
bst.add(4);
bst.add(7);
bst.add(9);
bst.add(1);

//                 15
//               /   \
//            5         17
//          /    \        \
//        2       7         20
//      /   \       \         \
//    1       4       9         25
