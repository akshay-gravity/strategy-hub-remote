import { Button, Modal } from "react-bootstrap";


const RoomCpt = (props: any) => {
    return (
        <div>
            <aside
                style={{
                    alignItems: "center",
                    margin: "10%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                }}
            >
                
                        <Button variant="primary" onClick={() => props.handleOnMakingRoom('create-room')}>
                            Create Room
                        </Button>
                        <Button variant="primary" onClick={() => props.handleOnMakingRoom('join-room')}>
                            Join Room
                        </Button>   
            </aside>
        </div>
    );
};

export default RoomCpt;
