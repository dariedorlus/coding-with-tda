
//given an array of strings, and a target return true if the target is in the array
const sampleArr = ["a", "b", "c", "d", "e"]
const tar = "z"

function containsTarget(arr, target) {

    if (arr === undefined || arr === null || arr.length === 0) {
        return false
    }

    if (!target) {
        return false
    }

    for (let i = 0; i < arr.length; i++) {

        if (target === arr[i]) {
            return true
        }
    }

    return false

}

function containsTarget1(arr, target) {

    if (arr === undefined || arr === null || arr.length === 0) {
        return false
    }

    if (!target) {
        return false
    }

    let answer = false

    for (let i = 0; i < arr.length; i++) {

        if (target === arr[i]) {
            answer = true
            break
        }
    }

    return answer

}

console.log(containsTarget(sampleArr, tar))

//Given an array of words, return a single string
//containing all the words  in the form of a sentence

//["I'm", "so", "awesome"] -> "I'm so awesome"

//WRITE a function that takes an array
function convertToSentence (words){
    
    //check if the array is valid
    //if words is not null or undefined  or length > 0
    let answer = ""
    // loop through the array to get each word
    //define the loop
    for(let i = 0; i < words.length; i++){
    //add each word to answer plus a space
        answer += words[i] + " "
    }
    
    //return the answer
    return answer
}

function convertToSentence2 (words){
    
    //check if the array is valid
    //if words is not null or undefined  or length > 0
    if( words === null || words === undefined || words.length === 0){
        return
    }

    let answer = ""

    for(let i = 0; i < words.length; i++){
        answer += words[i] + " "
    }
    
    return answer
}

console.log(convertToSentence2(["I'm", "so", "awesome"]))