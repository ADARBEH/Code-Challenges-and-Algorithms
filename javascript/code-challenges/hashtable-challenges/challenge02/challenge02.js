// Write here the code challenge solution

function Check_string_have_same_word(string) {

    if(string === '') {
        return null;
    }

    let array = string.split(' ');
    
    if (array.length === 1) {
        return null;
    }
    
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return array[i];
            }
        }
    }
    return 'No Repetition';

}

module.exports = Check_string_have_same_word;
