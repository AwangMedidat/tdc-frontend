import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import useUsers from "../containers/Users/hooks/useUser";

function DeleteConfirm({ id }) {
  const { handleDelete, message } = useUsers()
  const deleteAlertConfirm = (confirmText) => {
    Swal.fire({
      title: "Are you sure?",
      text: confirmText,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
        handleDelete(id)
      if (result.isConfirmed) {
        Swal.fire({
            icon: "success",
            title: "User Deleted Successfuly",
            showConfirmButton: false,
          });
      }
    });
  };

  const handleDeleteConfirm = () => {
    deleteAlertConfirm("You will not be able to recover this user!");
  };

  return (
    <Button variant="outline-secondary" onClick={handleDeleteConfirm}>
      <Trash />
    </Button>
  );
}

export default DeleteConfirm;
