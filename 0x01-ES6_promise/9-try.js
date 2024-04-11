// 9-try.js

export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Attempt to execute mathFunction and push its return value to the queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // If an error occurs, push the error message to the queue
    queue.push(error.toString());
  } finally {
    // Regardless of the outcome, add "Guardrail was processed" to the queue
    queue.push('Guardrail was processed');
  }

  return queue;
}
