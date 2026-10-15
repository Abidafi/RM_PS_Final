# Remontada Problem Solving Task-1

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

To solve this, you can use the modulo operator (%) to check if the number is divisible by 2. If the remainder is 0, the number is even; otherwise, it is odd.

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

To solve this, you can ensure the number is negative by using Math.abs() to get its absolute value and then negating it, or by checking if it's already negative.

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

To solve this, you can check if n is less than or equal to 21. If it is, return the difference (21 - n). If it's greater than 21, return double the absolute difference ((n - 21) * 2).

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


