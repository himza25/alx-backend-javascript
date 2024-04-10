// 1-promise.js

/**
 * Returns a promise that either resolves or rejects based on the input parameter.
 * @param {boolean} success - Determines whether to resolve or reject the promise.
 * @returns {Promise} A promise that resolves with an object if `success` is true, or rejects with an error if `success` is false.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
