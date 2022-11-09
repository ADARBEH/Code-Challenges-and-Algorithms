// Write here the code challenge solution

function Check_string_have_same_word(string) {
    let array = string.split(' ');
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
