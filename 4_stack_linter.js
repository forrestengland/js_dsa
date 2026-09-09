/* linter using a stack implemented as an array
   to warn about mismatched parenthesis
   and braces */

class Linter {

    constructor() {
	this.stack = [];
    }

    lint(text) {

	console.log(`linting "${text}"`);
	
	for (let i=0; i<text.length; i++) {
	    if (text[i] === '(' || text[i] === '{'
		|| text[i] === '[') {

//		console.log(`pushing ${text[i]}`);
		this.stack.push(text[i]);
		
	    } else if (text[i] === ')' || text[i] === '}'
		       || text[i] === ']') {

		if ((this.stack[this.stack.length-1] === '[' &&
		     text[i] === ']') || 
		    (this.stack[this.stack.length-1] === '{' &&
		     text[i] === '}') ||
		    (this.stack[this.stack.length-1] === '(' &&
		     text[i] === ')')) {
//		    console.log(`popping ${this.stack[this.stack.length-1]}`);
		    this.stack.pop();
		} else {
		    console.log(`Incorrect closing brace: ${text[i]} at index ${i}, stack top has ${this.stack[this.stack.length-1]}`);
		    return;
		}
	    }
	}
	if (this.stack.length) {
	    console.log(`${this.stack[this.stack.length-1]} has no closing brace}`);
	}
    }
}

let linter = new Linter();
linter.lint("( var x = { y: [1, 2, 3] } )");
linter.lint("( var x = { y: [1, 2, 3] ) }");
linter.lint("( var x = { y: [1, 2, 3] }");

