import React ,{useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { deleteStudent, getStudents } from '../services/StudentService';
 
const StudentTableRow = ({student})=> { 


let navigate = useNavigate()
const onEdit=()=>{
navigate('/edit-student/'+student._id)
                 
}


const onDelete=()=>{
    console.log('deleting ',student._id)
    deleteStudent(student._id)
    .then(res=>navigate('/student-list'))
}

        return (
            <tr>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.rollno}</td>
                <td>
                     <Button onClick={onEdit} size="lg" variant="primary">Edit</Button>
              
                   </td>
                    <td>

                    <Button onClick={onDelete} size="sm" variant="danger">Delete</Button>
                 
                </td>
            </tr>
        );
    }


    export default StudentTableRow;