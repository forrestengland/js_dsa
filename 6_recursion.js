/* recursion */

function countdown(num) {
    console.log(num);
    if (!num) return; // base case - num === 0
    else countdown(num-1);
}

// countdown(10);

function factorial(num) {
    if (num === 1) { // base case
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// console.log(factorial(5)); // 120

const fs = require('fs');
const path = require('path');

function printTree(dirPath, prefix) {

    try {
        // Read all files and folders in the current directory
        const items = fs.readdirSync(dirPath);

        items.forEach((item, index) => {
            
            const itemPath = path.join(dirPath, item);
            const isLast = index === items.length - 1;
            
            console.log(`${prefix}/${item}`);

            // Check if the current item is a directory
            if (fs.statSync(itemPath).isDirectory()) {
                // Extend the prefix for the next nested level
                printTree(itemPath, `${prefix}/${item}`);
            }
        });
    } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error.message);
    }
}

// Example usage: Pass the directory you want to scan
// Use process.argv[2] to take a path from the command line, or default to current directory ('.')
const targetDir = process.argv[2] || '.';
console.log(path.basename(path.resolve(targetDir)));
printTree(targetDir, targetDir);
