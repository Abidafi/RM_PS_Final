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

// 26. Palindrome Number

/**
* @param {number} x
* @return {boolean}
*/
var isPalindrome = function(x) {
  let str = x.toString();
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

// 27. Fizz Buzz

/**
* @param {number} n
* @return {string[]}
*/
var fizzBuzz = function(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }
  return result;
};

// 28. Running Sum of 1d Array

/**
* @param {number[]} nums
* @return {number[]}
*/
var runningSum = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};

// 29. Richest Customer Wealth

/**
* @param {number[][]} accounts
* @return {number}
*/
var maximumWealth = function(accounts) {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let currentWealth = accounts[i].reduce((sum, num) => sum + num, 0);
    if (currentWealth > maxWealth) {
      maxWealth = currentWealth;
    }
  }
  return maxWealth;
};

// 30. Number of Steps to Reduce a Number to Zero

/**
* @param {number} num
* @return {number}
*/
var numberOfSteps = function(num) {
  let steps = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    steps++;
  }
  return steps;
};

// 31. Two Sum

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};

// 32. Remove Duplicates from Sorted Array

/**
* @param {number[]} nums
* @return {number}
*/
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

// 33. Contains Duplicate

/**
* @param {number[]} nums
* @return {boolean}
*/
var containsDuplicate = function(nums) {
  let set = new Set(nums);
  return set.size !== nums.length;
};

// 34. Move Zeroes

/**
* @param {number[]} nums
* @return {void}
*/
var moveZeroes = function(nums) {
  let insertPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }
  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// 35. Merge Sorted Array

/**
* @param {number[]} nums1
* @param {number} m
* @param {number[]} nums2
* @param {number} n
* @return {void}
*/
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
};

// 36. 3Sum

/**
* @param {number[]} nums
* @return {number[][]}
*/
var threeSum = function(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let l = i + 1;
    let r = nums.length - 1;
    
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return res;
};

// 37. Plus One

/**
* @param {number[]} digits
* @return {number[]}
*/
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

// 38. Reverse String

/**
* @param {string[]} s
* @return {void}
*/
var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    
    left++;
    right--;
  }
};

// 39. Length of Last Word

/**
* @param {string} s
* @return {number}
*/
var lengthOfLastWord = function(s) {
  let i = s.length - 1;
  let length = 0;

  // Skip trailing spaces if any
  while (i >= 0 && s[i] === ' ') {
    i--;
  }

  // Count characters of the last word
  while (i >= 0 && s[i] !== ' ') {
    length++;
    i--;
  }

  return length;
};

// 40. Longest Common Prefix

/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  
  let prefix = strs[0];
  
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  
  return prefix;
};

// 41. Find the Index of the First Occurrence in a String

/**
* @param {string} haystack
* @param {string} needle
* @return {number}
*/
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};

// 42. Valid Anagram

/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  
  let count = {};
  
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  
  for (let char of t) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }
  
  return true;
};

// 43. Is Subsequence

/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
var isSubsequence = function(s, t) {
  let i = 0;
  let j = 0;
  
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  
  return i === s.length;
};

// 44. First Unique Character in a String

/**
* @param {string} s
* @return {number}
*/
var firstUniqChar = function(s) {
  let count = {};
  
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) {
      return i;
    }
  }
  
  return -1;
};

// 45. Valid Parentheses

/**
* @param {string} s
* @return {boolean}
*/
var isValid = function(s) {
  let stack = [];
  let map = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      let topElement = stack.pop();
      if (topElement !== map[char]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
};

// 46. Best Time to Buy and Sell Stock

/**
* @param {number[]} prices
* @return {number}
*/
var maxProfit = function(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  
  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }
  
  return maxProfit;
};

// 47. Majority Element

/**
* @param {number[]} nums
* @return {number}
*/
var majorityElement = function(nums) {
  let count = 0;
  let candidate = null;
  
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }
  
  return candidate;
};

// 48. Single Number

/**
* @param {number[]} nums
* @return {number}
*/
var singleNumber = function(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
};

// 49. Search Insert Position

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return left;
};

// 50. Climbing Stairs

/**
* @param {number} n
* @return {number}
*/
var climbStairs = function(n) {
  if (n <= 2) return n;
  
  let prev1 = 2; // ways to reach step 2
  let prev2 = 1; // ways to reach step 1
  let current = 0;
  
  for (let i = 3; i <= n; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  
  return current;
};