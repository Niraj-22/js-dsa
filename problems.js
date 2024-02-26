const removeDuplicates = (nums) => {
  if (nums.length == 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

const remove = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
};

const rotate = (nums, k) => {
  if (nums.length < k) {
    k = k % nums.length;
  }
  let temp = nums.splice(nums.length - k, nums.length);
  nums.unshift(...temp);
  return nums;
};
const maxSubArr = (nums) => {
  let sum = 0;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};
const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
const range = (start, end) => {
  if (end < start) {
    return [];
  } else {
    const num = range(start, end - 1);
    num.push(end);
    return num;
  }
};
const revstr = (str) => {
  if (str === "") return "";
  else {
    return revstr(str.substr(1)) + str.charAt(0);
  }
};
const rev = (n) => {
  return n.toString().split("").reverse().join("");
};

const subset = (nums) => {
  let result = [];
  let temp = [];

  const rec = (nums, i) => {
    if (i === nums.length) return result.push([...temp]);

    temp.push(nums[i]);
    rec(nums, i + 1);
    temp.pop();
    rec(nums, i + 1);
  };
  rec(nums, 0);
  return result;
};

// console.log(subset([1, 2]));
// console.log(rev(321));
// console.log(revstr("Hello"));
// console.log(range(2, 10));
// console.log(maxSubArr([5, 4, 3, -5, 6]));
// console.log(fib(10));
// console.log(remove([0, 0, 1, 2, 2, 4, 5, 5, 6, 6, 6, 7]));
// console.log(removeDuplicates([0, 0, 1, 2]));
// console.log(rotate([1, 2, 3, 4, 5, 6], 3));
