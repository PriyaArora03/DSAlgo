var removeDuplicates = function(nums) {
    var slow = 0;
    for (var fast = 0; fast < nums.length; fast++) {
        if (nums[slow] !== nums[fast]) {
            nums[++slow] = nums[fast];
        }
    }
    return slow+1;
};

let result = removeDuplicates([1,1,2,2,4,4,5,6,6])
console.log("result is", result)