import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Error from "./Error";
;



const Details = () => {
  const [logindata, setLoginData] = useState([]);

  const history = useNavigate();

  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 3000);
      }
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
      <Header />
      {logindata.length === 0 ? (
        <div>
          <Error />

          <h1 style= {{textAlign:"center"}}> Please Login to Access This Page.</h1>
        </div>
      ) : (
        <>
          <h1> User Detials page</h1>
          <h1>Name:{logindata[0].name}</h1>
          <h1>Email:{logindata[0].email}</h1>
          <Button onClick={userlogout}>LogOut</Button>

          {logindata[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  Welcome {logindata[0].name} in our Website 😄
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>Have a nice Day</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default Details;
