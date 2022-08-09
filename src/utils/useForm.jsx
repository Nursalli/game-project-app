import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const useForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //   handle register
  const handleRegister = async (e) => {
    e.preventDefault();
    axios
      .post("/users/register", {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Login Berhasil",
          timer: 2500,
        });
        console.log(res);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response?.data?.message || "something wrong!",
        });
        console.log(err);
      });
  };

  //   handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post("/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Login Berhasil",
          timer: 2500,
        });
        localStorage.setItem("token", res.data?.data?.token);
        console.log(res);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response?.data?.message || "something wrong!",
        });
        console.log(err);
      });
  };

  return {
    handleRegister,
    handleLogin,
    email,
    setEmail,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  };
};

export default useForm;
