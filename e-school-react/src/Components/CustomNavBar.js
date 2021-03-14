import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function CustomNavBar(props) {

    const isLogged = props.isLogged; // getting user is online or not
  
    const handleSubmit = event =>{
      event.preventDefault();
  
      sessionStorage.removeItem('user'); // removing user from session
      window.location.replace("/"); // moving back to starter page
    }

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        {isLogged ? (
            <Navbar.Brand href="/home">E-School</Navbar.Brand>
        ) : (
            <Navbar.Brand href="/">E-School</Navbar.Brand>
        )}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            {isLogged ? (
              <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
  
              <Form className="logout" inline onSubmit={handleSubmit}>
                <Button type="submit" variant="outline-info">Log Out</Button>
              </Form>
              </Nav>
            ) : (
              <div></div>
            )}
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }

  export default CustomNavBar;