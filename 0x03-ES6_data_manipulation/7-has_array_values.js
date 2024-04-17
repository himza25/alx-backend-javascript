export default function hasValuesFromArray(set, myArray) {
  for (const item of myArray) if (!set.has(item)) return false;
  return true;
}
