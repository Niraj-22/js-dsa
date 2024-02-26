const truncate = (str, n) => {
  if (str.length < n) return str;
  else {
    return str.slice(0, n) + "...";
  }
};

const hammingDistance = (x, y) => {
  x = x.toString(2);
  y = y.toString(2);
  if (x.length < y.length) {
    while (x.length != y.length) x = "0" + x;
  } else {
    while (x.length != y.length) y = "0" + y;
  }
  let distance = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] != y[i]) {
      distance++;
    }
  }
  return distance;
};

const isAnagram = (a, b) => {
  if (a.length != b.length) return false;
  else {
    return a.split("").sort().join("") === b.split("").sort().join("");
  }
};

const linearSearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (target == nums[i]) return i;
  }
  return -1;
};

const binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (target === nums[middle]) {
      return middle;
    } else if (target > nums[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

const kPositiveNum = (arr, k) => {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] <= k + count) {
      count++;
    }
  }
  return k + count;
};
console.log(kPositiveNum([2, 5, 6, 7, 8, 9], 3));
