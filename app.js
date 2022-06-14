console.log("Hello World!\n==========\n");

// Exercise 1

const numbers = [2, 22, 12, 17, 18, 39, 139];
    
function arraySum(arr) {
let sum = 0;

arr.forEach((number) => {
    sum += number;
});  
    return sum;

}

console.log(arraySum(numbers));
console.log(arraySum([1, 2, 3, 4, 5]));




// Exercise 2

let favBook = {};

favBook.title = "The Hobbit";
favBook.author = "J.R.R Tolkien";
favBook.pageCount = 295
favBook. readCount = 3

console.log(favBook);

favBook.info = function () {
return `${this.titel} by ${this.author} is ${this.pageCount} page(s) and has been read ${this.readCount} time(s).`

}



// Exercise 3

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
    let words = sentence.split("");
    for (let i = 0; i < words.length; i++) {

  
    console.log(words[i]);
}

}
reverseWords(sentence);

// Exercise 4

let headers = data.slice(0, data.indexOf("\n")).split(",");

let valueList = data.slic(data.indexOf("\n") + 1).split("\n");

const output = valuesList.map((row) => {
    let values = row.split(",");
    let obj = {};

    values.forEach((value, idx) => {
        if (idx < headers.length) {
            obj[headers[idx]] = value;
        } else {
            obj[`misc${idx}`] = value;
        }
    
})









