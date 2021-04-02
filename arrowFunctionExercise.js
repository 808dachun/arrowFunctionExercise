ES 5 Call Back

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

ES 2015 Arrow Function Shorthand

const double = arr => arr.map(val => val * 2);


//Refactor

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

// Refactored

const squareAndFindEvens = arr => numbers.map( num ** 2)
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

Solution

const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)