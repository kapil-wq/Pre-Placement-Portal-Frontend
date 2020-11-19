import React, { useState } from 'react';
import "./AddAnnouncementForm.css";
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';

import swal from 'sweetalert';

const AddAnnouncement = (props) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onClickHandler = () => {
        const alteredData = {
            title: title,
            content: content
        };
          
        fetch('http://localhost:4000/announcement/add', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify( alteredData ),
        })
        .then(response => response.json())
        .then((result) => {
          console.log(result);
          swal("ANNOUNCEMENT UPLOADED");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
        <div className="containerj">
            <Card className="add-announcement-form">
                <CardBody className="upload-form">
                    <Form onSubmit="" autoComplete="off">
                        <FormGroup align="center">
                            <Label>ADD ANNOUNCEMENT</Label>
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input 
                                type="text" 
                                name="title" 
                                id="title" 
                                placeholder="Add Title Here" 
                                value={title} 
                                onChange={e => setTitle(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">Content</Label>
                            <Input 
                                type="textarea" 
                                name="content" 
                                id="content" 
                                className="content"
                                value={content} 
                                onChange={e => setContent(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" onClick={onClickHandler}>Submit</Button>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>        
        </div>
    );
}

export default AddAnnouncement;