// reverse a string

const str = "Hello";
const revstr = str.split('').reverse().join('');
console.log("Reverse a string", revstr);

// palindrome

const num = "121";
const revnum = num.split('').reverse().join('');
if (num == revnum) {
    console.log("This is a palindrome");
}
else {
    console.log("This is not a palindrome");
}


//largest in array

const arr = [1, 5, 36, 3, 7, 3, 6];
const larg = arr.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
});
console.log("Largest number: ", larg);

// count num of vowels

const nam = "This is a sample sentence";
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let count = 0;
for (let i = 0; i < nam.length; i++) {
    if (vowels.includes(nam[i])) {
        count++;

    }
}
console.log("count of the vowels", count);


//factorial

const n = 3;
let fac = 1;
for (let i = 1; i <= n; i++) {
    fac *= i;
}
console.log("Factorial of a number", fac);

//prime number

const k = 3;
let isprime = true;
for (let i = 2; i < k; i++) {
    if (k % i === 0) {
        isprime = false;
        break;
    }
}
if (isprime) {
    console.log(k, "is a prime number")
}
else {
    console.log(k, "it is not a prime number")
}

// duplicates of an array

const array = [61, 39, 48, 92, 48, 38, 61, 63, 92];
let arr1 = [];

for (let i = 0; i < array.length; i++) {
    if (!arr1.includes(array[i])) {
        arr1.push(array[i]);
    }
}
console.log(arr1);

// sum of array

const arr2 = [73, 598, 373, 875, 274];
let sum;
let reduce = arr2.reduce((a, b) =>
    sum = a + b, 0
);
console.log(sum, "sum od array elements");


//fibonacci

let c = 5;
let n1 = 0;
let n2 = 1;
let fib;
console.log(n1);
console.log(n2);
for (let i = 2; i < c; i++) {
    fib = n1 + n2;
    console.log(fib);
    n1 = n2;
    n2 = fib;
}

//first non repeating
const char = "mummy";
let rev;

for (let i = 0; i < char.length; i++) {
    let unique = true;

    for (let j = i + 1; j < char.length; j++) {
        if (char[i] === char[j]) {
            unique = false;
            break;
        }
    }

    if (unique) {
        rev = char[i];
        break;
    }

}
console.log(rev);







