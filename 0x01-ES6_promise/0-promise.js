// 0-promise.js

/**
 * Returns a resolved Promise.
 * @returns {Promise} A resolved Promise object.
 */
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('Success'); // Explicitly resolving the Promise for demonstration purposes
  });
}

// Exporting the function to be used in other files
export default getResponseFromAPI;
