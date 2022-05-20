import React from 'react';
import { Layout } from 'components';

export const Home = () => {
  return (
    <Layout>
      <main>
        <div className='text-center'>
          <h1 className='h1'>Welcome to ReadersList!</h1>
          <p className='lead'>
            Helping Readers Track Plan Their Reading In An Organized Fashion.
          </p>
        </div>
      </main>
    </Layout>
  );
};
