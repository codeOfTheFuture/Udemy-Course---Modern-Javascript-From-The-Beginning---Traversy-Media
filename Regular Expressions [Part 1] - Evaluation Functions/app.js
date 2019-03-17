let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

console.log(re);
console.log(re.source);

// exec() - Returns result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Return true or false if there is a match
// const result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first match and if not found returns -1
// const str = 'Jeff Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Returns a new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);