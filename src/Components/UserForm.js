import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";


const AddUser = () => {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    age: "",
    phonenumber: "",
    address: "",
  });

  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = () => {
    addUser({ id: uuid(), ...state });
    history.push("/home");
  };
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className=" body main-bg">
        <div className="login-container text-c">
          <div>
            <h1 className="logo-badge text-whitesmoke">
              <span className="fa fa-user-circle"></span>
            </h1>
          </div>
          <h3 className="text-white mt-3 mb-4 text-center">Register</h3>
          <div className="container-content">
            <form className="margin-t mt-4" onSubmit={onSubmit}>
              <div className="form-group">
                <label></label>
                <input
                  className="form-control"
                  type="text"
                  name="fname"
                  value={state.fname}
                  onChange={onChange}
                  placeholder="Enter First Name"
                  required
                />
               </div>
              <div className="form-group">
                <label></label>
                <input
                  className="form-control"
                  type="text"
                  name="lname"
                  value={state.lname}
                  onChange={onChange}
                  placeholder="Enter Last Name"
                  required
                />
              </div>
              <div className="form-group">
                <label></label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={onChange}
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="form-group">
                <label></label>
                <input
                  className="form-control"
                  type="text"
                  name="age"
                  value={state.age}
                  onChange={onChange}
                  placeholder="Enter Age"
                  required
                />
              </div>
              <div className="form-group">
                <label ></label>
                <input
                  className="form-control"
                  type="text"
                  name="phonenumber"
                  value={state.phonenumber}
                  onChange={onChange}
                  placeholder="Enter Phone Number"
                  required
                />
              </div>
              <div className="form-group">
                <label></label>
                <textarea
                  type="text"
                  name="address"
                  rows="3"
                  cols="80"
                  className="form-control"
                  value={state.address}
                  onChange={onChange}
                  placeholder="  Enter Address"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="form-button button-l mt-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
