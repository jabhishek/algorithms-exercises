/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  let shouldCheck = true;
  let count = 0;

  while (shouldCheck && count < 10) {
    shouldCheck = false;
    for (let i = 0; i < nums.length - 1; i++) {
      const num0 = nums[i];
      const num1 = nums[i + 1];

      if (num0 > num1) {
        nums[i] = num1;
        nums[i + 1] = num0;

        shouldCheck = true;
      }
    }

    count++;
  }

  return nums;
}

// unit tests
// do not modify the below code
test.only("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
