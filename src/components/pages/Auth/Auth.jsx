import React, { useState } from "react";
import FormAuth from "./FormAuth/FormAuth";
import { userLogin } from "../../../utils/api/api";
import DefaultModal from "../../global/Modal/DefaultModal";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [user, userSet] = useState({
    email: "",
    password: "",
  });
  const [err, errSet] = useState("");
  const [openModal, setOpenModal] = useState("");

  let textModal = err.length !== 0 ? err : "Berhasil login";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await userLogin(user);
      if ((res.status = 200)) {
        setOpenModal(true);
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      setTimeout(() => {
        navigate("/");
      }, 2000);
      return res.data;
    } catch (error) {
      errSet(error?.response?.data?.message);
      setOpenModal(true);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[url('./images/3.jpg')] bg-cover">
      <div className="px-2">
        <DefaultModal
          error={err}
          text={textModal}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        <FormAuth userSet={userSet} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Auth;
