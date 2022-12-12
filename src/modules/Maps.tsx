import Maps from "../components/MapsCpt";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import RemoteNavigator from "../utils/RemoteNavigator";

const View = (props: any) => {
  let navigate = useNavigate();

  useEffect(() => {
    props.socket.on("message", (data: any) => {
      const url = RemoteNavigator(data);
      navigate(url);
    });
  }, [props.socket, navigate]);

  return <Maps socket={props.socket} />;
};

export default View;
