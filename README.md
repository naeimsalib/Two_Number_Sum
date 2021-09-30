# Two_Number_Sum
The Idea here is, to write a function that takes Two Arguments,<br />
 1)First Argument an Array of Numbers <br />
 2) Second arrgument is an Integer targetSum<br />
Find Two Numbers in the Array that When You add them up, You get The Integer targetSum <br />
if no numbers found that match the targetSum, then return an Emplty String

# Two_Number_Sum_Method1.js
  First I created an Object Called numbers, and it will hold a value Boolean Key to an Index,<br />
  then I Created a Variable Called PotintialMatch,<br />
  Here potintialMatch changes depending on each number in the Array<br />
  and checks if the PotintialMatch Is found in the array<br />
  If found, then Return [potintialMatch, Number];
  Else if not found Then Assign true to numbers[number], and move to the next Value<br />
  if the Array Reaches the end and doesn't find a match, it just returns an empty array.<br />
  ***Here the Time complicity of this Method is O(N) Times , and O(n) Space , WHere n is the size of the array.***<br />
<br />

# Two_Number_Sum_Method2.js
 for Method two , I created Two variables(left, right) , the first one is equal to Zero, <br />
 and the second one is equal to the last Element of the array (array.length-1). <br />
 ![Two_Number_Sum_Method1](https://user-images.githubusercontent.com/11530670/135513929-76da12c2-a2d9-486b-b2f8-3554b7dfc755.png)

 Inside a while Loop That chackes if (left < right)<br />
  then we check if left + right is equal to targetSum<br />
   if yes, return both left and right, <br />
  if not equal , Checks if (right + left) < target <br />
    then add 1 to left , if not add one to right<br />
    and here what is doing and moving both pointers towards the middle of he array, untill it find the answer<br />
      ***Here the Time complicity of this Method is O(nlog(n)) Times , and O(1) Space , WHere n is the size of the array.***<br />
    
