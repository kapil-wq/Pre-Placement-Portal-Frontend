import React from 'react';
import { Button } from 'reactstrap';
import './FileStripp.css';
import swal from 'sweetalert';

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('-');
}

export default function FileStrip(props) {
    
    const onDelete = () => {
    fetch(`http://localhost:4000/file/remove/${props.file.uuid}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((result) => {
        if(result === 'Deletion successful') {
          swal('deleted');
          props.afterDelete()
        }
        else 
        swal('Not deleted');
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    

    const unixTimeZero = formatDate(props.file.createdAt);
    return (
        
        <div className="filestrip">
            <div className="filestrip__filename">{props.file.filename}</div>
            <div className="filestrip__subject">{props.file.subject.title}</div>
            <div className="filestrip__dateuploaded">{unixTimeZero}</div>
            <div className="filestrip__uploadedby text-capitalize">{`${props.file.owner.firstname} ${props.file.owner.lastname}`}</div>
            <div className="filestrip__action" ><a className="btn btn-info w-100" href={`http://localhost:4000/file/download/${props.file._id}`} download>Download</a></div>
            <div className="filestrip__delete" ><Button className="btn btn-info w-100" onClick={onDelete}>Delete</Button></div>
        </div>
        
    )
}
