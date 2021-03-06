//=================1. Two Number Sum================================//
//**************SOLUTION 1************ */
//BRUTE FORSE APPROCH || TIME COMPLEXITY O(n^2) || SPACE COMPLEXITY O(1)
/* 
function twoNumberSum(array, targetSum) {
    // Write your code here.
      for (let i= 0; i < array.length - 1  ; i++ ){
           const first = array[i];
               for (let j = i + 1; j < array.length; j++ ){
                   const second = array[j];
                   if (first + second === targetSum){
                       return [first, second]
                   }
               }	     
         }
       return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
   */
  //**********SOLUTION 2********** */
  //HERE THIS USES THE HASHMAP|| TIME COMPLEXITY O(n)||SPACE COMPLEXITY O(n)
/* function twoNumberSum(array, targetSum) {
    // Write your code here.
   const nums={};
    for(const num of array){
      const match = targetSum - num;
      if(match in nums){
        return [match, num];
      }else{
        nums[num]= true;
      }
    }
    return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
   */
  //***********SOLUTION 3************* */
  // FIRST NEED TO SORT AN ARRAY THEN COMPAIRE LEFT AND RIGHT ELEMENT ||TIME COMPLEXITY O(nlog(n))||SPACE COMPLEXITY O(1)
  /* 
  function twoNumberSum(array, targetSum) {
    // Write your code here.
   array.sort((a, b) => a-b);
    let left =0; 
    let right = array.length - 1;
    while(left < right){
      let currSum = array[left] + array[right];
      if(currSum === targetSum) {
        return [array[left], array[right]];
      }else if(currSum < targetSum){
        left++;
      }else if(currSum >targetSum){
        right--;
      }
    }
   return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum; */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//==================2.VALIDATE SUBSEQUENCE ============================

//||TIME COMPLEXITY O(n)||SPACE COMPLEXITY O(1)
/* 
function isValidSubsequence(array, sequence) {
  // Write your code here.
  //created the index for both arrays
  let arrInd = 0, seqInd = 0;
  //loop will continue untill the while condition is will get true.
  while (arrInd < array.length && seqInd < sequence.length){
    //looking for the same value in the sequence
    if(array[arrInd] === sequence[seqInd]) 
      //If find the match it will increment the index of sequence
      seqInd+=1;
     // and increment the index of array any how to looking for match the value
      arrInd+=1; 
  }
  //checking for the length if it's equal to sequence it returns true, else false
  return seqInd === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence; 
*/

//******************* SOLUTION 2 **********************//
//||TIME COMPLEXITY O(n)||SPACE COMPLEXITY O(1)
/* function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqInd =0;
  for(let arr= 0; arr<array.length; arr++ ){
    if(seqInd === sequence.length) break;
    if(sequence[seqInd] === array[arr]) seqInd+=1
  }
  return seqInd === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence; 
*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=================3. Sorted Squared Array=============================//
//BRUTE FORCE ||TIME COMPLEXITY O(nlog(n)) & SPACE COMPLEXITY O(n)
/* 
function sortedSquaredArray(array) {
  // Write your code here.
const sqare =[];
  for(let i=0; i<array.length; i++){
    let sqr = array[i] * array[i];
    sqare.push(sqr);
  }
  
  return sqare.sort((a,b)=>a-b);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
 */
//**************SOLUTION 2**************** */
//||TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(n)
/* ALGORITHM :
- TAKE SMALLER VALUE =0; AND LARGER =LEN -1 AND CREATED ONE SORTED[] TO STORE SQUARE.
- REVERSE THE FOR LOOP FOR Array.
- THEN STORE LEFTVAL AS ARRAY INDEX 1 AND RIGHTVAL ARRAY INDEX LAST VALUE.
- THEN CHECK THE CONDITION TAKING ABSOLUTE VALUE IF LEFTVAL IS GREATER THAN RIGHTVAL.
- IF IT'S TRUE THEN ADD LEFTVAL SQUARE TO THE SORTED ARRAY[IDX] AND SMALLER++.
- ELSE ADD RIGHTVAL SQUARE TO THE SORTED ARRAY[IDX] AND LARGER--.
- IN THE END PRINT THE RESULT OF SORTED ARRAY.  */

