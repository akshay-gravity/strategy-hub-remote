import LoginCpt from "../components/LoginCpt";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

const Login = (props: any) => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {

    props.socket.on('status',(value:string) => {
      if(value == 'Success') {
        navigate('/home')
      } else {
        setShow(true);
      }
    })
  },[props.socket])
  const onFormSubmit = (e: any) => {
    //const formDataObj = Object.fromEntries(new FormData(e.target).entries());
    props.socket.emit('token',e)

  };

  const handleClose = () => {     
    setShow(false);
}

  return (
    <>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Invalid Key</Modal.Title>
    </Modal.Header>
    <Modal.Body>Please try again.</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal> 
  <LoginCpt onFormSubmit={onFormSubmit} />
  </>
  );
};

export default Login;
