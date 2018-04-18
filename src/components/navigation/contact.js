import React from 'react';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Jumbotron,
} from 'reactstrap';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Form>
            <FormGroup row>
              <Label for="name" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input type="name" name="name" placeholder="Name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" sm={2}>
                Password
              </Label>
              <Col sm={10}>
                <Input type="email" name="email" placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="subject" sm={2}>
                Subject
              </Label>
              <Col sm={10}>
                <Input type="subject" name="subject" placeholder="Subject" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Message
              </Label>
              <Col sm={10}>
                <Input type="textarea" name="text" id="exampleText" />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default Contact;
