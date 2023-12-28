import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { useNavigate } from "react-router-dom/dist";
import { addStudent } from "../services/StudentService";

const CreateStudent = ()=>{
  const [student,setStudent] =useState({name:'',email:'',rollno:0})
  let navigate = useNavigate()


  const handleChange = (event)=>{

    let {name,value} =  event.target
    let newStudent = {...student,[name]:value}

    setStudent(newStudent)
  }
  const onSubmit=(event)=>{

    event.preventDefault()
    console.log('student object in front end form submission add',student.name)
    addStudent(student).then(res=>navigate('/student-list'))

    
  }

  
    return (
    <div className="form-wrapper">
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
          <Form.Control  type="email"
          name="email" 
           value={student.email} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" 
          name="rollno" 
          value={student.rollno} 
          onChange={handleChange} />
        </Form.Group>

        <Button variant="info" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>
    );
  
}


export default CreateStudent;