"use strict";
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const sArray = s.split("");
  let isValided;
  for (let i = 0; i < sArray.length; i++) {
    for (let rep = 0; rep < sArray.length; rep++) {
      isValided = sArray[i] === "(" && sArray[rep] === ")" && true;
    }

    return isValided;
  }
};

console.log(isValid("(){}[]"));
