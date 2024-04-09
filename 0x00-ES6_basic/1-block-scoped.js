#!/usr/bin/node
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task = true; // This `task` is block-scoped to the if statement
    let task2 = false; // This `task2` is also block-scoped to the if statement
  }

  return [task, task2];
}
