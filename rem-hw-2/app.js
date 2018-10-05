const arr1 = [2, 54, 93, 66, 42, 96, 43];
const arr2 = [3, 5, 89, 10, 11, 13, 42];
const arr3 = [90, 8, 1, 1, 43, 27, 63, 33];
const arr4 = [1, 8, 3, 13, 13, 99, 202];

/* Write a function that takes in an array and console.logs the sum of
all the numbers in the array. Then call the function 4 times, passing in
one array above each time. */

// let sum = 0;

// const arrayTotal = function(){
//     for ( i = 0 ; i < arr1.length ; i++){
        
//         sum += arr1[i];
//         console.log(sum); 
             
//     }
//  }

//  let total1 = arr1.reduce(function(a,b) {
//     return (+a)+(+b);
// });

const sumStuff = function(arrayThing){
    let answer = arrayThing.reduce(function(a,b) {
        return (+a)+(+b);
    })
    console.log(answer);
}

sumStuff(arr1);
sumStuff(arr2);
sumStuff(arr3);
sumStuff(arr4);

// console.log(total1);


// let total2 = arr2.reduce(function(a,b) {
//     return (+a)+(+b);
// });

// console.log(total2);

// let total3 = arr3.reduce(function(a,b) {
//     return (+a)+(+b);
// });

// console.log(total3);

// let total4 = arr4.reduce(function(a,b) {
//     return (+a)+(+b);
// });

// console.log(total4);
 


const numberOfTimes = prompt('How many students do you want to see?')
const nameList = ['sally', 'sarah', 'betsy', 'sam', 'aretha', 'sun'];

/* Write a function that takes in numberOfTimes and nameList as paramaters and returns
the number of students entered in the prompt. For example if I type 2 into the prompt
the function will return `sally, sarah`. Then console.log the function to see 
the return. */

let customArray = [];

const names = function (numberOfTimes , nameList) {
    
    for ( i = 0 ; i < numberOfTimes ; i++){
       customArray.push(nameList[i]);
    }  
    console.log(customArray);
}   

names(numberOfTimes, nameList);


/* Create a loop inside a function that sums the number from 1 to 172, inclusively.
Save the sum in a global variable called total. Call the function.
Console.log the total. */
// seqArray = [];

// seqArray.apply(null, {length: 173}).map(Function.call, Number);
// console.log(seqArray);

seqArrayB = [];

const seqAdd = function (seqArrayB) {
    for ( i = 1 ; i < 173 ; i++ ){
        console.log(sumStuff(seqArrayB))
    }
}

const fillRange = (start, end) => {
    return Array(end - start + 1).fill().map((item, index) => start + index);
  };
  
  const allLines = fillRange(1, 172 );
//   console.log(fillRange);
//   console.log(allLines);

  sumStuff(allLines);




// var arr172 = new array(172);

// for(var i=0 ; i < array172.length ; i++ ){
//     document.write( 'item: ' + (i + 1) + 'of' + var172.length + '<br/>');
// }

