// Write here the code challenge solution

// write function to covert the linked list to array

function covert_root_to_array(root) {
    let array = [];
    let current = root;
    while (current) {
        array.push(current.value);
        current = current.next;
    }
    return array;
}

const Ckeck_sum = (root, integer) => {

    let array = covert_root_to_array(root);
    if (!array.length === 0) {
        console.log('THE LINKED LIST IS EMPTY OR THE ROOT IS AREADY IN ARAAY');
        return false;
    } else {
        array = root
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === integer) {
                return true;
            }
        }
    }
    return false;
}

// const root = [7,2,9,1,5,null,14];
// const integer = 3;
// console.log(Ckeck_sum(root, integer));

module.exports = {
    Ckeck_sum,
    covert_root_to_array
}