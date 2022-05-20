import React from 'react';
import { Layout } from 'components';
import { useSelector } from 'react-redux';

export const Dashboard = () => {
  const { user } = useSelector((state: any) => state.user);
  return (
    <Layout>
      <main>
        <div className='text-center'>
          <h1 className='h1'>Welcome {user.first_name}</h1>
        </div>
      </main>
    </Layout>
  );
};
