#### Javascript (Advanced)
### Concepts

## What is Lexical Scoping in Javascript?
Lexical Scoping is how a parser resolves variable names when functions are nested.

## What is "closure" in Javascript?
A closure is the combination of a function and the lexical environment within which the function was declared.

## How do you use closures
Closures can be used anywhere you might normally use an object with a single method. You can also emulate private methods by using closures.

## How to chain different closures
When the outer function is itself a nested function access to the outer functions scope includes the enclosing scope of the outer functions.

```
// global scope
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

// You can also write without anonymous functions:

// global scope
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var sum2 = sum(1);
var sum3 = sum2(2);
var sum4 = sum3(3);
var result = sum4(4);
console.log(result) //log 20
```

## How to simulate private methods with closure

