// Write here the code challenge solution


// Write here the code challenge solution
// Write here the code challenge solution

const Node = function(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
p = [1,2,3], q = [1,2,3]

const test02 = function(p,q){
   
    let root1 = new Node(p[0])
    let root2 = new Node(q[0])
    let left1 = new Node(p[1])
    let left2 = new Node(q[1])
    let right1 = new Node(p[2])
    let right2 = new Node(q[2])
    root1.left = left1
    root1.right = right1
    root2.left = left2
    root2.right = right2

    if(root1.value === root2.value && root1.left.value === root2.left.value && root1.right.value === root2.right.value){
        return true
    }else{
        return false
    }

}

module.exports = test02;
