/**
 * @Problem : https://leetcode.com/problems/4sum/
 */

var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const k = 4; // number elements you wants to consider. Here 4 because problem says fourSum
  return kSum(nums, target, k);
};

var kSum = function (nums, target, k) {
  const result = [];

  if (
    nums.length === 0 ||
    nums[0] * k > target ||
    nums[nums.length - 1] * k < target
  ) {
    return result;
  }

  if (k === 2) {
    return twoSum(nums, target);
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      for (const subset of kSum(nums.slice(i + 1), target - nums[i], k - 1)) {
        result.push([...subset, nums[i]]);
      }
    }
  }

  return result;
};

// Approach 1: Two Pointers
// var twoSum = function (nums, target) {
//   let low = 0;
//   let high = nums.length - 1;
//   let result = [];
//   while (low < high) {
//     const sum = nums[low] + nums[high];
//     if (sum < target || (low > 0 && nums[low] === nums[low - 1])) {
//       low++;
//     } else if (
//       sum > target ||
//       (high < nums.length - 1 && nums[high] === nums[high + 1])
//     ) {
//       high--;
//     } else {
//       result.push([nums[low], nums[high]]);
//       low++;
//       high--;
//     }
//   }
//   return result;
// };

// Approach 2: Hash Set
var twoSum = function (nums, target) {
  const set = new Set();
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!result.length || result[result.length - 1][1] !== nums[i]) {
      if (set.has(target - nums[i])) {
        result.push([target - nums[i], nums[i]]);
      }
      set.add(nums[i]);
    }
  }
  return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
