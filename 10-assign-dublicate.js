function duplicateCharCount(str) {
    let charCount = {};
    let duplicateChars = {};

    // Count the occurrence of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Find and print duplicate characters
    for (let char in charCount) {
        if (charCount[char] > 1) {
            duplicateChars[char] = charCount[char];
            console.log(`${char} - ${charCount[char]}`);
        }
    }
}

// Test the function
console.log(`The dublicate character in banana`);
duplicateCharCount("Banana");
console.log(`The dublicate character in apple `);
duplicateCharCount("Apple");
console.log(`The dublicate character in software developer`);
duplicateCharCount("Software Developer");