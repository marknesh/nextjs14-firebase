import { FirebaseError } from 'firebase/app';
import { faker } from '@faker-js/faker';
import { db } from '../firebaseCredentials';
import { addDoc, collection } from 'firebase/firestore';

const seedFirestore = async () => {
  try {
    console.log(
      'Seeding into project : ' +
        process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_PROJECT_ID
    );

    const promises = [...Array(10)].map(
      async () =>
        await addDoc(collection(db, 'orders'), {
          name: faker.person.firstName(),
          author_profile_pic: faker.image.avatar(),
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          address: {
            addr_1: faker.location.streetAddress(),
            addr_2: faker.location.secondaryAddress(),
            city: faker.location.city(),
            state: faker.location.city(),
            zipCode: faker.location.zipCode(),
          },
        })
    );

    await Promise.all(promises);

    console.log('Seeding was successfull.');
    return process.exit();
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.log(error.message);
      return process.exit();
    } else {
      console.log('an error occurred ', error);
      return process.exit();
    }
  }
};

seedFirestore();
