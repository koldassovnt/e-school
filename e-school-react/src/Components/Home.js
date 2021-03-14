import Button from 'react-bootstrap/Button';
import { Card, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import AddStudent from './AddStudent';


async function deleteStudent(id){ // function that deletes student
  const response = await fetch("http://localhost:8000/students/deleteStudent/" + id, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  window.location.replace("/home");
}



function Home(props) {
    const isLogged = props.isLogged; // getting user is online or not
    
    const [data, setData] = useState([]); // array with students
    const [pageNumber, setPageNumber] = useState(0);

    const studentsPerPage = 5;
    const pagesVisited = pageNumber * studentsPerPage;
    const pageCount = Math.ceil(data.length / studentsPerPage);

    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
  
    async function loadData() {  // function that fetch data from server
      let response = await fetch("http://localhost:8000/students/all");  //getting students from server
      let tableData = await response.json();
      setData(tableData);
    }

    const displayStudents = data.slice(pagesVisited, pagesVisited+studentsPerPage)
    .map(std=>(
      <Card className="m-4 carditem" key={std.id}>
        <Card.Body>
          <Card.Title>{std.name + " " + std.surname}</Card.Title>
          <Card.Text>Age: {std.age}     GPA: {std.gpa}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button type="button" variant="danger" onClick={() =>deleteStudent(std.id)}>DELETE</Button>
        </Card.Footer>
      </Card>
    ));
  
    useEffect(() => { // do actual fetching
      loadData();
    }, []);


    return (
        <Container>
          <AddStudent/>

          {displayStudents}

          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </Container>
    );
}

export default Home;
