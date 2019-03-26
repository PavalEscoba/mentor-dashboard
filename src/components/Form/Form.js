import "./Form.scss";
import React from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class CustomForm extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <h1 className='col align-self-center text-center mb-5'>
            Form for Mentors
         </h1>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm="8">
            <Form action="https://docs.google.com/forms/d/e/1FAIpQLSdibrnv6lZ1Dx3sECyHeXqJum1clXwNs0fxBle0VX_08nLOGw/formResponse">
              <FormGroup className="mb-4">
                <Label for="mentorGithubName">
                  Ссылка на GitHub <span class="font-weight-bold">ментора</span> в формате: https://github.com/nickname <span style={{ color: 'red' }}>*</span></Label>
                <Input type="text" name="entry.344257307" id="githubName" placeholder="https://github.com/<your account>" required />
              </FormGroup>
              <FormGroup>
                <Label for="studentGithubName">Ссылка на GitHub <span class="font-weight-bold">студента</span> в формате: https://github.com/nickname <span style={{ color: 'red' }}>*</span></Label>
                <Input type="text" name="entry.306479226" id="studentGithubName" placeholder="https://github.com/<student's account>" required />
              </FormGroup>
              <Col className="text-right">
                <Button outline color="primary" className="col-auto ml-auto" size="lg">Send</Button>
              </Col>
            </Form>
          </Col>
        </Row>
        {/* <iframe name="hidden_iframe" title="to stay at the same page" id="hidden_iframe" style={{display:'none'}}
    onload="if(submitted)  {window.location='.';}"></iframe> */}
      </Container>
    );
  }
}

export default CustomForm;
