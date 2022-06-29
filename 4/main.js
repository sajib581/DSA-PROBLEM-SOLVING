// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
 
// function fizzBuzz(num) {
//   let result = ''
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       result += 'FizzBuzz \n'
//     } else if (i % 3 === 0) {
//       result += 'Fizz \n'
//     } else if (i % 5 === 0) {
//       result += 'Buzz \n'
//     } else {
//       result += i + '\n'
//     }
//   }
//   return result
// }
 
// console.log(fizzBuzz(100))
 
//Adding Sum from an array
 
//you have been provide an array of number
//you have to sum the numbers
 
// function sum(arr) {
//   //flag variable
//   let sum = 0
//   for (let num of arr) {
//     sum += num
//   }
//   return sum
// }
 
// sum([10, 15, 30, 5])
 
// 10 + 15 = 25
// 25 + 30 = 55
// 55 + 5 = 60
 
////you have been provided an array of number
//you have to maximum number
 
// function min(arr) {
// //   let min_num = arr[0]
// //   for (let num of arr) {
// //     if(num < min_num){
// //         min_num = num
// //     }
// //   }
// //   console.log(min_num)
// console.log(Math.min(...arr))
// }
 
// min([3, 1, 10, 12, -6, 0])
 
// function max(arr) {
//   let max_num = arr[0]
//   for (let num of arr) {
//     if (num > max_num) {
//       max_num = num
//     }
//   }
//   console.log(max_num)
// }
 
// max([3, 1, 10, 12, -6, 0])
 
//string reversal
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
 
// function reverse(str) {
//   let revStr = ''
//  for(let i = str.length - 1; i >= 0; i-- ){
//     revStr += str[i]
//     console.log(str[i])
//  }
 
// for(let char of str){
//     revStr = char + revStr
//     console.log(char, revStr)
// }
 
//  console.log(revStr)
//   const reverseStr = str.split('').reverse().join('')
//   console.log(reverseStr)
// }
 
// reverse('hello')
// reverse('Greetings! samim')
//olleh
 
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
 
// function reverseInt(num) {
//   let reverseNum = num.toString().split('').reverse().join('')
//   if (reverseNum.endsWith('-')) {
//     reverseNum = '-' + reverseNum.slice(0, reverseNum.length - 1)
//   }
//   return Number(reverseNum)
// }
 
// console.log(reverseInt(-90))
// console.log(reverseInt(981))
 
// function reverseInt(num) {
//   positiveNum = Math.abs(num)
//   let rev = 0
//   let rem = 0
//   while (positiveNum > 0) {
//     rem = positiveNum % 10
//     rev = rev * 10 + rem
//     positiveNum = Math.floor(positiveNum / 10)
//   }
//   if (num < 0) {
//     rev = '-' + rev
//   }
//   console.log(rev)
// }
 
// reverseInt(-12345)
 
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
 
//time complexity O(n)
//space complexity O(n)
function maxChar(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''
    for (let char of str) {
      charMap[char] = (charMap[char] || 0) + 1
    }
   
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char]
        maxChar = char
      }
    }
    return maxChar
  }
   
  console.log(maxChar('apple 123aaaa'))
   
  //check provided string is palindrome
  //if palindrome return true otherwise false
  //non-alphanumeric characters should be ignored
  //palindrome(“race car”) should return true
  // palindrome(“not a palindrome”) should return false
   
  function palindrome(str) {
    const re = /[\W_]/g
    const normalizeStr = str.toLowerCase().replace(re, '')
    //   const reverseStr = normalizeStr.split('').reverse().join('')
    //   return normalizeStr === reverseStr
    const len = normalizeStr.length / 2
    console.log(len)
    for (let i = 0; i < len; i++) {
      console.log(normalizeStr[i], normalizeStr[len - 1 - i])
      if (normalizeStr[i] !== normalizeStr[len - 1 - i]) {
        return false
      }
      //   console.log(i, len-1-i)
      // if(normalizeStr[i])
    }
    return true
  }
   
  console.log(palindrome('race car'))
   
  // --- Directions
  // Write a function that returns the number of vowels
  // used in a string.  Vowels are the characters 'a', 'e'
  // 'i', 'o', and 'u'.
  // --- Examples
  //   vowels('Hi There!') --> 3
  //   vowels('Why do you ask?') --> 4
  //   vowels('Why?') --> 0
   
  //n * 5
  //a,e,i, o, u
  // function vowels(str) {
  //   let count = 0
  //   const collectedVowels = ['a', 'e', 'i', 'o', 'u']
  //   for (let char of str.toLowerCase()) {
  //     if (collectedVowels.includes(char)) {
  //       count++
  //     }
  //   }
   
  //   return count
  // }
   
  // console.log(vowels('why?'))
   
  // --- Directions
  // Given an array and chunk size, divide the array into many subarrays
  // where each subarray is of length size
  // --- Examples
  // chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
  // chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
  // chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
  // chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
  // chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
   
  // function chunk(arr, size){
  //    const chunked = []
  //     for(let elm of arr){
  //       const last = chunked[chunked.length - 1]
  //       if(last && last.length < size){
  //         last.push(elm)
  //       } else{
  //         chunked.push([elm])
  //       }
  //     }
  //     console.log(chunked)
   
  // }

const chunk = (arr, size)=>{
    const chunked = [];
    for (const item of arr) {
        const last = chunked[chunked.length-1]
        if(last && last.length < size) {
            last.push(item);
        }else{
            chunked.push([item])
        }
    }
    console.log(chunked);
}
//[[e,r],[u,i],[t]]
chunk(['d', 'e', 'f', 'g', 'h', 'f', 'i', 'j'], 2)
