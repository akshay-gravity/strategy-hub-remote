import { Routes, Route, BrowserRouter } from "react-router-dom";
import { connect } from "socket.io-client";
import { Provider } from "react-redux";
import { store } from "../redux/CreateStore";

//Web App Imports
import Home from "../modules/Home";
import View from "../modules/Views";
import Maps from "../modules/Maps";
import Vac from "../modules/Vac";
import Login from "../modules/Login";
import Room from "../modules/Room";
import MapView from "../modules/MapView";
import { useEffect, useState } from "react";

const Routers: React.FC = () => {
    const initializeSocket = () => {
    return connect("https://insighthub-dev-backend.azurewebsites.net/");  
   }

   const [socket, setSocketConn] = useState<any>(initializeSocket);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home socket={socket} />} />
          <Route path="room" element={<Room socket={socket} />} />
          <Route path="map" element={<MapView socket={socket} />} />          
          <Route path="vac-view" element={<Vac socket={socket} />} />
          <Route path="views" element={<View socket={socket} />} />
          <Route path="login" element={<Login socket={socket} />} />
          <Route
            path="*"
            element={<Login socket={socket} />} 
          />
          {/* <Route path="/room" element={<Home socket={socket} />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default Routers;