/* function sortedSquaredArray(array) {
  // Write your code here.
  const sortedArr= [];
  let smaller = 0;
  let larger= array.length - 1;
  
  for (let idx = array.length - 1; idx >= 0; idx--){
    
    const leftval = array[smaller];  //smaller value
    const rightval = array[larger]; //larger value
    
    if (Math.abs(leftval) > Math.abs(rightval)) {
     sortedArr[idx]= leftval * leftval;
      smaller++;
    }else 
    {
      sortedArr[idx]= rightval*rightval;
      larger--;
    }
}
  return sortedArr;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray; 
 */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//===================4. TOURNAMENT WINNER===================================
//||TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(K) - Where n is the number of competitions and k is the number of team.
/* ALGORITHM: 
-First assign the current best point team first.
-Create hashmap to store the team and key for points and assign 0 to the current best team so we can compare it with next one.
-Then the result also have same length so we assign the index of results array to result variable.
- Here we assigned the hometeam and wayteam to the index of competitions [0[0, 1]]
- This will assign winningteam if the result is 1 homeTeam else if the result 0 then awayTeam.
- Use the helper function to stores the points to the key with the team in hashmap
- checking the condition if the currentTeam is greater or small and update the team which has highest points.
 */

/* 
function tournamentWinner(competitions, results) {
  // Write your code here.

  let currentBestTeam ='';
   const scores ={[currentBestTeam] : 0};
     for(let i=0; i<competitions.length; i++){
       let result =results[i];
       let [homeTeam, awayTeam] =competitions[i];
   
       let winningTeam = result === 1 ? homeTeam : awayTeam;
       updateScore(winningTeam, 3, scores)
       if(scores[winningTeam] > scores[currentBestTeam]){
      currentBestTeam = winningTeam;
      }
  } 
  return currentBestTeam;
}

function updateScore(team, point, scores) {
  if(!(team in scores)) scores[team] =0;
  scores[team] += point;  
}
// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
 */


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//=======================5. Non Constructible Change =============================================//
//||TIME COMPLEXITY O(n log(n)) & SPACE COMPLEXITY O(1)
/*ALGORITHM:  
 - First sort the array.
 - Assign the currentChange 0 value
 - if the current coin is greater than the curentChange+1 it returns currentChange+1
 - Else it add coin value to the currentChange. 
 - Then return the currentChange+1;
 */
/* 
function nonConstructibleChange(coins) {
  // Write your code here.
 
  coins.sort((a, b) => a - b);
 
let currentChange = 0;
  
  for(let c=0; c<coins.length; c++){
   
    if(coins[c] > currentChange + 1) return currentChange + 1;
      currentChange += coins[c];  
  }
   return currentChange + 1; 
}
// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//===============6.Find the closest value in BST ===========================//
//||TIME COMPLEXITY O(log(n)) & SPACE COMPLEXITY O(n)
/*
Algorithm:  
- FIRST INITIALIZE CLOSEST VALUE AND ADD THE CURRENT NODE VALUE OF THE TREE TO IT.
- THEN WE HAVE TO CALCULATE THE ABSOLUTE DIFFRENCE BETWEEN THE CURRENT NODE VALUE WITH THE TARGET VALUE |TARGET - CLOSESTNODE.VLAUE|.
- AND COMPARE THE DIFFRENCE IF IT SMALLER THAN THE ABSOLUTE DIFFERENCE OF THE |CLOSEST - TARGET| IF THE IT'S TRUE THEN UPDATE CLOSEST WITH THE CURRENT NODE.
- COMPARE THIS CLOSEST WITH THE TARGET VALUE IF CURRENTNODE IS SMALL THAN THE TARGET THEN MOVE TO THE RIGHT NODES.
- IF THE CURRENTNODE IS GREATER THE TARGET VALUE THE MOVE TO THE LEFT NODES.
- NOW REPEATE THE PROCESS 1- 4 UNTILL WE GET THE CLOSEST NODE AND THEN RETURN CLOSEST. 
 */
//******************SOLUTION 1******************** */
/* function findClosestValueInBst(tree, target) {
  // Write your code here.
//This is a helper function
  return findclosestValueHelper(tree, target, tree.value);
}
 function findclosestValueHelper(tree, target, closest){
   if(tree === null) return closest;
   
   if(Math.abs(target - closest) > Math.abs(target - tree.value )){
     closest = tree.value;  
   } 
    if(tree.value < target ){
     return findclosestValueHelper(tree.right, target, closest);
   }else if(tree.value > target ){
     return findclosestValueHelper(tree.left, target, closest);
   }
   else {
     return closest;
   }
 }

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
 */
