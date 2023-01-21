import React, { useState, useEffect } from "react";
import { Form, Alert, Button } from "react-bootstrap";
import UserDataService from "../services/Userservices";

const UserInput = ({ id, SetuserId }) => {
  const [title, setTitle] = useState("");
  const [check, setCheck] = useState("of");
  const [select, setSelect] = useState("");

  const [message, setMessage] = useState({ error: false, msg: "" });

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
    setCheck("of");
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
            <option value="Construction & metarial">
              Construction & metarial
            </option>
            <option value="Electronics and Optics">
              Electronics and Optics
            </option>
            <option value="Food & veberage">Food & veberage</option>
            <option value="Fish & fish products">Fish & fish products</option>
            <option value="Meat & meat products">Meat & meat products</option>
            <option value="Milk & dairy products">Milk & dairy products</option>
            <option value="Sweets & snack foods">Sweets & snack foods</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Living room">Living room</option>
            <option value="Project furniture">Project furniture</option>
            <option value="Machinery components">Machinery components</option>
            <option value="Aluminium and steel workboats">
              Aluminium and steel workboats
            </option>
            <option value="Ship repair and conversion">
              Ship repair and conversion
            </option>
            <option value="Houses and buildings">Houses and buildings</option>
            <option value="Plustic and Rubber">Plustic and Rubber</option>
            <option value="Textile and Clothing">Textile and Clothing</option>
          </Form.Select>

          <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Agree to terms and conditions"
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
