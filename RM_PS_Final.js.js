// 01. Solve Me First
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var solveMeFirst = function(a, b) {
    return a + b;
};

// 02. Multiply

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var multiply = function(a, b) {
    return a * b;
};

// 03. Even or Odd

/**
 * @param {number} number
 * @return {string}
 */
var evenOrOdd = function(number) {
    return number % 2 === 0 ? "Even" : "Odd";
};

// 04. Return Negative

/**
 * @param {number} number
 * @return {number}
 */
var makeNegative = function(number) {
    return -Math.abs(number);
};

// 05. Opposite Number

/**
 * @param {number} number
 * @return {number}
 */
var opposite = function(number) {
    return -number;
};

// 06. Simple Array Sum

/**
 * @param {number[]} ar
 * @return {number}
 */
var simpleArraySum = function(ar) {
    return ar.reduce((sum, current) => sum + current, 0);
};

// 07. sleepIn

/**
 * @param {boolean} weekday
 * @param {boolean} vacation
 * @return {boolean}
 */
var sleepIn = function(weekday, vacation) {
    return !weekday || vacation;
};

// 08. monkeyTrouble

/**
 * @param {boolean} aSmile
 * @param {boolean} bSmile
 * @return {boolean}
 */
var monkeyTrouble = function(aSmile, bSmile) {
    return aSmile === bSmile;
};

// 09. sumDouble

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var sumDouble = function(a, b) {
    return a === b ? (a + b) * 2 : a + b;
};

// 10. diff21

/**
 * @param {number} n
 * @return {number}
 */
var diff21 = function(n) {
    return n <= 21 ? 21 - n : (n - 21) * 2;
};

// 11. parrotTrouble

/**
* @param {boolean} talking
* @param {number} hour
* @return {boolean}
*/
var parrotTrouble = function(talking, hour) {
  return talking && (hour < 7 || hour > 20);
};

// 12. makes10

/**
* @param {number} a
* @param {number} b
* @return {boolean}
*/
var makes10 = function(a, b) {
  return a === 10 || b === 10 || (a + b) === 10;
};

// 13. nearHundred

/**
* @param {number} n
* @return {boolean}
*/
var nearHundred = function(n) {
  return (Math.abs(100 - n) <= 10) || (Math.abs(200 - n) <= 10);
};

// 14. posNeg

/**
* @param {number} a
* @param {number} b
* @param {boolean} negative
* @return {boolean}
*/
var posNeg = function(a, b, negative) {
  if (negative) {
    return a < 0 && b < 0;
  } else {
    return (a < 0 && b > 0) || (a > 0 && b < 0);
  }
};

// 15. notString

/**
* @param {string} str
* @return {string}
*/
var notString = function(str) {
  if (str.length >= 3 && str.substring(0, 3) === "not") {
    return str;
  }
  return "not " + str;
};

// 16. Compare the Triplets

/**
* @param {number[]} a
* @param {number[]} b
* @return {number[]}
*/
var compareTriplets = function(a, b) {
  let aliceScore = 0;
  let bobScore = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    } else if (a[i] < b[i]) {
      bobScore++;
    }
  }

  return [aliceScore, bobScore];
};

// 17. A Very Big Sum

/**
* @param {number[]} ar
* @return {number}
*/
var aVeryBigSum = function(ar) {
  return ar.reduce((sum, num) => sum + num, 0);
};

// 18. Staircase

/**
* @param {number} n
* @return {string}
*/
var staircase = function(n) {
  let lines = [];
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);
    lines.push(spaces + hashes);
  }
  return lines.join("\n");
};

// 19. Grading Students

/**
* @param {number[]} grades
* @return {number[]}
*/
var gradingStudents = function(grades) {
  return grades.map(grade => {
    if (grade < 38) {
      return grade;
    }
    let nextMultipleOf5 = Math.ceil(grade / 5) * 5;
    if (nextMultipleOf5 - grade < 3) {
      return nextMultipleOf5;
    }
    return grade;
  });
};

// 20. Time Conversion

/**
* @param {string} s
* @return {string}
*/
var timeConversion = function(s) {
  let period = s.slice(-2);
  let hours = parseInt(s.slice(0, 2), 10);
  let restOfTime = s.slice(2, 8);

  if (period === "AM") {
    if (hours === 12) {
      hours = 0;
    }
  } else {
    if (hours !== 12) {
      hours += 12;
    }
  }

  let formattedHours = String(hours).padStart(2, '0');
  return formattedHours + restOfTime;
};

// 21. String Repeat

/**
* @param {number} n
* @param {string} s
* @return {string}
*/
var repeatStr = function(n, s) {
  return s.repeat(n);
};

// 22. Reversed Strings

/**
* @param {string} str
* @return {string}
*/
var solution = function(str) {
  return str.split("").reverse().join("");
};

// 23. Sum of Positive

/**
* @param {number[]} arr
* @return {number}
*/
var positiveSum = function(arr) {
  return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
};

// 24. Grasshopper - Summation

/**
* @param {number} num
* @return {number}
*/
var summation = function(num) {
  return (num * (num + 1)) / 2;
};

// 25. Convert a Boolean to a String

/**
* @param {boolean} b
* @return {string}
*/
var booleanToString = function(b) {
  return String(b);
};