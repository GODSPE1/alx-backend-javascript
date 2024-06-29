export default function appendToEachArrayValue(array, appendString) {
  const arr = []
  for (const [idx, value] of array.entries()) {
    const value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
