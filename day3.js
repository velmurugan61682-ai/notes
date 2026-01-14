
    // 1qestion
//     function vel(){
//         console.log("print the series of 1234 ...8 using for loop");
//         for (let i=1;i<=8;i++)
//     {
//     console. log(i);
//     }}
//     vel()
//     function vel(n){
//     console.log("print the series of 1234...8 while loop");
//     let j=1;
//     while (j<=n)
//     {
//         console.log (j);
//         j++;
//       }}
//       vel(8)
// function vel(n){
//       console.log("print the series of 1234...8 do loop");
//       let j=1;
//       do
//       {
//        console.log(n);
//           let num="";
//            n++;
//       }
//       while(j<n);
//       return (num)
// }
// vel(10);
    //   2 question
// console.log("print the series of 1357 series odd using for loop");
// for (  i=1;i<=9;i+=2)
// {
// console.log(i)

// }
//  console.log("print the series of 13579 using while loop");
//      let j=1;
//     while (j<=9)
//     {
//         console.log (j);
//         j+=2;
//     }
    
//       console.log("print the series of 13579 using do loop");
//       let k=1;
//       do
//       {
//          console.log(k);
//          k+=2;
//       }
//           while(k<=9);
        // 3question
//      console.log("print the series of 02468  using for loop");
//        for(let i=0;i<=10;i++)
//       {
//       if(i%2===0)
//          console.log(i);

//       }
//  console.log("print the series of 02468using while loop");
//      let j=0;
//     while (j<=10)
//     {
//       if(j%2===0)
//         console.log (j);
//         j++;
//     }
    
//       console.log("print the series of 13579 using do loop");
//       let k=0;
//       do
//       {if(k%2===0)
//          console.log(k);
//          k++;
//       }
//           while(k<=10);
// Array => A variable like structure that can hold more than 1 value

let oddNumbers = [1, 5, 3, 7, 11, 9]

oddNumbers.push(13) // - add element last
oddNumbers.pop //- remove last element
oddNumbers.unshift(0) //- add element front of array
oddNumbers.shift() //- remove element front of array

console.log(oddNumbers.length) //- length of the array

let index = oddNumbers.indexOf(3) //- index value show if incase that number not in array means output is -1
console.log(index)

console.log(oddNumbers.sort((a, b) => a - b)); //assending order 
console.log(oddNumbers.sort((a, b) => b - a)); //desending order 

for (let number of oddNumbers) {
    console.log(number)
};

// 1. spread operator => (... spread) allow an iterable such as an array
//  or string to the expanded into seperate elements
// (unpacks the elements)

let numbers = [1, 2, 4, 8, 3, 5, 7, 9, 11]
let numbers1 = [1, 2, 3, 5, 8, 9, 0, 6]

console.log(...numbers, ...numbers1)

// Print unique values in array 
let arrray = [...new Set([...numbers, ...numbers1])]

console.log(arrray)

let max = Math.max(...numbers)

console.log(max)  //output = 11

// reduce method find max 
console.log(numbers)

const maxVal = numbers.reduce((accumulator, element) => {
    return accumulator > element ? element : accumulator
})

console.log(maxVal)

const evenTotal = numbers.reduce((accumulator, element) => {
    return element % 2 === 0 ? accumulator + element : accumulator
}, 0)

console.log(evenTotal)

const oddCount = numbers.reduce((accumulator, element) => {
    return element % 2 !== 0 ? accumulator + 1 : accumulator
}, 0)

console.log(oddCount)

let fruits = ['orange', 'banana', 'apple', 'goa']

// Words length total 
const totalLength = fruits.reduce((acc, ele) => {
    return acc + ele.length
}, 0)

console.log(totalLength)

let vegitables = ['tomoto', 'potato', 'onion']

let food = [...fruits, ...vegitables, "meals", "chiken"]

console.log(food)


// Uses 

// 1. Copy array or object using spread operator 

const newArray = [...numbers]
// console.log(numbers)
console.log(newArray)



// Rest operator => (...rest) allow a function work with a variable number of
//  arguments by bundling them into an array

// spread - expands an array into seperate elements
// rest - bundles separate elements into an array


const friend1 = "vel"
const friend2 = "murugan"
const friend3 = "ragul"
const friend4 = "ravi"
const friend5 = "karthi"


// function friendsGang(...friends) {
//     console.log(...friends)
// }

// friendsGang(friend1, friend2, friend3, friend4, friend5);

// Array destructuring
let arr = ['vel', 'murugan', 'ragul', 'ravi', 'suriya']

const [f1, f2, ...trios] = arr

console.log(trios);

// rest operator and callbackfunction

function friendGang(...friend) {
    return friend
}

const friend = friendGang(friend1, friend2, friend3, friend4, friend5)

console.log(friend)

function sum(...numbers) {
    let result = 0;
    for (let n of numbers) {
        result += n
    }
    return result
}
const total = sum(1, 2, 3, 4, 5)

console.log(`Total sum is ${total}`)

function joinString(...string) {
    return string.join(" ")
}

const newString = joinString("Hi", "i am", "vel", "bsc", "it")

console.log(newString)

// forEach() => THis method is used to iterate over the elements of an array
// and apply a specified function (callback) to each element
// arr.forEach(callback)  forEach Provide a element,index,array

let Array = [1, 2, 3, 4, 5]

Array.forEach(Squre);

function Squre(element, index, Array) {
    Array[index] = Math.pow(element, 2)
}
console.log(Array)

let fruit = ["apple", "orange", "banana", "goa"]

function UpperCase(element, index, array) {
    array[index] = element.toUpperCase()
}
fruit.forEach(UpperCase)

//first letter Capital
fruit.forEach((e, i, a) => {
    a[i] = e.charAt(0).toUpperCase() + e.slice(1)
})
console.log(fruit)


// Map Method =>(map()) accept a callback and applies that function
// to each element of an array then return a new array

let evenNumbers = [2, 4, 6, 8, 10];

const Even = evenNumbers.map(square);

console.log(Even)

function square(element) {
    return Math.pow(element, 2)
}

let dates = ["2021-03-23", "2020-04-14", "20010-04-06"]

let correctDate = dates.map(dateFormate)

console.log(correctDate)

function dateFormate(element) {
    const part = element.split("-")
    return `${part[2]}/${part[1]} / ${part[0]}`
}

// Filter Method => (filter()) create a new array by filtering out elements

let number = [1, 3, 4, 5, 7, 90, 6, 8, 9, 10, 23];

let evenNums = number.filter(EvenNumbers);

function EvenNumbers(element) {
    // const lastDigit = element % 10

    // if (lastDigit === 0 || lastDigit === 2 || lastDigit === 4 || lastDigit === 6 || lastDigit === 8) {
    return element % 2 === 0 //`${element}`
    // }
}

console.log(evenNums)

const ages = [15, 18, 19, 21, 23, 25, 12, 1, 26, 27, 31]

const Younger = ages.filter(youngAge).sort().reverse()

console.log(Younger)

function youngAge(e) {
    return e < 25
}

// Reduce() => reduce the elements of an array to a single value

const prices = [4, 2, 6, 9, 12, 23, 34, 45, 56];

const tot = prices.reduce(totval);

console.log(`Total Value is : $${tot.toFixed(2)}`)

function totval(accumulator, element) {
    return accumulator + element
}

const marks = [89, 45, 67, 89, 34, 48, 32]

// const maxMark = Math.max(...marks)

// console.log(maxMark)  //->NaN so use spread oerator

const maxMark = marks.reduce(getMax);
console.log(maxMark)

function getMax(accumulator, element) {
    return Math.max(accumulator, element)
}





