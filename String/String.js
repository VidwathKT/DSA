const str = "   Hello, JavaScript World!   ";

// Accessing Characters
console.log("Character at index 4:", str.charAt(4));
console.log("Character code at index 4:", str.charCodeAt(4));
console.log("String length:", str.length);

// Searching and Extracting
console.log("Index of 'JavaScript':", str.indexOf("JavaScript"));
console.log("Last index of 'o':", str.lastIndexOf("o"));
console.log("Includes 'World':", str.includes("World"));
console.log("Starts with 'Hello':", str.startsWith("Hello"));
console.log("Ends with 'World!':", str.endsWith("World!"));

// Extracting Parts of the String
console.log("Slice (7 to 17):", str.slice(7, 17));
console.log("Substring (7 to 17):", str.substring(7, 17));
console.log("Substr (7, 10):", str.substr(7, 10));

// Modifying Case
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

// Trimming
console.log("Trimmed:", str.trim());
console.log("Trimmed Start:", str.trimStart());
console.log("Trimmed End:", str.trimEnd());

// Padding
const paddedStr = "5";
console.log("PadStart:", paddedStr.padStart(3, "0")); // "005"
console.log("PadEnd:", paddedStr.padEnd(3, "0"));     // "500"

// Replacing and Splitting
console.log("Replace 'JavaScript' with 'JS':", str.replace("JavaScript", "JS"));
console.log("Replace all 'o's:", str.replace(/o/g, "O"));
console.log("Split by space:", str.split(" "));

// Concatenating
const str2 = " Let's learn!";
console.log("Concatenated:", str.concat(str2));

// Repeat
console.log("Repeated string:", str.repeat(2));

// Template Literal Example
const name = "Alice";
console.log(`Hello, ${name}! Welcome to JavaScript.`);

// Accessing Unicode Values
console.log("Code point of character at index 1:", str.codePointAt(1));
