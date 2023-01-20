import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import UserDataService from "../services/Userservices";

const UserDataList = ({ userlistId }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getallData();
  }, []);

  const getallData = async () => {
    const data = await UserDataService.getAllusers();
    setdata(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await UserDataService.deleteuser(id);
    getallData();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getallData}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(users, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>User name</th>
            <th>Select items</th>
            <th>Terms & condition</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{doc.title}</td>
                <td>{doc.select}</td>
                <td>{doc.check}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => userlistId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default UserDataList;
