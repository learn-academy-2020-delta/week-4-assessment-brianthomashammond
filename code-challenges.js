// ASSESSMENT 4: JavaScript Coding Practical Questions

console.log("\n", "Week 4 Assessment - Java Script Code Challenges - Brian Thomas Hammond");

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

//Write a function that takes an array
const shiftAndShuffle = (argumentArray) => {
    //Remove the first element of the argumentArray using shift()
    argumentArray.shift()
    //Write a function to shuffle an array
    const shuffle = (arr) => {
        //Iterate over the length of the array from first element to last
        for (let i = 0; i < arr.length; i++) {
            //Generate a new random number on each iteration based on the array's length
            const rand = Math.floor(Math.random() * (arr.length));
            //Switch the value at the loop's current index with the value at the index determined by the random number
            [arr[i], arr[rand]] = [arr[rand], arr[i]]
        }
        //Return the shuffled array
        return arr
    }
    //Using the ternary operator, ask if argumentArray is empty
    //If so, set argumentArray to the string "The array is empty."
    //If not, shuffle() the argumentArray
    argumentArray.length === 0 ? argumentArray = "The array is empty." : shuffle(argumentArray)
    //Return argumentArray
    return argumentArray
}


console.log("\n", "#1:");
console.log(shiftAndShuffle(collections));// expect: these to all be different
console.log(shiftAndShuffle(collections));// expect: these to all be different
console.log(shiftAndShuffle(collections));// expect: these to all be different
console.log(shiftAndShuffle(collections));// expect: these to all be different
console.log(shiftAndShuffle(collections), "\n");// expect: these to all be different


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


//Write a function that takes an array of numbers
const sumTheCubes = (array) => {
    //Create a variable using the spread operator to hold a duplicate of the original array
    var answerArray = [...array]
    //Create a function to pass to reduce
    const sum = (num1, num2) => {
        return num1 + num2
    }
    //Map over the duplicate array, cubing each of them
    //Reduce all numbers in the duplicate array to a single number using helper function above
    //Return the reduced array
    return answerArray.map( value => value ** 3).reduce(sum)
}


console.log("#2:");
console.log(sumTheCubes(cubeAndSum1))// expect: 99
console.log(sumTheCubes(cubeAndSum2), "\n")// expect: 1125


// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

//Write a function that takes an array of numbers
const minAndMax = (array) => {
    //Use Math.min to find the smallest number in the array using the spread operator
    //Use Math.max to find the largest number in the array using the spread operator
    //Return an array with the smallest and largest numbers in that order
    return [Math.min(...array), Math.max(...array)]
}


console.log("#3:");
console.log(minAndMax(nums1));// expect: [-8, 90]
console.log(minAndMax(nums2), "\n");// expect: [-59, 109]


// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

// Write a function that takes a string
const lowerThenUpper = (string) => {

    //Split the string into an array
    //Map over the array using a ternary operator making letters at even indices lowercase and letters at odd indices uppercase
    //Join the letters back into a string
    //Return the new string
    return string.split("").map((letter, index) => index % 2 === 0 ? letter.toLowerCase() : letter.toUpperCase()).join("")
}


console.log("#4:");
console.log(lowerThenUpper(testString1));// expect: "aLbAtRoSs"
console.log(lowerThenUpper(testString2), "\n");// expect: "jAbBeRwOcKy"


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//Write a function that takes two arrays
const noDupeNumbers = (array1, array2) => {
    //Create an empty array to hold the answer
    answerArray = []
    //Create a function to loop through an array
    const pushFirstInstance = (array) => {
        //Iterate over the length of the array from first element to last
        for (let i = 0; i < array.length; i++) {
            //Push each element to the answer array if it is not already present
            answerArray.includes(array[i]) ? "" : answerArray.push(array[i])
        }
    }
    //Call pushFirstInstance() on both argument arrays
    pushFirstInstance(array1)
    pushFirstInstance(array2)
    //Return the answer array
    return answerArray
}


console.log("#5:");
console.log(noDupeNumbers(arr1, arr2), "\n");// expect: [3, 7, 10, 5, 4, 8, 2, 1]


var arr3 = [0, 4, 2, 43, 75, 8]


//Write a function that takes an arbitrary number of arrays using the spread operator
const noDupeNumbersStretch = (...arrays) => {
    //Create an empty array to hold the answer
    answerArray = []
    //Combine all argument arrays into a single array
    argumentsArray = [].concat(...arrays)
    //Create a function to loop through an array
    const pushFirstInstance = (array) => {
        //Iterate over the length of the array from first element to last
        for (let i = 0; i < array.length; i++) {
            //Push each element to the answer array if it is not already present
            answerArray.includes(array[i]) ? "" : answerArray.push(array[i])
        }
    }
    //Call pushFirstInstance() on the collection of argument arrays
    pushFirstInstance(argumentsArray)
    //Return the answer array
    return answerArray
}


console.log("#5 STRETCH:");
console.log(noDupeNumbersStretch(arr1, arr2, arr3), "\n");// expect: [3, 7, 10, 5, 4, 8, 2, 1, 0, 43, 75]