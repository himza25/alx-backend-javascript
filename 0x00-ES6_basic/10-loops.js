export default function appendToEachArrayValue(array, appendString) {
  const array0 = [];
  for (const idx of array) {
    array0.push(appendString + idx);
  }
  return array0;
}
