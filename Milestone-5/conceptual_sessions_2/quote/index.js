//

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },

  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote: "What you do today can improve all your tomorrows.",
    author: "Ralph Marston",
  },

  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },

  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },

  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
];

document.getElementById("quote").addEventListener("click", function () {
  const p = document.getElementById("quote-p");
  const h1 = document.getElementById("name");

  const random = Math.floor(Math.random() * quotes.length);

  p.innerText = quotes[random].quote;

  h1.innerText = quotes[random].author;
});
