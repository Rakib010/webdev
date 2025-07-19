/* Task-1
Access the golden rod color value in output. */

const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};

// console.log(colors["golden rod"]);

/* Task-2
For this object below add a property named passenger capacity with value 5 */

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car.passengerCapacity = 5;

// console.log(car);

/* Task-3
Display the physics marks as output. */

const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};

// console.log(student.physics.marks);

/* Task-4
Count the number of properties. */
// Input:

let students = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
let c = 0;
for (const cunt in students) {
  // console.log(cunt);
  c++;
}
// console.log(c);

/* Task-5 (Hard)
Loop through an object and print the key-value pairs with their types
Input:let myObject = {
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
}; 
Output:
key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean*/

const person = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

Object.entries(person).forEach(([key, value]) => {
  console.log(`key: ${key} | type: ${typeof value}`);
});

const obj = { name: "Eras", age: 21, profession: "Student" };

/* for (let key in obj) {
    if (obj.hasOwnProperty(key)) {  // Check if the key belongs to the object itself
        console.log(`${key}: ${obj[key]}`);
    }
} */


