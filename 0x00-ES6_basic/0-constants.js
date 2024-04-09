#!/usr/bin/node
// Use `const` for variables that won't be reassigned
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Keep this function as is, since it doesn't involve variable declarations that need to be modified
export function getLast() {
  return ' is okay';
}

// Use `let` for variables that might be reassigned
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
