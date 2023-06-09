/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set1 = new Set()
    for(let i=0; i<nums.length; i++){
        if ( set1.has(nums[i] )) return true
        set1.add(nums[i])
    }
    return false
};


// double for loop uses less data
var containsDuplicate = (nums) => {
    for (let right = 0; right < nums.length; right++) {/* Time O(N) */
        for (let left = 0; left < right; left++) {         /* Time O(N) */
            const isDuplicate = nums[left] === nums[right];
            if (isDuplicate) return true;
        }
    }

    return false;
}