import React, { useState } from "react";
import "./AddExternalLink.scss";
import { Label, Input, Button, FormGroup, Form } from "reactstrap";
import DCard from "../../DCard/DCard";
import swal from "sweetalert";

const AddExternalLink = (props) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const onClickHandler = (e) => {
    e.preventDefault();

    const alteredData = {
      title: title,
      link: link,
    };

    fetch("http://localhost:4000/externalresource/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(alteredData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        swal("EXTERNAL RESOURCE UPLOADED");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <DCard>
      <Form onSubmit={onClickHandler} autoComplete="off">
        <FormGroup align="center">
          <Label>ADD EXTERNAL RESOURCE/WEBLINKS</Label>
        </FormGroup>
        <hr />
        <FormGroup>
          <Label for="title">TITLE</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="link">LINK</Label>
          <Input
            type="url"
            name="link"
            id="link"
            value={link}
            placeholder="Paste link"
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup align="center">
          <Button type="submit" color="color2">
            UPLOAD
          </Button>
        </FormGroup>
      </Form>
    </DCard>
  );
};

export default AddExternalLink;