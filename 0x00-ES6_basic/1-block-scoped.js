export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  /* eslint-disable no-unused-vars */
  if (trueOrFalse) {
    const task = true; // Block-scoped to the if statement, doesn't affect the outer `task`
    const task2 = false; // Block-scoped to the if statement, doesn't affect the outer `task2`
  }

  return [task, task2];
}
