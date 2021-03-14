import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';



function AddStudent() {

    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState(0);
    const [gpa, setGpa] = useState(0.0);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleNameChange = event =>{
      setName(event.target.value);
    }
  
    const handleSurnameChange = event =>{
      setSurname(event.target.value);
    }
  
    const handleAgeChange = event =>{
      setAge(event.target.value);
    }
  
    const handleGpaChange = event =>{
      setGpa(event.target.value);
    }
  
    const handleSubmit = event =>{
      let obj = {name, surname, age, gpa};
      addStudent(obj);
      window.location.replace("/home");
    }
  
    async function addStudent(data){ // function that adds Student
      const response = await fetch("http://localhost:8000/students/saveStudent", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
      });
      let messData = await response.json();
      setMessage(messData.id? "Data Added : " : "Error");
      console.log(messData);
    }
  
  
    return (
      <Container className="add-student">
        <div>
          <h3>List of Students</h3>
        </div>
        <div>
          <Button variant="success" onClick={handleShow}>
            Add New +
          </Button>
  
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add new Student</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group className="form-group mb-2 mt-4">
                  <Form.Control type="text" name="name" placeholder="Name" value = {name} onChange = {handleNameChange}/>
                </Form.Group>
                <Form.Group className="form-group mb-2 mt-4">
                  <Form.Control type="text" name="surname" placeholder="Surname" value = {surname} onChange = {handleSurnameChange}/>
                </Form.Group>
                <Form.Group className="form-group mb-2 mt-4">
                  <Form.Control type="number" name="age" min="0" placeholder="Age" value = {age} onChange = {handleAgeChange}/>
                </Form.Group>
                <Form.Group className="form-group mb-2 mt-4">
                  <Form.Control type="number" step="0.01" name="gpa"  placeholder="GPA" value = {gpa} onChange = {handleGpaChange}/>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button type="submit" variant="primary">
                  Add
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </div>
      </Container>
    );
  }

  export default AddStudent;