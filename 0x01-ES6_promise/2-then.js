// 2-then.js

/**
 * Handles responses from an API promise.
 * @param {Promise} promise - The promise to handle.
 * @returns {Promise} A promise that resolves with an object or rejects with an empty Error.
 */
function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      return new Error();
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
