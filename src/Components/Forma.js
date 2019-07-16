import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'; 

class Forma extends Component {
    state = { 
        nombre: '',
        password: ''
    }

    mandarDatos = () => {
        axios.post('https://devf-musica.herokuapp.com/api/v1/artista', this.state)
            .then( res => console.log(res.data))
            .catch( err => console.log(err));
    }

    manejarInput = (e) => {
        switch (e.target.name) {
            case 'nombre':
                this.setState({
                    nombre: e.target.value
                });
                break;
            case 'password':
                this.setState({
                    password: e.target.value
                });
                break;
            default:
                break;
        }
    }

    render() { 
        return ( 
            <Form>
            <FormGroup>
              <Label 
                for="exampleEmail">
                    Nombre
                </Label>
              <Input
                onChange={ this.manejarInput }
                type="text" 
                name="nombre" 
                id="exampleEmail" 
                placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
              <Label
                for="examplePassword">
                    Password
              </Label>
              <Input
                onChange={ this.manejarInput }
                type="password" 
                name="password" 
                id="examplePassword" 
                placeholder="password placeholder" />
            </FormGroup>
            <Button
                onClick={ this.mandarDatos }>
                Submit
            </Button>
          </Form>
         );
    }
}
 
export default Forma;