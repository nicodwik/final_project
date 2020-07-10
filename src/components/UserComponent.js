import React from 'react';
import '../App.css';
import { Card, CardBody, Button, Form, FormGroup } from "reactstrap";

// Terdapat form (boleh Uncontrolled maupun controlled) dan juga lists.
class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.onSubmit = this.onSubmit.bind(this)
    this.inputNama = React.createRef();
    this.inputPhone = React.createRef();
    this.inputAddress = React.createRef();
    this.inputEmail = React.createRef();
  }

  onSubmit(e) {
    alert(`Name: ${this.inputNama.current.value}, Phone Number: ${this.inputPhone.current.value}, Address: ${this.inputAddress.current.value}, Email: ${this.inputEmail.current.value}`)
    e.preventDefault();
  }

  render() {
    return(

       <Card>
           <CardBody>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <input type="text" name='name' placeholder='Name' ref={this.inputNama}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="number" name="phone" placeholder="Phone Number" ref={this.inputPhone}/>
                  </FormGroup>
                  <FormGroup>
                    <textarea name="address" id="" cols="30" rows="3" placeholder="Address" ref={this.inputAddress}></textarea>
                  </FormGroup>
                  <FormGroup>
                    <input type="email" name='email' placeholder='Email' ref={this.inputEmail}/>
                  </FormGroup>
                    <Button type='submit' color="primary">Check</Button>
                </Form>
                
           </CardBody>
       </Card>

  ) 
      
  };
}
export default UserComponent;