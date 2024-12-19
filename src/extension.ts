
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let DataEncapsulation = vscode.commands.registerCommand('closures-toolkit.dataEncapsulation', () => {
		const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }
		const { document, selection } = editor;
		const position = selection.active;
        const documentation = dataEncapsulation();
		editor.edit(editBuilder => {
            editBuilder.insert(position, documentation);
        });
	});
	let EventHandlers = vscode.commands.registerCommand('closures-toolkit.eventHandlers', () => {
		const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }
		const { document, selection } = editor;
		const position = selection.active;
        const documentation = eventHandlers();
		editor.edit(editBuilder => {
            editBuilder.insert(position, documentation);
        });
	});
	let ModulesCurrying = vscode.commands.registerCommand('closures-toolkit.modulesCurrying', () => {
		const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }
		const { document, selection } = editor;
		const position = selection.active;
        const documentation = modulesCurrying();
		editor.edit(editBuilder => {
            editBuilder.insert(position, documentation);
        });
	});
	let Memoization = vscode.commands.registerCommand('closures-toolkit.memoization', () => {
		const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }
		const { document, selection } = editor;
		const position = selection.active;
        const documentation = memoization();
		editor.edit(editBuilder => {
            editBuilder.insert(position, documentation);
        });
	});
	let PartialApplication = vscode.commands.registerCommand('closures-toolkit.partialApplication', () => {
		const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }
		const { document, selection } = editor;
		const position = selection.active;
        const documentation = partialApplication();
		editor.edit(editBuilder => {
            editBuilder.insert(position, documentation);
        });
	});
	let Namespaces = vscode.commands.registerCommand('closures-toolkit.namespaces', () => {
		const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }
		const { document, selection } = editor;
		const position = selection.active;
        const documentation = namespaces();
		editor.edit(editBuilder => {
            editBuilder.insert(position, documentation);
        });
	});
	let IteratorsGenerator = vscode.commands.registerCommand('closures-toolkit.iteratorsGenerator', () => {
		const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }
		const { document, selection } = editor;
		const position = selection.active;
        const documentation = iteratorsGenerators();
		editor.edit(editBuilder => {
            editBuilder.insert(position, documentation);
        });
	});
	let ModuleAugmentation = vscode.commands.registerCommand('closures-toolkit.moduleAugmentation', () => {
		const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }
		const { document, selection } = editor;
		const position = selection.active;
        const documentation = moduleAugmentation();
		editor.edit(editBuilder => {
            editBuilder.insert(position, documentation);
        });
	});
	let DebouncingThrottling = vscode.commands.registerCommand('closures-toolkit.debouncingThrottling', () => {
		const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }
		const { document, selection } = editor;
		const position = selection.active;
        const documentation = debouncingThrottling();
		editor.edit(editBuilder => {
            editBuilder.insert(position, documentation);
        });
	});

	
	context.subscriptions.push(Memoization);
	context.subscriptions.push(ModulesCurrying);
	context.subscriptions.push(DataEncapsulation);
	context.subscriptions.push(EventHandlers);
	context.subscriptions.push(PartialApplication);
	context.subscriptions.push(Namespaces);
	context.subscriptions.push(IteratorsGenerator);
	context.subscriptions.push(ModuleAugmentation);
	context.subscriptions.push(DebouncingThrottling);
}

export function deactivate() {}

