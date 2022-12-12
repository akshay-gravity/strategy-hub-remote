import { useState } from "react";
import { Button, Form, Container, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../public/images/VFS-logo.svg";
import "../styles/Home.css";

const LoginCpt = (props: any) => {
  const [key, setKey] = useState("");

  return (
    <Container fluid className="px-0">
      <div className="home full-height">
        <div className="home-header text-center">
          <Link to="/">
            <img alt="Logo" className="logo" src={Logo} />
          </Link>
          <h1 className="vfs-title mb-0">VFS INSIGHT</h1>
        </div>

        <div className="columns-wrapper">
          <div className="column px-0">
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                className="login-field"
                value={key}
                onChange={(event) => setKey(event.target.value)}
              />
              <Button variant="outline-secondary" id="button-addon1" onClick={() => {props.onFormSubmit(key)}}>
                Validate
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginCpt;
