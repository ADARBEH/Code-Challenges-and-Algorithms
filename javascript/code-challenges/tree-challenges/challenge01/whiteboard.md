Welcome file
Welcome file
Problem domain	Visualization	Big o
Writing a function that takes two arrays of numbers and returns an array of numbers, but is arranged according to the Binary Tree Data Structure	[] => return null , [one value] => return root is this value, [values] => return [values as binary Tree] like image binary Tree	calls itself twice per function may have a runtime of O(2^N)
Edge cases	Algorithm	Code
- Empty array - array have one value	(1) Declare a function called test01 that takes to arrays (preorder , inorder) (2) check if arrays empty or have one value then (3) create a value called root that take from first element in preorder because is element is a root for binary Tree (4) create a value called moid it will be index of (inorder) (5) now let root.left to be equal Recursion function with new variables by doing for preorder and inorder slice (6)keep loop and return root	``` js
const Node = function(value){
this.value = value;
this.left = null;
this.right = null;
}

const test01 = function(preorder,inorder){
if(preorder.length === 0 || inorder.length === 0){
return null;
}
let root = new Node(preorder[0]);
let mid = inorder.indexOf(preorder[0]);

root.left = test01(preorder.slice(1,mid+1),inorder.slice(0,mid));
root.right = test01(preorder.slice(mid+1),inorder.slice(mid+1));

return root;
}``` |

HTML 1092 characters 205 words 27 paragraphs
