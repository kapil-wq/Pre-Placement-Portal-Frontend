import React from "react";
import { useHistory } from "react-router-dom";
import DashboardAnnouncement from "../Announcements/DashboardAnnouncement/DashboardAnnouncement";
import "./FacultyMenu.scss";

function FacultyMenu() {
  let history = useHistory();

  return (
    <div className="ocontainer">
      <div class="icontainer">
        <div class="icard" onClick={() => history.push("/addcontent")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <h3>Add Content</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sapiente, voluptate consectetur ea, nihil modi maiores aperiam
              cumque iste corrupti porro.{" "}
            </p>
          </div>
        </div>

        <div class="icard" onClick={() => history.push("/viewcontent")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <h3>View Content</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sapiente, voluptate consectetur ea, nihil modi maiores aperiam
              cumque iste corrupti porro.{" "}
            </p>
          </div>
        </div>

        <div class="icard" onClick={() => history.push("/viewstudent")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <h3>Students Profiles</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sapiente, voluptate consectetur ea, nihil modi maiores aperiam
              cumque iste corrupti porro.{" "}
            </p>
          </div>
        </div>
      </div>
      <DashboardAnnouncement />
    </div>
  );
}

export default FacultyMenu;
