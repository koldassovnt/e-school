import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {email: '', password:''};
    
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleLogin(e) {
        e.preventDefault();

        if (this.state.email == "admin@admin.com" && this.state.password == "admin") {  // checking if input is correct

            let obj = {email: 'admin@admin.com', password: 'admin', loggedIn: true} // creating new json object
            sessionStorage.setItem('user', JSON.stringify(obj)) // sending json object to the session

            window.location.replace("/home"); // redirect to /home

        } 
        else {
            alert('Email or Password is incorrect! ');
        }
    }

    render(){
        return(
            <div>
                <div className="login">
                    <Container>
                    <h2>Login to Continue</h2>
                        <Form>
                            <Form.Group className="form-group mb-2 mt-4">
                                <input type="email" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                            </Form.Group>

                            <Form.Group className="form-group mb-2">
                                <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                            </Form.Group>
                            
                            <Form.Group>
                                <Button type="submit" className="btn btn-dark btn-md" onClick={this.handleLogin}>Sign In</Button>
                            </Form.Group>
                        </Form>
                    </Container>
                    </div>
            </div>
        )
    }
}

export default Login;