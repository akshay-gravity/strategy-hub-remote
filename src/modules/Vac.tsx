import Vac from "../components/VacCpt";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import RemoteNavigator from "../utils/RemoteNavigator";
import Logo from "../../public/images/VFS-logo.svg";

const View = (props: any) => {
  let navigate = useNavigate();

  useEffect(() => {
    props.socket.on("message", (data: any) => {
      const url = RemoteNavigator(data);
      navigate(url);
    });
  }, [props.socket, navigate]);

  const handleOnRegionClick = (region: any) => {
    props.socket.emit("locate-region", region);
}
const handleOnPopoverToggleChange = (status: boolean) => {
    props.socket.emit("toggle-change", status);
}

  return (
    <>
      <div className="home-header text-center">
        <img alt="Logo" className="logo" src={Logo} />
        <h1 className="vfs-title mb-0">VFS INSIGHT</h1>
      </div>
      <Vac socket={props.socket} handleOnRegionClick={handleOnRegionClick} handleOnPopoverToggleChange={handleOnPopoverToggleChange}/>
    </>);
};

export default View;
