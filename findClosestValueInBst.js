    function findClosestValueInBst(tree, target) {
        let lowestDifference = Number.POSITIVE_INFINITY
        let nodeValue = tree.value
        // Write your code here.
        function traverse(node){
            node.left && traverse(node.left)
            if(node.value) {
              if(Math.abs(target - node.value) < lowestDifference){
                  lowestDifference = Math.abs(target - node.value)
                  nodeValue = node.value
              }
            }
            node.right && traverse(node.right)
        }

        traverse(tree)



        return nodeValue
    }


class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new BST(10)
let leftBst = new BST(5)
leftBst.left = new BST(2)
leftBst.right = new BST(5)
tree.left = leftBst
let rightBst = new BST(15)
rightBst.left =new BST(13)
rightBst.right = new BST(22)
tree.right = rightBst

findClosestValueInBst(tree,12) //?

// This is the class of the input tree. Do not edit.
