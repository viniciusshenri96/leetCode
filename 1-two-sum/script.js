"use strict";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let rep = 1; rep < nums.length; rep++) {
      const sum = nums[i] + nums[rep];
      if (sum === target && i < rep) {
        const [...newArray] = [i, rep];
        return newArray;
      }
    }
  }
};

const newArray = twoSum([3, 3, 5, 5], 10);
console.log(newArray);
