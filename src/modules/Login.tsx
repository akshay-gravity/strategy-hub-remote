import LoginCpt from "../components/LoginCpt";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

const Login = (props: any) => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [isTokenValidated, setTokenValidated] = useState(false);
  const [isConnected, setConnected] = useState(false);
  const [modalObj, setModalObj] = useState({ modalTitle: '', modalBody: '' })

  useEffect(() => {

    props.socket.on('status', (value: string) => {
      if (value == 'Success') {
        setModalObj({
          modalTitle: 'Congratulations!!',
          modalBody: 'Please go ahead and login.'
        });
        setTokenValidated(true);
      } else {
        setModalObj({
          modalTitle: 'Invalid Key',
          modalBody: 'Please try again.'
        });
        setTokenValidated(false);
      }
      setShow(true);
    })
  }, [props.socket])
  const onFormSubmit = (e: any) => {
    //const formDataObj = Object.fromEntries(new FormData(e.target).entries());
    props.socket.emit('token', e)

  };
  const handleOnTokenValidation = () => {
    props.socket.emit('navigate', '/login');
    setConnected(true);
  }
  const handleOnLogin = () => {
    props.socket.emit('submit-login', { userName: 'vfsAdmin', passWord: '1234' });
    navigate('/home');
   // setConnected(true);
  }

  const handleClose = () => {
    setShow(false);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalObj.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalObj.modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={isConnected} hidden={!isTokenValidated} variant="primary" onClick={() => handleOnTokenValidation()}>
            Connect
          </Button>
          <Button disabled={!isConnected} hidden={!isTokenValidated} variant="primary" onClick={() => handleOnLogin()}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      <LoginCpt onFormSubmit={onFormSubmit} />
    </>
  );
};

export default Login;
