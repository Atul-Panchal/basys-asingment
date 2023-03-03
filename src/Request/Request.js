import React from "react";
import "./Request.css";
import Card from "../ui/Card";
import RequestInfo from "./RequestInfo";
const Request = () => {
  return (
    <>
      <div className="request-body">
        <div className="user-bar">
          <div className="user-name">
            <div className="warning">
              *This is demo login with limited but essential functionality
            </div>
            <h1 className="name">Welcome Bayer!</h1>
          </div>
          <div className="user-functions"></div>
        </div>
        <div className="manage-request-bar">
          <h2 className="name">Manage Requests</h2>
        </div>
        <div className="pending-section">
          <h4 className="name">Pending</h4>
          <Card>
            <RequestInfo />
          </Card>
        </div>
        <div className="accepted-section"></div>
      </div>
    </>
  );
};

export default Request;
