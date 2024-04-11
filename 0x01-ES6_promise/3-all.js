import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();
  return Promise.all([photoPromise, userPromise])
    .then((args) => {
      console.log(`${args[0].body} ${args[1].firstName} ${args[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