function dataEncapsulation(): string {
        return `
		/**
		 * Data encapsulation and private variables
		 * This allows us to create a function that has access to private data, effectively encapsulating that data and preventing unintended modification from external code
		 * FunctionName
		 * @param {Type} paramName Description of the parameter.
		 * @returns {Type} Description of the return value.
		 */
		function FunctionName() {
			let paramName = 0;
		  
			function increment() {
			  paramName++;
			  return paramName;
			}
		  
			return increment;
		  }
		  
		  const object1 = FunctionName();
		  console.log(object1());
		  const object2 = FunctionName();
		  console.log(object2());
`;
};
function eventHandlers(): string {
        return `
		/**
		 * Event handlers with preserved state
		 * Creating an event handler function within another function that has access to relevant data, we can ensure the handler retains that data even after the outer function has executed.
		 * FunctionName
		 * @param {Type} paramName Description of the parameter.
		 * @returns {Type} Description of the return value.
		 */
		function createGreeter(name) {
			function greet() {
			  console.log("Hello, " + name + "!");
			}
		  
			return greet;
		  }
		  
		  const button1 = document.getElementById("button1");
		  const button2 = document.getElementById("button2");
		  
		  button1.addEventListener("click", createGreeter("Alice"));
		  button2.addEventListener("click", createGreeter("Bob"));
`;
}
function modulesCurrying(): string {
        return `
		/**
		 * Modules and function currying
		 * Module-like structure that groups functions and variables together while controlling their accessibility. Additionally, closures enable a technique called currying, which allows a function to accept its arguments in parts
		 * FunctionName
		 * @param {Type} paramName Description of the parameter.
		 * @returns {Type} Description of the return value.
		 */
		function createMathModule() {
			const PI = 3.14159;
		  
			function add(a, b) {
			  return a + b;
			}
		  
			function multiply(a, b) {
			  return a * b;
			}
		  
			// Function currying example: create a function for calculating area of a circle
			function circleArea(radius) {
			  return function(multiplier = 1) { // Default multiplier of 1 for area
				return PI * Math.pow(radius, 2) * multiplier;
			  }
			}
		  
			return {
			  add,
			  multiply,
			  circleArea,
			};
		  }
		  
		  const mathModule = createMathModule();
		  
		  console.log(mathModule.add(2, 3)); // Output: 5
		  console.log(mathModule.multiply(4, 5)); // Output: 20
		  
		  const circleAreaCalculator = mathModule.circleArea(5);
		  console.log(circleAreaCalculator()); // Output: 78.53975 (area)
		  console.log(circleAreaCalculator(2)); // Output: 157.0795 (circumference with multiplier 2)
		  
`;
}
function memoization(): string {
        return `
		/**
		 * Memoization
		 * Module-like structure that groups functions and variables together while controlling their accessibility. Additionally, closures enable a technique called currying, which allows a function to accept its arguments in parts
		 * FunctionName
		 * @param {Type} paramName Description of the parameter.
		 * @returns {Type} Description of the return value.
		 */
		function fibonacciMemoized(n) {
			const cache = {};
		  
			function fibonacci(n) {
			  if (n === 0 || n === 1) {
				return n;
			  }
		  
			  if (cache[n]) {
				return cache[n];
			  }
		  
			  const result = fibonacci(n - 1) + fibonacci(n - 2);
			  cache[n] = result;
			  return result;
			}
		  
			return fibonacci(n);
		  }
		  
		  console.log(fibonacciMemoized(5)); // Output: 5 (calculated and stored in cache)
		  console.log(fibonacciMemoized(5));
		  console.log(circleAreaCalculator(2)); // Output: 157.0795 (circumference with multiplier 2)
		  
`;
}
function partialApplication(): string {
	return `
	/**
	 * Partial application
	 * Partial application is a technique where a function with multiple arguments is converted into a sequence of functions, each taking a single argument. This allows us to pre-set some arguments of a function while leaving others open for later invocation
	 * FunctionName
	 * @param {Type} paramName Description of the parameter.
	 * @returns {Type} Description of the return value.
	*/
	function formatMoney(prefix = "$", precision = 2) {
		return function(number) {
			return prefix + number.toFixed(precision);
		}
	}
	
	const usdFormatter = formatMoney("$", 2);
	const eurFormatter = formatMoney("€", 3);
	
	console.log(usdFormatter(123.456)); // Output: $123.46
	console.log(eurFormatter(789.0123)); // Output: €789.012
	
	`;
}
function namespaces(): string {
		return `
		/**
		 * Namespaces and avoiding variable collisions
		 * Closures provide a mechanism to create private namespaces, effectively isolating variables and functions within a specific scope.
		 * FunctionName
		 * @param {Type} paramName Description of the parameter.
		 * @returns {Type} Description of the return value.
		 */
		function createNamespace(name) {
			const namespace = {};
		  
			function addToNamespace(key, value) {
			  namespace[key] = value;
			}
		  
			return {
			  addToNamespace,
			  // Functions or variables specific to the namespace can be added here
			  greet: function() {
				console.log("Hello from " + name + " namespace!");
			  }
			};
		  }
		  
		  const mathNamespace = createNamespace("Math");
		  mathNamespace.addToNamespace("PI", 3.14159);
		  
		  const utilNamespace = createNamespace("Util");
		  utilNamespace.addToNamespace("formatDate", function(date) {
			// Date formatting logic here
		  });
		  
		  mathNamespace.greet(); // Output: Hello from Math namespace!
		  // console.log(mathNamespace.PI); // Would cause an error as PI is private
		  
		  utilNamespace.formatDate(new Date()); // Calls the date formatting function
		  
`;
}
function iteratorsGenerators(): string {
		return `
		/**
		 * Iterators and generators
		 * Iterators provide a way to access elements of a collection one at a time, while generators are functions that can pause execution and yield values on demand
		 * FunctionName
		 * @param {Type} paramName Description of the parameter.
		 * @returns {Type} Description of the return value.
		 */
		function createNumberIterator(start, end) {
			let current = start - 1;
		  
			function next() {
			  current++;
			  if (current <= end) {
				return { value: current, done: false };
			  } else {
				return { done: true };
			  }
			}
		  
			return {
			  next,
			};
		  }
		  
		  const numberIterator = createNumberIterator(1, 5);
		  
		  console.log(numberIterator.next()); // Output: { value: 1, done: false }
		  console.log(numberIterator.next()); // Output: { value: 2, done: false }
		  // ... call next() repeatedly to iterate through numbers
		  
		  // Generator function example (similar concept with yield)
		  function* generatePrimes(max) {
			let num = 2;
			while (num <= max) {
			  yield num;
			  num++;
			  // Prime number checking logic here (simplified for brevity)
			}
		  }
		  
		  const primeGenerator = generatePrimes(10);
		  
		  console.log(primeGenerator.next()); // Output: { value: 2, done: false }
		  console.log(primeGenerator.next()); // Output: { value: 3, done: false }
		  // ... call next() repeatedly to get prime numbers
		  
`;
}
function moduleAugmentation(): string {
		return `
		/**
		 * Module augmentation
		 * we want to extend the functionality of an existing module without modifying its original code. Closures come in handy for this purpose, enabling a technique called module augmentation
		 * // Original module (mathModule.js)
		export function add(a, b) {
		  return a + b;
		}
		
		export function subtract(a, b) {
		  return a - b;
		}
		 * FunctionName
		 * @param {Type} paramName Description of the parameter.
		 * @returns {Type} Description of the return value.
		 */
		import * as math from "./mathModule.js";

		function multiply(a, b) {
		  return a * b;
		}
		
		// Augment the math module by adding the multiply function within a closure
		(function(math) {
		  math.multiply = multiply;
		})(math);
		
		console.log(math.add(5, 3)); // Output: 8 (from original module)
		console.log(math.multiply(4, 2)); // Output: 8 (added functionality)
		
		// Original mathModule.js remains unchanged
		  
`;
}
function debouncingThrottling(): string {
		return `
		/**
		 * Debouncing and throttling user input
		 * Closures are instrumental in implementing techniques like debouncing and throttling to optimize performance and prevent unintended behavior.

		Debouncing delays the execution of a function until a certain amount of time has passed since the last call. This is useful for scenarios like search bars where we only want to trigger a search after the user finishes typing, not after every keystroke.
		
		Throttling limits the execution of a function to a specific number of times within a given time interval. This is helpful for preventing excessive function calls during rapid user actions, like resizing a window or scrolling a large list.
		 * FunctionName
		 * @param {Type} paramName Description of the parameter.
		 * @returns {Type} Description of the return value.
		 */
		function debounce(func, delay) {
			let timeout;
		  
			return function(...args) {
			  clearTimeout(timeout);
			  timeout = setTimeout(() => {
				func.apply(this, args);
			  }, delay);
			};
		  }
		  
		  const searchInput = document.getElementById("searchInput");
		  
		  const debouncedSearch = debounce(function(searchTerm) {
			console.log("Search for:", searchTerm);
		  }, 500); // Delay execution by 500ms after last keystroke
		  
		  searchInput.addEventListener("keyup", function(event) {
			debouncedSearch(event.target.value);
		  });
		  
`;
}