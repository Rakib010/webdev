/* Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.
Output:
Print the result.

Sample Input:
1000
700

Sample Output:
300 */

const ownMoney = 1000;
const cost = 700;

const total = ownMoney - cost;
console.log(total);

/* Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04 */

const Mathematics = 75.25;
const Biology = 65;
const Chemistry = 80;
const Physics = 35.45;
const Bangla =99.50

const totalMarks = (Mathematics + Biology + Chemistry + Physics + Bangla)/5;

console.log(totalMarks.toFixed(2));Node



/* Task-3
You task is to divide the given number by 5 and show the remainder as the output.

Input:
The first line of the input contains the number.

Output:
Print the remainder.

Sample Input:
119
Sample Output:
4 */

const number = 119;
let given = 5;
 
let divide = 119 % 5;  

console.log(divide);

/* Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers. */

var a = '11'
console.log(a);
