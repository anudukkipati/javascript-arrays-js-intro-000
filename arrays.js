var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  array = [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
}
function addElementToEndOfArray(array, element) {
  array = [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
}
function accessElementInArray(array, index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  return array.shift(element);
}
function removeElementFromBeginningOfArray(array) {
  array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
}
function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1);
}
