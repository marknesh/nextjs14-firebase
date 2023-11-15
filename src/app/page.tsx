import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export default async function Home() {
  const orders = await getDocs(collection(db, 'orders'));
  return (
    <main className='flex min-h-screen flex-col w-11/12 mx-auto'>
      <h1 className='py-4 text-xl font-semibold'>My orders</h1>
      {orders.docs.length > 0 ? (
        orders.docs.map((doc) => {
          return <div key={doc.id}>{doc.data().name}</div>;
        })
      ) : (
        <p>No orders have been created yet.</p>
      )}
    </main>
  );
}
