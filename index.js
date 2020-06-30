'use strict';

const a = fillArrayWithRandom(10, 10, 1);
const b = fillArrayWithRandom(5, 10, 1);

alert(`First array : ${a}\nSecond array: ${b}`);

alert(union(a,b));
alert(intersection(a,b));
alert(difference(a,b));

/**
 * Implements difference of sets
 * @param   {[]} arr1
 * @param   {[]} arr2
 * @returns {[]}
 */
function difference(arr1, arr2) {

  const res = [];

  for (let i = 0; i < arr1.length; ++i) {
    if (!arr2.includes(arr1[i])) {
      res.push(arr1[i]);
    }
  }

  return res;

}

/**
 * Implements intersection of sets
 * @param   {[]} arr1
 * @param   {[]} arr2
 * @returns {[]}
 */
function intersection(arr1, arr2) {

  if (arr1.length > arr2.length) {
    [arr1, arr2] = [arr2, arr1];
  }

  const res = [];

  for (let i = 0; i < arr1.length; ++i) {
    if (arr2.includes(arr1[i])) {
      res.push(arr1[i]);
    }
  }

  return res;

}

/**
 * Implements union of sets
 * @param   {[]} arr1
 * @param   {[]} arr2
 * @returns {[]}
 */
function union(arr1, arr2) {

  const concatArr = arr1.concat(arr2);
  const res = [];

  for (let i = 0; i < concatArr.length; ++i) {
    if (!res.includes(concatArr[i])) {
      res.push(concatArr[i]);
    }
  }

  return res;
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

