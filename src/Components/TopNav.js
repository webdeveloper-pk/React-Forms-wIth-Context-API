import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="bg-dark text-center text-white p-3 mb-5">
      <h1 className="display-4 mb-3">Users Detail </h1>
      <Link to="/">
        <button className="btn btn-secondary btn-sm ">Back To Form</button>
      </Link>
    </div>
  );
};

export default TopNav;
