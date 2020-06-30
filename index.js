'use strict';

const a = fillArrayWithRandom(10, 10, 1);


alertArr(a);
alertArrEven(a);
alert(sumOfArrElements(a));
alert(getMaxArrElement(a));

addByIndex(a,0,100);
alert(a);

deleteByIndex(a, 0);
alert(a);



/**
 * Implements adding an element to an array by index
 * @param {[]}     arr
 * @param {number} index
 * @param {number} value
 */
function addByIndex(arr, index, value) {
  arr[index] = value;
}

/**
 * Implements deleting an element from the array by index
 * using splice()
 *
 * @param {[]}     arr
 * @param {number} index
 */
function deleteByIndex(arr, index) {
  arr.splice(index, 1);
}

/**
 * Implements Math.max for searching max element of an array
 * @param   {[]}     arr
 * @returns {number}
 */
function getMaxArrElement(arr) {
  return Math.max.apply(Math, arr);
}

/**
 * Counts sum of all array elements
 * @param   {[]}     arr
 * @returns {number}
 */
function sumOfArrElements(arr) {
  return arr.reduce(function(accumulator, current) {
    return accumulator + current;
  });
}

/**
 * Just using alert in function
 * @param arr
 */
function alertArr(arr) {
  alert(arr);
}

/**
 * Specifies whether a num is even
 * @param   {number}  num
 * @returns {boolean}
 */
function isEven(num) {
  return num % 2 === 0;
}

/**
 * Alerts only even array elements
 * @param {[]} arr
 */
function alertArrEven(arr) {
  const evenElements = arr.filter(isEven);
  alert(evenElements);
}

/**
 * Returns array filled with random numbers
 * @param   {number} numOfElements - number of elements of new array
 * @param   {number} max           - maximum random value
 * @param   {number} min           - minimal random value
 * @returns {[]}
 */
function fillArrayWithRandom(numOfElements, max = 10, min = 0) {

  const arr = [];

  for (let i = 0; i < numOfElements; ++i) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return arr;
}

