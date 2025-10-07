import React from "react";
import "./Notification.css";

const Notification = (props) => {
  let statusClass = "";

  if (props.status === "error") {
    statusClass = "error";
  } else if (props.status === "success") {
    statusClass = "success";
  } else if (props.status === "pending") {
    statusClass = "pending";
  }

  return (
    <div className={`notification_container ${statusClass}`}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  );
};

export default Notification;
