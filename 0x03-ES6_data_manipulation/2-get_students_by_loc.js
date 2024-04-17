export default function getStudentsByLocation(arrayOfObjects, location) {
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }
  return arrayOfObjects.filter((item) => item.location === location);
}
