import { useState } from "react";
import axios from "axios";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../firebase";

const useForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
        createUserWithEmailAndPassword(firebaseAuth, email, password).then((res) => {
          console.log('firebase response', res);
        })
        Swal.fire({
          icon: "success",
          title: "Register Berhasil",
          timer: 2500,
        });
        navigate("/login");
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
    setLoading(true);
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
        setLoading(false);
        localStorage.setItem("token", res.data?.data?.token);
        navigate("/home");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response?.data?.message || "something wrong!",
        });
        setLoading(false);
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
    loading,
    setLoading,
  };
};

export default useForm;
