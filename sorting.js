const nums = [4, 2, 5, 6, 1, 77, 3, 6, 7, 2, 3];
const bubbleSort = (nums) => {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
};
const selectionSort = (nums) => {
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
  return nums;
};
const insertionSort = (nums) => {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }
  return nums;
};
const kthMaxNum = (nums, k) => {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};

const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = mergeSort(nums.slice(0, mid));
  let right = mergeSort(nums.slice(mid));
  return merge(left, right);
};
const merge = (left, right) => {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sortedArr.push(right.shift());
    } else {
      sortedArr.push(left.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
};

const quickSort = (nums) => {
  if (nums.length <= 1) {
    return nums;
  }
  let pivot = nums[0];
  let left = [];
  let right = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};
