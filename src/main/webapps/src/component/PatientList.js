import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from "react-router-dom";
const PatientList = () => {

  const [students, setStudents] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/listPatientRecord").then((response) => {
      console.log(response)
      setStudents(response.data);
      // console.log(students)
    })
    .catch(error => console.log(error));
  }, []);


  const handleDelete = (id) => {
    console.log(id)
    axios.delete(`http://localhost:8080/patient/${id}`).then((response) => {
      setStudents(students.filter((student)=>student.patientId!==id));
      // setStudents(response.data)
    })
  }


  return (
    <Container className='mt-2'>
      <Table striped bordered hover>
      <thead>
        <tr>

          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        {students && students.map((student) => {
          return <tr>
          <td>{student.patientId}</td>
          <td>{student.name}</td>
          <td>{student.address}</td>
          <td>{student.age}</td>
          <td><Link to={`/patient/${student.patientId}`} ><i className="fa-solid fa-pen-to-square text-primary" ></i></Link></td>
          <td><i className="fa-solid fa-trash-can text-danger" onClick={() => {handleDelete(student.patientId)}}></i></td>
        </tr>
        })}
      </tbody>
    </Table>
    </Container>
  )
}

export default PatientList
