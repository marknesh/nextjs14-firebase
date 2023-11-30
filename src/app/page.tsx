import { adminDb } from '@/lib/firebaseAdmin';

export const revalidate = 60;

export default async function Home() {
  const orders = await adminDb.collection('orders').get();

  return (
    <main className='flex min-h-screen flex-col w-11/12 mx-auto'>
      <h1 className='py-4 text-xl font-semibold'>My orders</h1>

      {orders.docs.length > 0 ? (
        <ol className='list-disc'>
          {orders.docs.map((doc) => {
            return <li key={doc.id}>{doc.data().name}</li>;
          })}
        </ol>
      ) : (
        <p>No orders have been created yet.</p>
      )}
    </main>
  );
}
