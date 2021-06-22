class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function inOrderTraverse(tree, array) {
    if(tree.left){
         inOrderTraverse(tree.left,array)
    }
    if(tree.value){
        array.push(tree.value)
    }

    if(tree.right){
         inOrderTraverse(tree.right,array)
    }

    return array
}

function preOrderTraverse(tree, array) {
    if(tree.value){
        array.push(tree.value)
    }
    if(tree.left){
        preOrderTraverse(tree.left,array)
    }

    if(tree.right){
        preOrderTraverse(tree.right,array)
    }

    return array
}

function postOrderTraverse(tree, array) {

    if(tree.left){
        postOrderTraverse(tree.left,array)
    }

    if(tree.right){
        postOrderTraverse(tree.right,array)
    }
    if(tree.value){
        array.push(tree.value)
    }

    return array
}


const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.right = new BST(22);


inOrderTraverse(root,[])
preOrderTraverse(root,[])
postOrderTraverse(root,[])