//*******************SOLUTION 2******************* */
/* function findClosestValueInBst(tree, target) {
  // Write your code here.
 return findclosestValueHelper(tree, target, tree.value);
}
function findclosestValueHelper(tree, target, closest){
  let closestNode = tree;
  while (closestNode !== null){
  if(Math.abs(target -closest) > Math.abs(target - closestNode.value)){
    closest =closestNode.value;
   }
  if(closestNode.value > target){
    closestNode = closestNode.left;
   }else if(closestNode.value < target){
   closestNode =closestNode.right;
   }else{
    break;
   }
  }
return closest;
  
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//====================7. BRANCH SUM =====================================//
//||TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(n)
/*ALGORITHMS:  
- CREATE A EMPTY ARRAY TO ADD SUMS
- CALL HELPER FUNCTION IN MAIN  & RETURN SUMS 
- IN THE HELPER FUNCTION TAKE 3 PARAMETERS ROOT , RUNNING SUM =0, AND SUMS
- CREATE A VARIABLE NEWRUNNIGSUM TO STORE THE VALUE OF RUNNINGSUM + NODE.VALUE
- THEN CHECK THE CONDITION FOR CHILD NODE IF THE NODE.LEFT AND NODE.RIGHT IS EMPTY(NULL) THEN PUSH THE NEWRUNNNING SUM TO THE SUMS ARRAY
- RETURN VLAUE
- THEN REPEATE THIS FOR 
    sumOfBranches(node.left, newRunningSum, sums)
    sumOfBranches(node.right, newRunningSum, sums)
 */

// This is the class of the input root.
// Do not edit it.
/* class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
let sums = [];
  sumOfBranches(root, 0, sums);
  return sums;
  
}

function sumOfBranches(node, runningSum, sums){
  if( node === null) return;
const newRunningSum = runningSum + node.value;
  if(node.left === null && node.right === null){
    sums.push(newRunningSum);
      return;
  }

    sumOfBranches(node.left, newRunningSum, sums)
    sumOfBranches(node.right, newRunningSum, sums)
  }

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
 */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//=====================8.NODE DEPTHS : CALCULATION OF THE NODE LEVEL ==================//
//||TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(h)
/*ALGORITHM:  
- WE ARE CALLING THE RECURSIVE FUNCTION OF THE ORIGIONAL ONE
- WE ADDED DEPTH TO THE MAIN FUNCTION AND ASSIGN 0 TO IT AS ROOT HAS NO LEVEL 
- THEN WE ARE ADDING THE RIGHT NODE AND THE LEFT NODE DEPTH TO IT AND RETURNING TOTAL OF THE DEPTH.
 */
//Recursive algorithm way.
/* function nodeDepths(root, depth = 0) {
  // Write your code here.

  if(!root) return 0;
  return depth + nodeDepths(root.left, depth+1) + nodeDepths(root.right, depth+1);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths; 
*/
//***************SOLUTION 2*********************/
//ITERATIVE WAY OF THE ALGO
/* function nodeDepths(root) {
  // Write your code here.
 let sumOfDepth=0;
  const stack=[{node: root, depth:0}];
  while(stack.length > 0){
    const {node, depth} =stack.pop();
    if(node === null) continue;
    sumOfDepth += depth;
    stack.push({node:node.left, depth: depth + 1});
     stack.push({node:node.right, depth: depth + 1});
  }
  return sumOfDepth;
}
// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//======================= 9.DEPTH-FIRST SEARCH ====================================//
//||TIME COMPLEXITY O(V + E) & SPACE COMPLEXITY O(V) where V = VERTEX OF TREE & E = EDGES OF THE TREE.
/* 
ALGORITHM: 
- WE HAVE TO VISIT THE DEPTH VALUE OF THE LEFT SIDE CHILDRESN FIRST
- WHEN THE LEFT CHILD IS NULL THEN IT TRAVERSE TRHOUGH THE RIGHT CHILDS
- IT REPEAT THE PROCESS UNTILL THE ALL THE CHILD VISITED.
- In the code first pushing the name value to the array.
- Then looping through the childerns value.
- Then using the child value we running the DFS function (recursively) on the child value
- In last we are returning the array of the DFS.
 */
