import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './NavBar';
import AddFolderButton from './AddFolderButton';

function Dashboard() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <AddFolderButton />
      </Container>
    </>
  );
}

export default Dashboard;
