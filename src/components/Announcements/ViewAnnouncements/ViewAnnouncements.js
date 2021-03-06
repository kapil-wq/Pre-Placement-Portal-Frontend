import React, { useContext, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Button, Card, CardBody, CardTitle, Form, FormGroup } from "reactstrap";
import swal from "sweetalert";
import AuthContext from "../../../AuthContext";
import CourseContext from "../../../CourseContext";
import "./ViewAnnouncements.scss";

const ViewAnnouncements = () => {
  const history = useHistory();
  let { path } = useRouteMatch();
  const { user } = useContext(AuthContext);
  const { course } = useContext(CourseContext);

  const [announcements, setAnnouncements] = useState([]);

  const fetchCall = () => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/announcement/retrieve?course=${course}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setAnnouncements(result.announcementList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCall();
  });

  const onDelete = (d_id) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/announcement/remove/${d_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result === "Deletion successful") {
          fetchCall();
        } else swal("Not deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <Form autoComplete="off">
        <FormGroup align="center">
          <h3 className="text-white">ANNOUNCEMENTS</h3>
        </FormGroup>
        {announcements.map((announcement) => (
          <Card key={announcement._id} className="announcement-card">
            <CardBody
              onClick={() => history.push(`${path}/${announcement._id}`)}
            >
              <CardTitle> {announcement.title} </CardTitle>
              {(user.role === "faculty" || user.role === "admin") && (
                <Button
                  color="color2"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(announcement._id);
                  }}
                >
                  Delete
                </Button>
              )}
            </CardBody>
          </Card>
        ))}
      </Form>
    </div>
  );
};

export default ViewAnnouncements;
