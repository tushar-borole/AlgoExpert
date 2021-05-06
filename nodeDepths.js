function nodeDepths(root, depth = 0) {
    if(!root){
        return 0
    }


    return  depth + nodeDepths(root.left, depth+1) + nodeDepths(root.right,depth+1)
}


class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



const tree = new BinaryTree(10)
let leftBst = new BinaryTree(5)
leftBst.left = new BinaryTree(2)
leftBst.right = new BinaryTree(5)
tree.left = leftBst
let rightBst = new BinaryTree(15)
rightBst.left =new BinaryTree(13)
rightBst.right = new BinaryTree(22)
tree.right = rightBst

nodeDepths(tree) //?