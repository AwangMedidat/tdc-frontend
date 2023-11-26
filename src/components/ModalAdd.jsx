import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useUsers from "../containers/Users/hooks/useUser";

function ModalAdd({ handleCloseModalAdd, showModalAdd }) {
 const { formValue, setFormValue, handleSubmit, loading } = useUsers();
 const { register, handleSubmit: handleFormSubmit, formState: { errors } } = useForm();

 const onSubmit = (data) => {
    handleSubmit(data);
  };

 return (
    <Modal show={showModalAdd} onHide={handleCloseModalAdd} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleFormSubmit(onSubmit)}>
        <Modal.Body>
          <div className="mb-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              {...register("name", {
                required: "Name is required"
              })}
              id="name"
              placeholder="John Doe"
              onChange={(e) => {
                setFormValue({ ...formValue, name: e.target.value });
              }}
              value={formValue.name ?? ""}
              isInvalid={errors.name}
            />
            {errors.name && <Form.Control.Feedback type="invalid">{errors.name.message}</Form.Control.Feedback>}
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format"
                }
              })}
              id="email"
              placeholder="Contoh: johndee@gmail.com"
              onChange={(e) => {
                setFormValue({ ...formValue, email: e.target.value });
              }}
              value={formValue.email ?? ""}
              isInvalid={errors.email}
            />
            {errors.email && <Form.Control.Feedback type="invalid">{errors.email.message}</Form.Control.Feedback>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalAdd}>
            Close
          </Button>
          <Button variant="primary" type="submit" disabled={loading} >
            {loading ? "Please wait ..." : "Save Changes"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
 );
}

export default ModalAdd;