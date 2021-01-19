import React, { useContext, useEffect } from "react";
import { Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";

const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <div>
      <div className="row">
        <div className="col-10 mx-auto">
          <Table>
            <thead>
              <tr>
                <th> Name</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    {user.fname} {user.lname}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.age} </td>
                  <td>
                    <Button
                      onClick={() => removeUser(user.id)}
                      className="btn btn-danger ml-2"
                    >
                      Delete
                    </Button>
                    <Link to="/" className="btn btn-info ml-3">
                      Add User
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
