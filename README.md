# Remontada Final Problem Solving Task

## 01. Solve Me First

To solve the "Solve Me First" problem, we need to return the sum of the two input numbers, a and b, using the addition operator (+).

Here is the complete solution:

```javascript
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var solveMeFirst = function(a, b) {
    return a + b;
};
```
Explanation: 
 - a + b: Adds the two parameters together.

 - return: Sends the result back as the output of the function.

When we pass 2 and 3 as inputs, 2 + 3 evaluates to 5, which matches our expected output.

---

## 02. Multiply

To solve this, we need to return the product of the two input numbers, a and b, using the multiplication operator (*).

Here is the complete solution:

```javascript
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var multiply = function(a, b) {
    return a * b;
};
```
Explanation:
 - a * b: Multiplies the two parameters together.

 - return: Sends the resulting product back as the output of the function.

When we pass 4 and 5 as inputs, 4 * 5 evaluates to 20, matching our expected output.

---

## 03. Even or Odd

To solve this, we can use the modulo operator (%) to check if the number is divisible by 2. If the remainder is 0, the number is even; otherwise, it is odd.

Here is the complete solution:

```javascript
/**
 * @param {number} number
 * @return {string}
 */
var evenOrOdd = function(number) {
    return number % 2 === 0 ? "Even" : "Odd";
};
```
Explanation:
 - number % 2 === 0: Checks if dividing the number by 2 leaves no remainder.

 - Ternary Operator (? :): A shorthand for an if-else statement. If the condition is true, it returns "Even"; otherwise, it returns "Odd".

When we pass 7, 7 % 2 leaves a remainder of 1, so it evaluates to "Odd", matching our expected output.

---

## 04. Return Negative

To solve this, we can ensure the number is negative by using Math.abs() to get its absolute value and then negating it, or by checking if it's already negative.

Here is the complete solution:

```javascript
/**
 * @param {number} number
 * @return {number}
 */
var makeNegative = function(number) {
    return -Math.abs(number);
};
```
Explanation:
 - Math.abs(number): Converts the number to its positive value (e.g., -8 becomes 8, and 8 stays 8).

 - -: Negates the absolute value, ensuring the final output is always less than or equal to zero.

When we pass 8, Math.abs(8) is 8, and negating it gives -8, matching our expected output. (This also correctly handles numbers that are already negative, like -5, keeping them negative).

---

## 05. Opposite Number

To solve this, we need to return the negative (or additive inverse) of the number by placing a minus sign in front of it.

Here is the complete solution:

```javascript
/**
 * @param {number} number
 * @return {number}
 */
var opposite = function(number) {
    return -number;
};
```
Explanation:
 - -number: Reverses the sign of the number. If it's negative, it becomes positive; if it's positive, it becomes negative.

 - return: Sends the resulting opposite value back as the output.

When we pass -7, -(-7) evaluates to 7, matching our expected output.

---

## 06. Simple Array Sum

To solve this, we can use the JavaScript reduce() method to iterate through the array and accumulate the sum of all its elements.

Here is the complete solution:

```javascript
/**
 * @param {number[]} ar
 * @return {number}
 */
var simpleArraySum = function(ar) {
    return ar.reduce((sum, current) => sum + current, 0);
};
```
Explanation:
 - ar.reduce(): Iterates through the array, combining each element into a single accumulated value.

 - (sum, current) => sum + current: Adds each number in the array (current) to the running total (sum).

 - 0: The initial starting value for the sum.

When we pass [1, 2, 3, 4], it adds them up step by step (1 + 2 + 3 + 4) to get 10, matching our expected output.

---

## 07. sleepIn

