import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    // If an error occurs in either await call, return an object with nulls
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
