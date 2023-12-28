import React ,{useState ,useEffect}  from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import {useNavigate } from 'react-router-dom'
import { getStudentById, updateStudent } from "../services/StudentService";
import { useParams } from "react-router-dom/dist";

const  EditStudent =()=> {
  let navigate = useNavigate();
  const {id} = useParams();
  
  const [student,setStudent] = useState({})
  
  useEffect(()=>{
    getStudentById(id).then(res=>setStudent(res))
  },[id])

  const handleChange = (event)=>{

    let {name,value} =  event.target
    let newStudent = {...student,[name]:value}

    setStudent(newStudent)
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log('updated student email',student.email)
    updateStudent(id,student).then(res=>navigate('/student-list'))
  }

    return (     <div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"
          name="name"   
          value={student.name} 
          onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"
           name="email"  
          value={student.email}
           onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text"
           name="rollno" 
           value={student.rollno}
            onChange={handleChange} />
        </Form.Group>

        <Button variant="warning" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>);
  }

  export default EditStudent;
