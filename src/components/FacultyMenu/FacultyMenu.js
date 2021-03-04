import React from "react";
import { Row, Col } from "reactstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./FacultyMenu.scss";

function FacultyMenu() {
  let history = useHistory();
  let { url } = useRouteMatch();

  const onAddNewRes = () => {
    history.push(`${url}/addfile`);
  };

  const onAddNewJob = () => {
    history.push(`${url}/addjob`);
  };

  const onAddNewTest = () => {
    history.push(`${url}/addtest`);
  };

  const onAddExternalRes = () => {
    history.push(`${url}/addexternallink`);
  };

  const onAddAnnouncement = () => {
    history.push(`${url}/addannouncement`);
  };

  const onViewStudentsList = () => {
    history.push(`${url}/viewstudent`);
  };

  const onViewJob = () => {
    history.push(`${url}/viewjobs`);
  };

  const onViewAllResources = () => {
    history.push(`${url}/files`);
  };

  return (
    <div className="container">
      <Row>
        <Col md={3}>
          <div className="parentdiv parentdiv1" onClick={onAddNewRes}>
            <div className="card-overlay"></div>
            <div className="card-description">
              ADD FILE
              <br /> (PPT, notes, etc)
            </div>
          </div>
          <div className="parentdiv parentdiv2" onClick={onViewStudentsList}>
            <div className="card-overlay"></div>
            <div className="card-description">VIEW ALL STUDENTS</div>
          </div>
        </Col>
        <Col md={3}>
          <div className="parentdiv parentdiv3" onClick={onAddAnnouncement}>
            <div className="card-overlay"></div>
            <div className="card-description">ADD NEW ANNOUNCEMENT</div>
          </div>
          <div className="parentdiv parentdiv4" onClick={onAddNewJob}>
            <div className="card-overlay"></div>
            <div className="card-description">ADD A NEW JOB POSTING</div>
          </div>
        </Col>
        <Col md={3}>
          <div className="parentdiv parentdiv5" onClick={onAddNewTest}>
            <div className="card-overlay"></div>
            <div className="card-description">ADD MOCK TEST FOR STUDENTS</div>
          </div>
          <div className="parentdiv parentdiv6" onClick={onAddExternalRes}>
            <div className="card-overlay"></div>
            <div className="card-description">ADD NEW EXTERNAL LINK</div>
          </div>
        </Col>
        <Col md={3}>
          <div className="parentdiv parentdiv7" onClick={onViewJob}>
            <div className="card-overlay"></div>
            <div className="card-description">VIEW ALL JOB POSTINGS</div>
          </div>
          <div className="parentdiv parentdiv8" onClick={onViewAllResources}>
            <div className="card-overlay"></div>
            <div className="card-description">VIEW ALL FILES UPLOADED</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default FacultyMenu;
