//3. Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

const lessThanZero  =  (num) => {
    
    let result = false

    if(num <= 0)
    {
        result = true
    }

    return result

}

const lessThanZero2  =  (num) => {
    
    return num <= 0

}


const lessThanZero3  =  (num) => {

    if(num <= 0)
    {
        return true
    }

    return false

}


const lessThanZero4  =  (num) => {

    if(num <= 0)
    {
        return true
    } else {
        return false
    }
}

console.log(lessThanZero(20))
console.log(lessThanZero2(20))
console.log(lessThanZero3(20))
console.log(lessThanZero4(20))