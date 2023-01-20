import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { UserDataList, UserInput } from "./components";

function App() {
  const [UserId, SetuserId] = useState("");

  const userHandeler = (id) => {
    SetuserId(id);
  };
  return (
    <>
      <Container>
        <Row>
          <Col xs lg="5">
            <UserInput id={UserId} SetuserId={SetuserId} />
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Row>
          <Col xs lg="7">
            <UserDataList userlistId={userHandeler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
