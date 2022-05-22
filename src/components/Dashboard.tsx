import React from 'react';
import { Layout } from 'components';
import { useSelector } from 'react-redux';

export const Dashboard = () => {
  const { user } = useSelector((state: any) => state.user);
  return (
    <Layout>
      <main>
        <h1 className='h1'>Welcome {user?.first_name}</h1>
        <h2>My Reading List</h2>

        {/*<table>*/}
        {/*    <tr>*/}
        {/*        <th>Order</th>*/}
        {/*        <th>Title</th>*/}
        {/*        <th>Author</th>*/}
        {/*        <th>Current Page</th>*/}
        {/*    </tr>*/}
        {/*    <tr>*/}
        {/*        <th>1</th>*/}
        {/*        <th>Think and Grow Rich</th>*/}
        {/*        <th>Napoleon Hill</th>*/}
        {/*        <th>123</th>*/}
        {/*    </tr>*/}
        {/*</table>*/}
      </main>
    </Layout>
  );
};
