// Write here the code challenge solution

const Node = function(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function test03(nums) {
    if (nums.length === 0) return null;
    let mid = Math.floor(nums.length / 2);
    let root = new Node(nums[mid]);
    root.left = test03(nums.slice(0, mid));
    root.right = test03(nums.slice(mid + 1));
    return root;   
  

}

module.exports = test03;

