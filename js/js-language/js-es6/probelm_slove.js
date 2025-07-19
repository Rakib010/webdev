// displays a msg after 5s
/* function displayMegs() {
  console.log("Hello");
}
setTimeout(displayMegs, 5000);

// takes two parameter
function delayedGreeting(name, delayTime) {
  setInterval(() => {
    console.log(`Hello, ${name}`);
  }, delayTime);
}
delayedGreeting("alice", 2000);
 */
//
/* function tellJoke() {
  console.log(
    "why don't scientists trust atoms? Because they make up everything!"
  );
}
const jokeInterval = setInterval(tellJoke, 2000);

setTimeout(() => {
  clearInterval(jokeInterval);
},20000);

 */

async function apiMessage() {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?type==single"
  );
  const data = await res.json();
  console.log(data);
}
