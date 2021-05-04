function dfs(inner_root,currentSum,sum ){
    if(!inner_root){
        return
    }
    const newCurrentSum = inner_root.value + currentSum
    if(!inner_root.left && !inner_root.right){
        sum.push(newCurrentSum)
        return
    }
    dfs(inner_root.left,newCurrentSum,sum)
    dfs(inner_root.right,newCurrentSum,sum)
}

function branchSums(root) {

    var sum = []

    dfs(root,0,sum)
    return sum
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


branchSums(tree)

