import { Dropdown, Button } from "react-bootstrap";
import Logo from "../../public/images/VFS-logo.svg";
import "../styles/Home.css";

const MonitorHome = (props: any) => {

    let countries = [
      "Germany",
      "India",
      "Singapore",
      "France",
      "Portugal",
      "Spain",
      "Italy",
    ];
  return (
    <>
    <div className="home full-height">
      <div className="home-header text-center">
        <img alt="Logo" className="mb-4" src={Logo} />
        <h1 className="vfs-title mb-0">VFS INSIGHT</h1>
      </div>
      
      <div className="dropdown-wrapper">
        <div className="custom-form">
          <Dropdown className="custom-dropdown" onSelect={props.handleSelect}>
            <Dropdown.Toggle id="dropdown-basic">
              Client Government
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {countries.map((options: string, i: number) => {
                return (
                  <Dropdown.Item key={i} eventKey={options}>
                    {options}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          {/* <Dropdown className="custom-dropdown">
            <Dropdown.Toggle disabled={true} id="dropdown-basic">
              Internal
            </Dropdown.Toggle>
          </Dropdown> */}
          {/* <Dropdown className="custom-dropdown">
            <Dropdown.Toggle disabled={true} id="dropdown-basic">
            VFS GLOBAL BOARD
            </Dropdown.Toggle>
          </Dropdown> */}
          {/* <div className="column margin-dropdown">
            <Button variant="secondary" disabled className="w-100 home-btn">
              Internal
            </Button>
          </div>
          <div className="column margin-dropdown">
            <Button variant="secondary" disabled className="w-100 home-btn">
              VFS GLOBAL BOARD
            </Button>
          </div> */}
        </div>
      </div>
    </div>
    </>
  );
};

// const MonitorHome = (props: any) => {
//   return (
//     <Container fluid>
//       <Row>
//         <Col>
//           <Dropdown onSelect={props.handleSelect}>
//             <Dropdown.Toggle variant="primary" id="dropdown-basic">
//               Client Government
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               {props.countryList.map((options: string, i: number) => {
//                 return (
//                   <Dropdown.Item key={i} eventKey={options}>
//                     {options}
//                   </Dropdown.Item>
//                 );
//               })}
//             </Dropdown.Menu>
//           </Dropdown>
//         </Col>
//         <Col>
//           <Button variant="secondary">INTERNAL</Button>
//         </Col>
//         <Col>
//           <Button variant="secondary">VFS GLOBAL BOARD</Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

export default MonitorHome;