/* class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
// MAIN CODE IS HERE
  depthFirstSearch(array) {
    // Write your code here.
  //First push the name value to the array
    array.push(this.name);
    //go through the for loop for getting childerns value
    for(const child of this.children){
      //then run the DFS on the child value
      child.depthFirstSearch(array)
    }
    // return the array of the output
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node; */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//===================== 10. MINIMUM WAITING TIME ===================================//
//||TIME COMPLEXITY O(nlog(n)) & SPACE COMPLEXITY O(1) 
/*
ALGORITHM: 
-  
 */
/* function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a,b) => a - b);
  
 let  minWaitTime =0;
  
  for(let i =0; i< queries.length; i++){
  const duration = queries[i];
  const leftQueries =queries.length - ( i + 1);
    minWaitTime += duration * leftQueries;
    console.log(minWaitTime);
  }
  return minWaitTime;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime; */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//======================11.CLASS-PHOTO ===================================//
//||TIME COMPLEXITY O(nlog(n)) & SPACE COMPLEXITY O(1) 
/*
ALGORITHM: 
- FIRST WE NEED TO SORT ARRAY IN DECENDING ORDER.
- THEN CREATE THE VARIABLE TO STORE THE TOPHEIGHT THEN COMPARE THE 1ST ELEMEN TFROM THE BOTH ARRAY AND RETURN THE TOP ELEMENT WITH OUTPUT OF IT'S COLOR.
- THEN LOOP THROUGH THE INDEXES AS BOTH ARRAY HAS SAME VALUES WE NEED TO LOOP ON ONLY ONE ARRAY.
- CHECK THE CONDITION IF THE TOPHEIGHT IS EQUAL TO THE ="COLOR ANY BLUE/RED " THE CHECK CONDITION IFR FIRST ARRAY IS >= TO SECOND THEN RETURN FALSE;
- AND CHECK OF THE SECOND ARRAY >= FIRST ARRAY ALSO RETURN FLASE
- IF OUR ARRANGEMNT IS RIGHT THEN SIMPLY RETURN TRUE AT END
-  
 */

/* function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights.sort((a,b)=> b - a);
   blueShirtHeights.sort((a,b)=> b - a);
const topHeight =  redShirtHeights[0] > blueShirtHeights[0] ? 'RED' : 'BLUE';
  
  for(let idx =0; idx < redShirtHeights.length; idx++){
    if(topHeight === 'BLUE'){
      if(redShirtHeights[idx]>= blueShirtHeights[idx])
        return false;
      }else  if(blueShirtHeights[idx] >= redShirtHeights[idx])
        return false;
       }
    
  return true;
} 
*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//========================== 12.TANDEM BICYCLE ===============================//
//||TIME COMPLEXITY O(nlog(n)) & SPACE COMPLEXITY O(1) 
/* 
ALGORITHM:
- FIRST WE NEED TO SORT BLUESHIRT ARRAY IN THE REVERSE ORDER.
- THEN WE CHECK IF THE FASTEST IS FALSE THEN WE SORT REDSHIRT ARRAY IN DECENDING ORDER TO GET THE LOWEST TOTAL
- ELSE WE SORT THE REDSHIRT ARRAY IN THE ASSENDING ORDER.
- THNE CRATE VERIABLE TO STORE THE TOTALSPEED AND RUN THE FOR LOOP FOR ITERATING THE VALUES
-THEN WE ADD THE VALUE WHICH ONE IS THE MAX FRIOM THE REDSHIRT OR BLUESHIRT.
- IN LAST RESTUR TOTTALSPEED
 */
/* function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  blueShirtSpeeds.sort((a,b)=> b - a);
  
  if(!fastest){
    redShirtSpeeds.sort((a,b)=> b - a); 
  }else {
    redShirtSpeeds.sort((a,b)=> a - b);
  }
let totalSpeed=0;
  for(let i=0; i<blueShirtSpeeds.length; i++){
    totalSpeed +=Math.max(redShirtSpeeds[i],  blueShirtSpeeds[i]);
  }
  return totalSpeed;
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;

 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=======================13.REMOVE DUPLICATES FROM THE LINKED-LIST ================================//
//||TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(1) 
/*
ALGORITHM:
- FIRST WE NEED TO CREATE THE CURRRENTNODE VARIABLE TO STORE OUR HEAD NODE.
- THEN  CHECK CONDITION IF THE CURRENTNODE IS NOT NULL IS TRUE THEN WE ASSIGN THE NEXTDISTNODE = CURRENTNODE.NEXT VALUE;
- THEN WHILE LOOP FOR THE NEXTDIST IS NOT NULL AND IF IT'S VALUE IS EQUAL TO THE CURRENTNODE VALUE.
- IT IT'S TRUE THEN WE MOVE OUR NEXTDIST NODE TO THE NEXT OF THE NEXTDISTNODE = NEXTDISTNODE.NEXT
- AND THEN IN FINALLY WE MOVE OUR POINT TO THE OUR "CURRENTNODE.NEXT" TO THE NEXTDISTNODE AND "CURRENTNODE" = NEXTDISTNODE.

- WE ARE NOT GETTING ANY O(N^2) TIME BECAUSE WE AREN'T REPEATATING THE VALUE ACTUALLY WE ARE ELIMENATING THOSE.

 */
