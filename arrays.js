

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ... array];
}


function destructivelyAddElementToBeginningOfArray(array, element){
  retarray.unshift(element);
}

function addElementToEndOfArray(array, element){
  const moreArray = [array, ...element]
  return moreArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element);
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








