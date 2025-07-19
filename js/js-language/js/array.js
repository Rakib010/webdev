const arr =[12,14,15,13,25];
console.log(arr.length);

const cars = ['volvo', 'bmw', 'honda','lamborghini']
console.log(cars[3]);

cars[2] = 'prime';
console.log(cars);

cars.push('Porsche');
cars.push('ninja');
console.log(cars);

cars.pop();
console.log(cars);
cars.pop()
console.log(cars);

cars.shift()  // pop first element
console.log(cars);

cars.unshift('newcars') // insert first element
console.log(cars);

const friends = ['balam', 'kalam', 'salam', 'gelam','pailam'];

console.log(friends);
console.log(friends.includes('pailam')); // check this name includes the array

console.log(friends.indexOf('balam')); 

console.log(Array.isArray(friends)); //check is it array?


console.log(friends.join(' and ')); // ekta array print por and print hobe

console.log(friends.slice(2,4)); // cut to array
console.log()