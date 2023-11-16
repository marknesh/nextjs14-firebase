import { adminDb } from '../src/lib/firebaseAdmin';
import { FirebaseError } from 'firebase/app';

const seedFirestore = async () => {
  try {
    return await adminDb.collection('orders').add({
      name: 'michelle',
    });
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.log(error.message);
      return;
    } else {
      console.log('an error occurred');
      return;
    }
  }
};

seedFirestore();
