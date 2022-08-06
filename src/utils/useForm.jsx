import { useState } from "react";
import axios from "axios";

const useForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  //   handle register
  const handleRegister = async (e) => {
    e.preventDefault();
    axios
      .post("register", {
        email: email,
        firstname: firstName,
        lastname: lastName,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    handleRegister,
    email,
    setEmail,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    password,
    setPassword,
  };
};

export default useForm;
