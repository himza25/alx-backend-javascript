// 0-promise.js

/**
 * Returns a Promise without an explicit resolution value.
 * @returns {Promise} A Promise object.
 */
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve();
  });
}
