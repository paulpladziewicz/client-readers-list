import React from 'react';
import { Layout } from 'components';

export const Home = () => {
  return (
    <Layout>
      <main>
        <div className='text-center'>
          <h1 className='h1'>Welcome to ReadersList!</h1>
          <p className='lead'>
            Helping Readers Plan Their Reading In An Organized Fashion.
          </p>
          <p>Create a free account today.</p>
          <p>Created by <a href='https://paulpladziewicz.com'>Paul Pladziewicz</a></p>
        </div>
      </main>
    </Layout>
  );
};
