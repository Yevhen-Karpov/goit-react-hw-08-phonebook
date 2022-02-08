import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 500,
    fontSize: 108,
    textAlign: 'center',
    color: '#154584',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>WELCOME TO PHONEBOOK</h1>
  </div>
);

export default HomeView;
