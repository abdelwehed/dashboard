import React, { Component } from 'react';
import './users.css'
import {

    Table,
    Button,
    Container, Row,
    Form, FormGroup, Label, Input

} from "reactstrap";
import Header from "../../components/Headers/Header"

class Users extends Component {


    constructor(props) {
        super(props);
        this.state = {
            index: '',
            datas: [{ name: 'Mohamed Amine Telli', email: 'medaminetelli@gmail.com', username: 'Telli', adress: 'Zayatine Grombalia', },
            { name: 'Test', email: 'Test@gmail.com', username: 'tt', adress: 'Grombalia', }, { name: 'Test', email: 'Test@gmail.com', username: 'tt', adress: 'Grombalia', }
            ]
        }

    }
    componentDidMount() {
        this.refs.name.focus();
    }



    Addf = (e) => {
        e.preventDefault()

        let datas = this.state.datas
        console.log(datas);
        let name = this.refs.name.value
        let username = this.refs.username.value
        let adress = this.refs.adress.value
        let email = this.refs.email.value
        let phone = this.refs.phone.value

        let data = {
            name, username, email, adress, phone
        }

        datas.push(data);
        this.setState({
            datas: datas
        })
        console.log(datas);
        //  this.refs.myform.reset();
        this.refs.name.focus()
        this.refs.name.value = '';

    }



    render() {

        let datas = this.state.datas

        return (
            <Container >
                <Header />
                <Form onSubmit={this.Addf} className='for' ref='myform' inline  >

                    <FormGroup>
                        {/* <Label for="exampleName" hidden>Name</Label> */}
                        <Input type="text" ref="name" id="exampleName" placeholder="Name" />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        {/* <Label for="exampleUserName" hidden>UserName</Label> */}
                        <Input type="text" ref="username" id="exampleUserName" placeholder="UserName" />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        {/* <Label for="exampleEmail" hidden>Email</Label> */}
                        <Input type="email" ref="email" id="exampleEmail" placeholder="Email" />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        {/* <Label for="exampleAdress" hidden>Adress</Label> */}
                        <Input type="text" ref="adress" id="exampleAdress" placeholder="Adress" />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        {/* <Label for="examplePhone" hidden>Phone</Label> */}
                        <Input type="number" ref="phone" id="examplePhone" placeholder="Phone" min="0" />

                    </FormGroup>

                    <Button className='add' color="info"  >Add</Button>


                </Form>

                <Row className='for'  >

                    <Table className="align-items-center table-flush  " responsive>

                        {/* {datas.map((data, i) =>
 
)} */}
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


                            {datas.map((data, i) =>

                                <tr key={i}>
                                    <th scope="row">  {data.name}</th>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    <td>{data.adress}</td>
                                    <td>
                                        {data.phone}
                                    </td>

                                    <td> <Button
                                        color='info'
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                        size="sm"
                                    >
                                        Modify
                                   </Button></td>
                                    <td>
                                        <Button
                                            color="danger"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                            size="sm"
                                        >
                                            Delete
                                     </Button></td>
                                </tr>

                            )}





                        </tbody>

                    </Table>
                </Row>
            </Container>
        )
    }
}

export default Users
