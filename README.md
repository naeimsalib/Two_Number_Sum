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
