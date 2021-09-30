//Naeim Salib
// Find two Numbers to Sum to a target Sum.

// Time O(n).
// Space O(n)

function twoNumberSum(array, targetSum) {
  const numbers = {};
  for(const number of array){
    const potentialMatch = targetSum - number;
    if(potentialMatch in numbers){
      return [potentialMatch, number];
    } else {
      numbers[number] = true;
    }
  }
	return [];
}

const newArray = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;
console.log(twoNumberSum(newArray,targetSum));
