import Views from "../components/ViewCpt";
import { useNavigate } from "react-router-dom";

const View = (props: any) => {
  let navigate = useNavigate();

  // useEffect(() => {
  //   props.socket.on("message", (data: any) => {
  //     const url = RemoteNavigator(data);
  //     navigate(url);
  //   });
  // }, [props.socket, navigate]);

  const handleClick = (e: string) => {
    props.socket.emit('navigate',e)
    switch (e) {
      case "map":        
        navigate("/map");
        break;
      case "vac":
        navigate("/vac");
        break;
    }
  };

  return <Views socket={props.socket} handleClick={handleClick} />;
};

export default View;
