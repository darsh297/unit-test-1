import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AddPatientRecord = () => {
  
  const { patientId } = useParams(); 
  
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [age, setAge] = useState();

  useEffect(()=>{
    console.log(patientId)
    if(patientId){
      console.log(patientId)
      axios.get(`http://localhost:8080/patient/${patientId}`)
      .then(response => {
        setAddress(response.data.address)
        setName(response.data.name)
        setAge(response.data.age)
        setId(response.data.patientId)
      })
    }
  }, [])

  const handleSubmit = (e) => {
    if(patientId){
      e.preventDefault();
      axios.put(`http://localhost:8080/patient/${id}`, {
        patientId: id,
        name: name,
        address: address,
        age: age      
      })
      .then((response) => {
        console.log(response);
      })
    } else {
      e.preventDefault();
      axios
      .post("http://localhost:8080/patient", {
        patientId: id,
        name: name,
        address: address,
        age: age 
      })
      .then((response) => {
        console.log(response)
      });
    }
  }
      
    


    const changeValue = (e) => {
        if(e.target.name === "id"){
            setId(e.target.value)
        } else if(e.target.name === "name"){
            setName(e.target.value)
        } else if(e.target.name === "address"){
            setAddress(e.target.value)
        } else if(e.target.name === "age"){
          setAge(e.target.value)
        }
    }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label >Id</Form.Label>
          <Form.Control value={id} name="id" onChange={changeValue} type="text" placeholder="Enter Id" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} name="name" onChange={changeValue} type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Age</Form.Label>
          <Form.Control value={age} name="age" onChange={changeValue} type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control value={address} name="address" onChange={changeValue} type="text" placeholder="Enter Address" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
  )
}

export default AddPatientRecord
