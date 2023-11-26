import React from "react";
import ListUser from "../../components/ListUsers";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-4">
      <h1>List of Users</h1>
      <ListUser />
    </Container>
  );
}

export default Home;
