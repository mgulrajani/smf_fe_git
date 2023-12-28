import React,{ useEffect, useState }  from "react";
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';
import { getStudents } from "../services/StudentService";


const StudentList =()=> {

console.log('in student list ')
const [students,setStudents]=useState([]);
 
useEffect(()=>{
  getStudents().then(data=>setStudents(data))
 },[]);

  


      return   (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        
          {
          students.length &&(
          students.map((student,i)=>(<StudentTableRow student={student} key={i}/>)))
          }
        </tbody>
      </Table>
    </div>);
  }


  export default StudentList;