export default function appendToEachArrayValue(array, appendString) {
    for (const [idx, value] of array.entries()) {
      array[idx] = array[idx] + appendString;
    }
  
    return array;
  }