/* // This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let currentNode =linkedList;
  while(currentNode!== null){
    let nextDistNode = currentNode.next; 
    while(nextDistNode !== null && nextDistNode.value === currentNode.value ){
      nextDistNode = nextDistNode.next;
    }

    currentNode.next = nextDistNode;
    currentNode = nextDistNode;
  }
  return linkedList;
  
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
 */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//=====================14. NTH FIBONACCI ==========================================
//||TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(1) 
/* 
ALGORITHM:
- FIRST WE NEED TO CREATE AN ARRAY TO STORE FIRST TWO NUMBER 0 AND 1 
- THEN CREATE COUNTER VARIABLE AND ASSIGN IT 3
- DO THE WHILE LOOP UNTILL THE COUNTER <= N VALUE
- IN THE WHILE LOOP ADD THE FORMULA TO CREATE NEW FIB NUMBER AND THEN DO THE SWAPPING FIRST NUMBER GONNA REMOVE 2ND NUMBER MOVE PLACE TO FIRST AND NEW FIB NUMBER ON THE SECOND PLACE OF THE ARRAY INDEX[1]
- THEN INCREASE THE COUNTER BY 1 AND RETURN THE VALUE OF LASTTWO [1] IF THE NUMBER IS GREATER THAN 1
*/
/* 
function getNthFib(n) {
  // Write your code here.
  let lastTwo =[0, 1];
  let Counter = 3;
  while(Counter <= n){
    nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] =nextFib;
    Counter += 1;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//=========================15. PRODUCT SUM [ARRAY IN THE ARRAY]====================================//
//TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(d), Where  n is the total number of element in the array 
//including sub-element, and d is the greatest depth of the special array in the array.
/*
ALGORITHM:
- FIRST WE NEED TO ADD AN MULTIPLIER IN THE FUNCTION PARAMETER.
-THEN CREATE SUM VARIABLE TO STORE THE SUM.
- THEN RUN THE FOR LOOP TO ACCESSING THE ARRAY ELEMENT AND ADD IF THE ELEMENT IS ARRAY OR NOT.
- IF THE ELEMENT IS THE ARRAY THEN CALL RESURSIVE FUNCTION AND ADD TO THE SUM.
- ELSE ADD ELEMENT TOT THE SUM AND END RETURN THE SUM * MULTIPLIER. 
 */

/* // Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, multiplier=1) {
  // Write your code here.
  let sum = 0;
  for (const element of array){
    if(Array.isArray(element)){
      sum += productSum(element, multiplier + 1)
    }else{
      sum += element;
    }
  }
  return sum * multiplier;
}

// Do not edit the line below.
exports.productSum = productSum;
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//====================16. BINARY SEARCH ==============================//
/*
ALGORITHM: 
- FOR THE BINARY SEARCH ARRAY ALWAYS SHOULD BE SORTED.
- THE WE ASSIGN THE FIRST VALUE LEFT AND LAST IS RIGHT.
- THEN TAKE MIDDLE VALUE BYE THE FORMULA USING (LEFT + RIGHT / 2) 
- THEN CHECK IS THE MIDDLE VALUE IS SAME AS THE TARGET VALUE IF IT'S SAME THE JUST O/P THE INDEX OF MIDDLE
- ELSE IF THE MIDDLE VALUE IS GREATER THAN THE TARGET WE NEED TO ERASE ALL RIGHT ELEMENT AND THE  ADD RIGHT = MIDDLE - 1
- ELSE IF THE MIDDLE VALUE IS SMALLER THAN THE TARGET VALUE THEN WE NEED TO ERASE ALL THE LEFT VALUE AND ASSIGN LEFT = MIDDLE + 1
- RETURN THE HELPER FUNCTION IN MAIN. 
 */

