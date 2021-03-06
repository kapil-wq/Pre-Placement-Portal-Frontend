import React, { useContext } from "react";
import { Button } from "reactstrap";
import swal from "sweetalert";
import AuthContext from "../../../AuthContext";
import formatDate from "../../../utils";
import "./FileStrip.scss";

function FileStrip(props) {
  const { user } = useContext(AuthContext);

  const onDelete = () => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/file/remove/${props.file.uuid}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        if (result === "Deletion successful") {
          props.afterDelete();
        } else swal("Not deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unixTimeZero = formatDate(props.file.createdAt);
  return (
    <div className="filestrip">
      <div className="filestrip__filename">{props.file.filename}</div>
      <div className="filestrip__subject">{props.file.subject.title}</div>
      <div className="filestrip__dateuploaded">{unixTimeZero}</div>
      <div className="filestrip__uploadedby text-capitalize">{`${props.file.owner.firstname} ${props.file.owner.lastname}`}</div>
      <div className="filestrip__action">
        <a
          className="btn btn-color5 w-100"
          href={`${process.env.REACT_APP_BACKEND_URL}/file/downloadoptimised/${props.file.uuid}/${props.file.filename}`}
          download
        >
          Download
        </a>
      </div>
      {(user.role === "faculty" || user.role === "admin") && (
        <div className="filestrip__delete">
          <Button className="btn btn-color5 w-100" onClick={onDelete}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}

export default FileStrip;
