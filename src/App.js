import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { UserDataList, UserInput } from "./components";

function App() {
  const [UserId, SetuserId] = useState("");

  const userHandeler = (id) => {
    console.log("The ID of document to be edited: ", id);
    SetuserId(id);
  };
  return (
    <>
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <UserInput id={UserId} SetuserId={SetuserId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <UserDataList userlistId={userHandeler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
