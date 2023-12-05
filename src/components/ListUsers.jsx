import React, { useEffect, useState } from "react";
import useUsers from "../containers/Users/hooks/useUser";
import { Table, Button } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import ModalEdit from "./ModalEdit";
import ModalAdd from "./ModalAdd";
import DeleteConfirm from "./DeleteConfirm";

function ListUsers() {
  const { fetchUserDetail, userDetail, fetchUsers, users, loading } =
    useUsers();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);

  const handleEditClick = (userId) => {
    setSelectedUserId(userId);
    setShowModalEdit(true);
    fetchUserDetail(userId);
  };

  const handleCloseModalEdit = () => {
    setSelectedUserId(null);
    setShowModalEdit(false);
  };

  const handleAddClick = () => {
    setShowModalAdd(true);
  };

  const handleCloseModalAdd = () => {
    setShowModalAdd(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th className="text-align-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          ) : users ? (
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button
                    className="ms-4 me-2"
                    variant="outline-warning"
                    onClick={() => handleEditClick(user.id)}
                  >
                    <PencilSquare />
                  </Button>{" "}
                  <DeleteConfirm id={user.id}/>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users available.</td>
            </tr>
          )}
        </tbody>
      </Table>

      <Button variant="primary" onClick={() => handleAddClick()}>
        Add User
      </Button>

      <ModalAdd
        handleCloseModalAdd={handleCloseModalAdd}
        showModalAdd={showModalAdd}
      />

      {/* <Modal Edit> */}

      <ModalEdit
        handleCloseModalEdit={handleCloseModalEdit}
        showModalEdit={showModalEdit}
        userDetail={userDetail}
        id={selectedUserId}
      />
    </>
  );
}

export default ListUsers;
