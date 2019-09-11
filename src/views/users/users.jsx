import React, { Component } from 'react';
import './users.css';
import {
  Table,
  Button,
  Container,
  Row,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import Header from '../../components/Headers/Header';
import Input from '../../components/Inputs/Input/Input';
import users from './constants';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: '',
      datas: users
    };
  }

  componentDidMount() {
    this.refs.name.focus();
  }

  /**
   * Add new user
   * @param {Any} e.
   */
  _handleAddUserPress = e => {
    e.preventDefault();

    let datas = this.state.datas;

    let data = {
      name: this.refs.name.value,
      username: this.refs.username.value,
      email: this.refs.email.value,
      adress: this.refs.adress.value,
      phone: this.refs.phone.value
    };

    datas.push(data);
    this.setState({ datas: datas });
  };

  render() {
    let datas = this.state.datas;

    return (
      <Container>
        <Header />
        <Form onSubmit={this.Addf} className="for" ref="myform" inline>
          <FormGroup>
            <Input type="text" ref="name" id="exampleName" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              ref="username"
              id="exampleUserName"
              placeholder="UserName"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              ref="email"
              id="exampleEmail"
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              ref="adress"
              id="exampleAdress"
              placeholder="Adress"
            />
          </FormGroup>{' '}
          <FormGroup>
            <Input
              type="number"
              ref="phone"
              id="examplePhone"
              placeholder="Phone"
              min="0"
            />
          </FormGroup>
          <Button className="add" color="info">
            Add
          </Button>
        </Form>

        <Row className="for">
          <Table className="align-items-center table-flush  " responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Adress</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, i) => (
                <tr key={i}>
                  <th scope="row"> {data.name}</th>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.adress}</td>
                  <td>{data.phone}</td>

                  <td>
                    {' '}
                    <Button
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Modify
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}

export default Users;