To solve this, we can return true if it is not a weekday (meaning it's a weekend) or if we are on vacation. Otherwise, return false.

Here is the complete solution:

```javascript
/**
 * @param {boolean} weekday
 * @param {boolean} vacation
 * @return {boolean}
 */
var sleepIn = function(weekday, vacation) {
    return !weekday || vacation;
};
```

Explanation:
 - !weekday: Checks if it is not a weekday (i.e., a weekend).

 - ||: The logical "OR" operator. If either condition (it's a weekend, or we're on vacation) is true, we get to sleep in.

 - vacation: Checks if we are currently on vacation.

When we pass weekday: true and vacation: false, it is a weekday (!true becomes false) and we aren't on vacation (false), so false || false evaluates to false, matching our expected output.

---

## 08. monkeyTrouble

To solve this, we can return true if both monkeys are smiling or if neither of them is smiling. In logic, this is equivalent to checking if aSmile and bSmile are equal.

Here is the complete solution:

```javascript
/**
 * @param {boolean} aSmile
 * @param {boolean} bSmile
 * @return {boolean}
 */
var monkeyTrouble = function(aSmile, bSmile) {
    return aSmile === bSmile;
};
```
Explanation:

 - aSmile === bSmile: Checks if both boolean values are the same (either both true or both false). If they match, we are in trouble, so it returns true. If one is smiling and the other isn't, it returns false.

When we pass aSmile: true and bSmile: true, they match, so the function evaluates to true, matching our expected output.

---

## 09. sumDouble

To solve this, we can check if the two numbers are equal. If they are, return double their sum; otherwise, return their regular sum. 

Here is the complete solution:

```javascript
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var sumDouble = function(a, b) {
    return a === b ? (a + b) * 2 : a + b;
};
```

Explanation:
 - a === b: Checks if both input numbers are the same.

 - Ternary Operator (? :):

    - If the numbers are equal, it calculates the sum (a + b) and multiplies it by 2.

   - If the numbers are different, it simply returns the standard sum (a + b).

For example, if we pass 2 and 2, they are equal, so (2 + 2) * 2 evaluates to 8. If you pass 1 and 2, it evaluates to 3.

---

## 10. diff21

To solve this, we can check if n is less than or equal to 21. If it is, return the difference (21 - n). If it's greater than 21, return double the absolute difference ((n - 21) * 2).

Here is the complete solution:

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var diff21 = function(n) {
    return n <= 21 ? 21 - n : (n - 21) * 2;
};
```
Explanation:
 - n <= 21 ? 21 - n: If the number is 21 or less, it returns 21 - n.

 - : (n - 21) * 2: If the number is greater than 21, it calculates the difference and multiplies it by 2.

When we pass 25, it goes to the second condition: (25 - 21) * 2 evaluates to 4 * 2, which is 8, matching our expected output.

---

## 11. parrotTrouble

We have a problem where we are in trouble if the parrot is talking and the hour is before 7 or after 20.

Here is the complete solution:

```javascript
/**
 * @param {boolean} talking
 * @param {number} hour
 * @return {boolean}
 */
var parrotTrouble = function(talking, hour) {
  return talking && (hour < 7 || hour > 20);
};
```

Explanation:

 - talking: Ensures the parrot must be talking.

 - (hour < 7 || hour > 20): Checks if the hour is outside normal daytime hours (before 7 AM or after 8 PM).

---

## 12. makes10

Given two integers, We return true if one of them is 10 or if their sum is 10.

Here is the complete solution:

```javascript
/**
 * @param {number} a
 * @param {number} b
 * @return {boolean}
 */
var makes10 = function(a, b) {
  return a === 10 || b === 10 || (a + b) === 10;
};
```

Explanation:

 - a === 10 || b === 10: Checks if either number is 10.

 - (a + b) === 10: Checks if their combined sum equals 10.

---

## 13. nearHundred

Given an int n, return true if it is within 10 of 100 or 200.

Here is the complete solution:

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var nearHundred = function(n) {
  return (Math.abs(100 - n) <= 10) || (Math.abs(200 - n) <= 10);
};
```

Explanation:

 - Math.abs(100 - n) <= 10: Checks if the distance between 100 and n is 10 or less.

 - Math.abs(200 - n) <= 10: Checks if the distance between 200 and n is 10 or less.

---

## 14. posNeg

Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

Here is the complete solution:

```javascript
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
```

Explanation:

 - if (negative): If true, both numbers must be strictly less than 0.

 - else: One number must be negative and the other positive.

---

## 15. notString 

Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.

Here is the complete solution:

```javascript
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
```

Explanation:

 - str.substring(0, 3) === "not": Checks if the first 3 characters form the word "not".

 - "not " + str: Prepends "not " to the string if it doesn't already start with it.

---

## 16. Compare the Triplets 

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories. We need to compare their points.

Here is the complete solution:

```javascript
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
```

Explanation:

 - Loop through elements 0 to 2 to compare corresponding indices.

 - Increment Alice's score if a[i] > b[i], and Bob's score if a[i] < b[i].

---

## 17. A Very Big Sum 

In this challenge, we are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Here is the complete solution:

```javascript
/**
 * @param {number[]} ar
 * @return {number}
 */
var aVeryBigSum = function(ar) {
  return ar.reduce((sum, num) => sum + num, 0);
};
```

Explanation:

 - Uses reduce() to accumulate the total sum across all array items safely.

---

## 18. Staircase 

Consider a staircase of size n = 4. Its base and height are both equal to n. It is drawn using # symbols and spaces.

Here is the complete solution:

```javascript
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
```

Explanation:

 - " ".repeat(n - i): Generates the necessary padding spaces.

 - "#".repeat(i): Generates the correct number of hash characters per row.

---

## 19. Grading Students 

HackerUniversity has a grading policy where each student receives a grade from 0 to 100. Any grade less than 40 is a failing grade. Sam is a professor who rounds up grades based on specific rules.

Here is the complete solution:

```javascript
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
```

Explanation:

 - Grades below 38 are not rounded up since they remain failing.

 - Math.ceil(grade / 5) * 5: Finds the next multiple of 5. If the difference is less than 3, round up to that multiple.

---

## 20. Time Conversion 

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Here is the complete solution:

```javascript
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
```

Explanation:

 - Parses the AM/PM designator and hour value.

 - Adjusts 12 AM to 00 hours and adds 12 to PM hours (except 12 PM).

 - .padStart(2, '0'): Ensures single-digit hours are padded properly with a leading zero.

---

## 21. String Repeat 

In this problem statement; We write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Here is the complete solution:

```javascript
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function(n, s) {
  return s.repeat(n);
};
```

Explanation:

 - s.repeat(n): Built-in JavaScript method that repeats the string n times.

---

## 22. Reversed Strings 

Complete the solution so that it reverses the string passed into it.

Here is the complete solution:

```javascript
/**
 * @param {string} str
 * @return {string}
 */
var solution = function(str) {
  return str.split("").reverse().join("");
};
```

Explanation:

 - split(""): Splits the string into an array of characters.

 - reverse(): Reverses the array elements.

 - join(""): Joins the characters back together into a string.

---

## 23. Sum of Positive 

When we get an array of numbers, return the sum of all of the positives ones.

Here is the complete solution:

```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function(arr) {
  return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
};
```

Explanation:

 - reduce() checks if num > 0. If true, it adds it to the running sum; otherwise, it leaves the sum unchanged.

---

## 24. Grasshopper - Summation 

We are writing a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

Here is the complete solution:

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var summation = function(num) {
  return (num * (num + 1)) / 2;
};
```

Explanation:

 - Uses the standard mathematical formula for the sum of an arithmetic progression: n(n + 1) / 2.

---

## 25. Convert a Boolean to a String 

Implement a function which convert the given boolean value into its string representation.

Here is the complete solution:

```javascript
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function(b) {
  return String(b);
};
```

Explanation:

 - String(b): Safely converts the boolean value (true or false) into its literal string equivalent ("true" or "false").

---
