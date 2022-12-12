import { Container } from "react-bootstrap";
import Logo from "../../public/images/VFS-logo.svg";
import MapView from "../../public/images/mapView.svg";
import VacView from "../../public/images/vacView.svg";
import AddView from "../../public/images/addView.svg";
import ViewImg from "../../public/images/viewImg.svg";


import "../styles/Views.scss";
import { Link } from "react-router-dom";

const Views = (props: any) => {
  return (
    <>
      <Container fluid className="px-0">
        <div className="home full-height">
          <div className="home-header text-center mb-0">
            <Link to="/home">
              <img alt="Logo" className="logo" src={Logo} />
            </Link>
            <h1 className="vfs-title mb-0">VFS INSIGHT</h1>
          </div>
          <div className="view-wrapper">
            <div className="column">
              <div
                className="select-view"
                onClick={(e) => {
                  props.handleClick("map");
                }}
              >
                <img alt="" src={MapView} />
              </div>
            </div>
            <div className="column">
              <div
                className="select-view"
                onClick={(e) => {
                  props.handleClick("vac");
                }}
              >
                <img alt="" src={VacView} />
              </div>
            </div>
            {/* <div className="column">
              <div className="select-view">
                <img alt="" src={AddView} />
              </div>
              <div className="view-img">
                <img alt="" src={ViewImg} />
                <p className="opacity-0">Detailed View</p>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Views;
