// 3-all.js
import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const photo = values[0].body;
      const user = values[1];
      console.log(`${photo} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
