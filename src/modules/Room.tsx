import RoomCpt from "../components/RoomCpt";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import "../styles/Home.css";
import Logo from "../../public/images/VFS-logo.svg";
import { isPropertyDeclaration } from "typescript";

const Room = (props: any) => {
    let navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [isRoomJoined, setRoomJoined] = useState(false);
    const [modalObj, setModalObj] = useState({modalTitle:'',modalBody:''})

  props.socket.on()

    props.socket.on('joinSuccess', (id: any) => {
        console.log('Joining the room: ' + id);
        setModalObj({
        modalTitle: 'Join Room',
        modalBody: 'Room Joined.'
    });
        setRoomJoined(true);
        setShow(true)        
    });

    props.socket.on('createSuccess', (id: any) => {
        console.log('Creating the room: ' + id);
        setModalObj({
            modalTitle: 'Create Room',
            modalBody: 'Room Created. Please go ahead and join the room'
        });
        
        setRoomJoined(false);
        setShow(true)        
    });

    const handleOnMakingRoom = (makeRoom: string) => {
        setShow(false);
        props.socket.emit(makeRoom);
    }
    const handleClose = () => {     
        setShow(false);
        if(isRoomJoined) {
            navigate('/home')
        }
    }

    return (

        <div className="home full-height">
           <div className="home-header text-center">
            <img alt="Logo" className="logo" src={Logo} />
          <h1 className="vfs-title mb-0">VFS INSIGHT</h1>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalObj.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalObj.modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button hidden={isRoomJoined} variant="primary" onClick={() => handleOnMakingRoom('join-room')}>
            Join Room
          </Button>
        </Modal.Footer>
      </Modal>   
        <RoomCpt handleOnMakingRoom={handleOnMakingRoom}></RoomCpt>
       </div>
    );
};

export default Room;
