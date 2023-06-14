function geoMean(nums, arith_mean) {
    let summary = 0;
    for(let i = 0; i < nums.length; i++) {
        summary += nums[i]
    }
    const x = arith_mean * (nums.length+1) - summary;
    nums.push(x);

    let multi = 1;
    for(let i = 0; i < nums.length; i++) {
        multi *= nums[i];
    }
    const geometricMean = multi ** (1/nums.length);

    return geometricMean;
}

const result = geoMean([4, 6, 7, 2], 5)
console.log(result);