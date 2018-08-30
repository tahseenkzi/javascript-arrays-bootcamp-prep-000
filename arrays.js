

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ... array];
}


function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  return [array,...element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.slice(-2);
}






addElementToBeginningOfArray(array, 'foo');
destructivelyAddElementToBeginningOfArray(array, 'foo');

addElementToEndOfArray(array, 'foo');
destructivelyAddElementToEndOfArray(array, 'foo');

accessElementInArray(array, 2);

destructivelyRemoveElementFromBeginningOfArray()








