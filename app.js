console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers) {
  let sum = 0;
  numbers.forEach((number, index) => {
    sum += number;
  });
  return sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {};

book.title = "Name of the Wind";

book.pages = 722;

book.readCount = 5;

book.info = function () {
  return `${this.title}, ${this.pages} pages, read ${this.readCount} times.`;
};

console.log(book.info());
