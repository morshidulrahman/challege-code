import React, { useState, useEffect } from "react";
import { Form, Alert, Button } from "react-bootstrap";
import UserDataService from "../services/Userservices";

const UserInput = ({ id, SetuserId }) => {
  const [title, setTitle] = useState("");
  const [check, setCheck] = useState("");
  const [select, setSelect] = useState("");
  const [data, setdata] = useState([]);
  const [message, setMessage] = useState({ error: false, msg: "" });

  // const getselect = async () => {
  //   const data = await UserDataService.allitemsData();
  //   setdata(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || check === "" || select === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newData = {
      title,
      check: "yes",
      select,
    };

    try {
      if (id !== undefined && id !== "") {
        await UserDataService.updateuser(id, newData);
        SetuserId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await UserDataService.addusers(newData);
        setMessage({ error: false, msg: "New data added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setSelect("");
    setTitle("");
    setCheck("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await UserDataService.getuser(id);

      setTitle(docSnap.data().title);
      setCheck(docSnap.data().check);
      setSelect(docSnap.data().select);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formuserTitle">
            <Form.Control
              type="text"
              placeholder="your name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Select onChange={(e) => setSelect(e.target.value)}>
            <option>Select your items</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Truck">Truck</option>
          </Form.Select>

          <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check me out"
              required
              onChange={(e) => setCheck(e.target.value)}
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default UserInput;
