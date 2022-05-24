import React, { useState } from 'react';
import Modal from 'react-modal';
import { Layout, Button } from 'components';
import { useSelector } from 'react-redux';
import styles from 'styles/Dashboard.module.css';

const customStyles = {
  content: {
    padding: '2rem',
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export const Dashboard = () => {
  const { user } = useSelector((state: any) => state.user);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Layout>
      <main>
        <h1 className='h1'>Welcome {user?.first_name}</h1>
        <div className={styles.readingList}>
          <h2>My Reading List</h2>
          <ul className={styles.buttonList}>
            <li>
              <Button type='button' text='Review New York Times Best Sellers' />
            </li>
            <li>
              <Button type='button' onClick={openModal} text='Add Book' />
            </li>
          </ul>
        </div>

        <hr />

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium amet animi asperiores eaque eveniet fugiat ipsa,
              labore numquam officiis, possimus quaerat quisquam repellendus,
              sit. Autem dolore facere illo incidunt magnam molestiae, nesciunt
              quo repellat saepe ullam! Asperiores autem earum eum, excepturi
              fuga laudantium, nisi odio quae quod sunt voluptates voluptatibus?
            </p>
          </div>
        </Modal>

        <table>
          <thead>
            <th style={{ width: '25%' }}>Order</th>
            <th style={{ width: '25%' }}>Title</th>
            <th style={{ width: '25%' }}>Author</th>
            <th style={{ width: '25%' }}>Current Page</th>
          </thead>
        </table>
      </main>
    </Layout>
  );
};
