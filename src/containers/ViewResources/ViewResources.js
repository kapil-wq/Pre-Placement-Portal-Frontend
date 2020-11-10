import React from 'react';

import FacultyNavBar from '../../components/FacultyNavBar/FacultyNavBar'
import FileList from '../../components/FileList/FileList'

export default function ViewResources(props) {

    return (
        <div>
            <FacultyNavBar/>
            <FileList limit={10} category={props.category} />
        </div>
    )
}
