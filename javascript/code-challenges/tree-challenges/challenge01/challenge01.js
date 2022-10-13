// Write here the code challenge solution
// Write here the code challenge solution

const Node = function(value){
    this.value = value;
    this.left = null;
    this.right = null;
}


const test01 = function(preorder,inorder){
    if(preorder.length === 0 || inorder.length === 0){
        return null;
    }

    if(preorder.length === 1){
        return new Node(preorder[0]);
    }
    
    let root = new Node(preorder[0]);
    let mid = inorder.indexOf(preorder[0]);


    root.left = test01(preorder.slice(1,mid+1),inorder.slice(0,mid));
    root.right = test01(preorder.slice(mid+1),inorder.slice(mid+1));

    return root;
}

module.exports = test01;