//***********SOLUTION 1******************** */
//TIME COMPLEXITY O(log(n)) & SPACE COMPLEXITY O(log(n))
/* function binarySearch(array, target) {
  // Write your code here.
  return binarySearchHelper(array, target, 0, array.length-1);
}
function binarySearchHelper(array, target, left, right){
  if(left > right)  return -1;
  let middle = Math.floor((left+right) / 2);
  if(array[middle] ===  target){
    return middle;
  }else if(array[middle] > target){
    return binarySearchHelper(array, target, left, middle -1);
  }else{
    return binarySearchHelper(array, target, middle +1, right);
  }
}
// Do not edit the line below.
exports.binarySearch = binarySearch;
 */
//**************SOLUTION 2********************* */
//TIME COMPLEXITY O(log(n)) & SPACE COMPLEXITY O(1)
/* function binarySearch(array, target) {
  // Write your code here.
 return binarySearchHelper(array, target, 0, array.length-1);
}

function binarySearchHelper(array, target, left, right){
  while(left <= right){
    const middle = Math.floor((left + right) / 2);
    if(array[middle] === target){
      return middle;
    }else if(target < array[middle]){
      right = middle - 1;
    }else{
      left = middle + 1;
    }
  }
  return -1;
}
// Do not edit the line below.
exports.binarySearch = binarySearch; 
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//=====================17. FINDTHREE LARGEST NUMBERS ===================================//
////TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(1)
/*
ALGORITHM:
- FIRST WE NEED TO CREATE AN ARRAY TO STORE THE LARGEST NUMBER AND ASSIGN INTIAL NULL TO ALL THREE.
- IN THE HELPER FUNCTION WE HAVE TO PARAMETER ONE IS THE THREELASRGEST ARRAY AND PASSED ELEMENT OF ARRAY.
- THEN CHECK IF THE LARGEST INDEX VALUE IS NULL OR GREATER THAN THE CURRENT ARRAY ELEMNTS IF ONE OF THE CONDITION IS TRUE THEN CALL ANOTHER HELPER FUNCTION TO SHIF ARRAY ELEMENT OF THE LARGESTTHREE.
- REPEAT PREVIOUS SAME PROCEDURE FOR THE INDEX 1 AND INDEX 0 ALSO.
- THEN IN THE 2ND HELPER FUCNTION WE SHIFT THE ELEMENT CHECKING THE VALUE OF THE ARRAY OF THREELARGEST NUMS.   
 */
/* function findThreeLargestNumbers(array) {
  // Write your code here.
let threeLargest= [null, null, null];
  for(let num of array){
    updateArray(threeLargest, num);
  }
  return threeLargest;
}

function  updateArray(threeLargest, num){
  if(threeLargest[2] === null || num > threeLargest[2]){
  shiftLargest(threeLargest, num, 2);
  } else if(threeLargest[1] === null || num > threeLargest[1]){
    shiftLargest(threeLargest, num , 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]){
    shiftLargest(threeLargest, num, 0);
  }
}

function shiftLargest(array, num, idx){
  for(let i =0; i<= idx; i++){
    if(i === idx) return array[i] = num;
    else
      array[i]= array[i+1];
  }
}
// Do not edit the line below.

exports.findThreeLargestNumbers = findThreeLargestNumbers; 
*/
//******************* SOLUTION 2 EASY:**************************//
/* function findThreeLargestNumbers(array) {
  // Write your code here.
  //Time complexity(log(n)) Space Complexity O(1).
  array.sort((a, b) => a-b); 
  return array.slice(-3);
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
 */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//=====================18. BUBBLE SORT ================================//
//Best: TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(1)
//Average: TIME COMPLEXITY O(n^2) & SPACE COMPLEXITY O(1)
//Worst: TIME COMPLEXITY O(n^2) & SPACE COMPLEXITY O(1)
/* 
function bubbleSort(array) {
  // Write your code here.
let isSorted = false;
  let counter =0;
  while (!isSorted){
    isSorted =true;
    for(let i = 0; i< array.length - 1 - counter; i++ ){
      if(array[i] > array[i+1]){
        swapArr(i, i + 1, array);
        isSorted = false;
      }
    }
     counter++;
  }
  return array;
}

function swapArr(i, j, array){
  let temp = array[i];
  array[i] =array[j];
  array[j] = temp;
  
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//====================19. ====================================//