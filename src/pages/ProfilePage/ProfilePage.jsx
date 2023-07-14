import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

export default function ProfilePage({ user }) {
  return (
    <>
      <NavBar />
      <h1>Hello {user.name}!</h1>
    </>
  );
}
