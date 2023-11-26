import { useDispatch, useSelector } from "react-redux";
import {
  usersStart,
  usersSuccess,
  usersFailure,
  userDetailStart,
  userDetailSuccess,
  userDetailFailure,
  userAddStart,
  userAddSuccess,
  userAddFailure,
  userDeleteSuccess
} from "../../../redux/users/slice";
import axios from "axios";
import { useState } from "react";

function useUsers() {
  const dispatch = useDispatch();
  const { users, userDetail, loading, message } = useSelector((state) => state.user);
  const [formValue, setFormValue] = useState({
    email: null,
    name: null,
  });

  const fetchUsers = async () => {
    try {
      dispatch(usersStart());
      const response = await axios.get("http://127.0.0.1:8000/api/users");
      dispatch(usersSuccess(response.data.users));
    } catch (error) {
      dispatch(usersFailure());
    }
  };

  const fetchUserDetail = async (id) => {
    try {
      dispatch(userDetailStart());
      const response = await axios.get(`http://127.0.0.1:8000/api/users/${id}`);
      console.log(response.data.user);
      dispatch(userDetailSuccess(response.data.user));
    } catch (error) {
      dispatch(userDetailFailure());
    }
  };

  const handleSubmit = async (data) => {
    // e.preventDefault();

    try {
      dispatch(userAddStart());
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users",
        data
      );

      dispatch(userAddSuccess(response.data.message));
      if (response.data.status === 201) {
        window.location.reload();
      }
    } catch (error) {
      dispatch(userAddFailure());
    }
  };

  const handleSubmitEdit = async (id, data) => {

    try {
    //   dispatch(userAddStart());
      const response = await axios.put(
        `http://127.0.0.1:8000/api/users/${id}/edit`,
        data
      );

    //   dispatch(userAddSuccess(response.data.message));
      if (response.data.status === 201) {
        window.location.reload();
      }
    } catch (error) {
    //   dispatch(userAddFailure());
    }
  };

  const handleDelete = async (id) => {

    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/users/${id}/delete`
      );

      dispatch(userDeleteSuccess(response.data.message));
      window.location.reload();
    } catch (error) {
    }
  };

  return {
    fetchUsers,
    fetchUserDetail,
    userDetail,
    users,
    loading,
    handleSubmit,
    handleSubmitEdit,
    formValue,
    setFormValue,
    handleDelete,
    message
  };
}

export default useUsers;
