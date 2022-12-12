import MonitorHome from "../components/HomeCpt";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = (props: any) => {
  let navigate = useNavigate();

  // useEffect(() => {
  //   props.socket.on("message", (data: any) => {
  //     const url = RemoteNavigator(data);
  //     navigate(url);
  //   });
  //   dispatch(fetchRequest());
  // }, [props.socket]);

  useEffect(() => {
  }, []);


  const handleSelect = (selectedClientGov: string) => {
    props.socket.emit('client-gov',selectedClientGov)
    navigate('/views')
  };

  return (
    <MonitorHome
      socket={props.socket}
      handleSelect={handleSelect}
    />
  );
};

export default Home;
