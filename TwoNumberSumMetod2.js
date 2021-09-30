// Naeim Salib
// Time O(nlog(n)).
// Space O(1).

function twoNumberSum(array, targetSum) {
	array.sort((a,b) => a-b);
	let left = 0;
	let right = array.length - 1;
	while(left < right){
		const currentSum = array[left] + array[right];
		if(currentSum === targetSum){
			return [array[left], array[right]];
		} else if (currentSum < targetSum){
			left ++
		} else if(currentSum > targetSum){
			right --;
		}
	}
	return [];
}

const newArray = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;
console.log(twoNumberSum(newArray,targetSum));
