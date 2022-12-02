/* eslint-disable no-alert */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable object-shorthand */
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function GlobalPassword() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  function registeruser(event) {
    event.preventDefault();

    const ServerUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const newuser = {
      password: password,
    };

    ServerUsers.push(newuser);
    localStorage.setItem("ServerUsers", JSON.stringify(ServerUsers));
    navigate('/Ff');
    
    alert("Registration is  Successful");
  }

  return (
    <div>
      <button onClick={openModal}>Get Started</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input
            type="password"
            className="fullwd"
            placeholder="Password"
            name=""
            id=""
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <input
            type="submit"
            onClick={registeruser}
            className="btn btn-primary"
            value="Sign Up"
          />
        </form>
      </Modal>
    </div>
  );
}


export default GlobalPassword;
