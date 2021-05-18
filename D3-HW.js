

// 1)
// Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.

const sumOfTwoNumbers = (n1,n2) =>console.log( n1 === n2 ? (n1 + n2) *3 : n1 + n2)
// sumOfTwoNumbers(4,4)
// 2)
// Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.
function CheckTwoNumbers(n1,n2){
   return console.log( n1 === 50 || n2 === 50 || (n1 + n2) === 50 ? true : false)
}
// CheckTwoNumbers(25,25)

// 3)
// Create a function to remove a character at the specified position of a given string and return the new string.

function removeFromString(string, start, charToRemove){
    var newString = '';
    newString = string.slice(0, start) + string.slice(start+charToRemove);
    return newString;
  }
//   console.log(removeFromString ('Hello', 0, 1)) 

// 4)
//  Create a function to find the largest of three given integers.

const largestInteger = (n1,n2,n3) => console.log(Math.max.apply(null,[n1,n2,n3]))
// largestInteger(4,52,32)

// 5)
// Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

const checkRange = (n1,n2) => [n1,n2].forEach((n) =>{
    return console.log( 
            n > 40 && n < 60 ? `${n} is between 40 & 60`: 
            n > 70 && n < 100 ? `${n} is between 70 & 100`: `${n} is not in range`
    )
})
    // checkRange(30,80)

// 6) 
// Create a function that creates and returns the specified number of copies of a given string (positive number).
const copyStr = (n,str) => {
    let copies = ""
    for(let i = 0; i < n; i++){
        copies += str
    }
    return console.log(copies)
}
// copyStr(10,"Strive")

// 7)
// Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank.

const returnCity = (str) =>console.log( str.includes( "Los") || str.includes( "New") ? str : "")
// returnCity("New York")


// 8)
// Create a function to calculate the sum of three elements of a given array of integers of length 3.

const sumOfThreeElements = (n1,n2,n3) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log([n1,n2,n3].reduce(reducer))
}
// sumOfThreeElements(200,200,200)

// 9)
// Create a function to test whether an array of integers of length 2 contains 1 or a 3. DONE

// 10)
// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3 DONE

const testIntegersContains = (n1,n2) => [n1,n2].forEach((n)=> {
    
    (n+'').indexOf('1') > -1 ? console.log(`${n} contains 1`):
    (n+'').indexOf('3') > -1  ? console.log(`${n} contains 3`):
           console.log(`${n} dose not contain 2 or 3`)
})

// testIntegersContains(31,45)



// 11)
// Create a function to find the longest string from a given array of strings.

const longestString = (arr) => {
    let longest = ""
    for( let i=0; i<arr.length ;i++ ){
        if(arr[i].length > longest.length){
            longest = arr[i]
        }
    }
    return console.log(longest)
    
}
// longestString(["Strive","School","Is", "Awesome"])

// 12)
// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     Obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.
const getAngle =(n) =>{

   return(n > 0 && n < 90 ? console.log("Acute Angle") :
    n === 90 ? console.log("Right Angle"):
    n > 90 && n < 180 ? console.log("Obtuse Angle"):
    n === 180 ? console.log("Straight Angle"): console.log("No Angle")
    )
}
// getAngle(90)

// 13)
// Create a function to find the index of the greatest element of a given array of integers
const greatestInteger = (arr) => {
let greatest = 0;
        arr.forEach((n)=> n > greatest? greatest = n: "" )
        return console.log(greatest)
}
// greatestInteger([3,62,21,78,100])

// 14)
// Create a function to get the largest even number from an array of integers.

const greatestEvenInteger = (arr) => {
    let greatest = 0;
            arr.forEach((n)=> n > greatest && n % 2 ===0 ? greatest = n: "" )
            return console.log(greatest)
    }
    // greatestEvenInteger([2,62,21,78,155])

// 15)
// Create a function to check from two given integers, whether one is positive and another one is negative.

const testPositiveOrNegative = (n1,n2) => {
        
    [n1,n2].forEach(n=> {
        console.log(
        n >= 0 ? `${n} is a positive number`:
        n < 0 ? `${n} is a negative number`: "")
    })
}
// testPositiveOrNegative(-1,5)

// 16)
// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

const convertUpperLowerCase = (str) =>{
if(str.length <= 3){
   return console.log(str.toUpperCase())
}
else if(str.length > 3)
    return console.log(str.slice(0,3).toUpperCase() + str.slice(2,-1))
}

convertUpperLowerCase("super kicking super nice!")
// 17)
// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.


const checkSumRange = (n1,n2) =>{
    let sum = n1 + n2
    sum > 50 && sum < 80 ? console.log(65) : console.log(80)
}
    checkSumRange(30,80)
    
// 18)
// Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

// 19)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
