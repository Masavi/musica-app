import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import axios from 'axios';

class Artistas extends Component {

    state = { 
        artistas: []
    }

    componentDidMount() {
        axios.get('https://devf-musica.herokuapp.com/api/v1/artista')
            .then( respuesta => {
                this.setState({
                    artistas: respuesta.data
                });
            })
            .catch( err => console.log(err));
    }

    renderArtistas = () => {
        if (this.state.artistas.length === 0) {
            return <h2>Cargando artistas...</h2>
        } else {
            return  <Card>
                        <CardImg 
                            top 
                            width="100%" 
                            src={this.state.artistas[0].albums[0].portada} 
                            alt="Album cover" />
                        <CardBody>
                        <CardTitle>{this.state.artistas[0].nombre}</CardTitle>
                        <CardSubtitle>{this.state.artistas[0].genero}</CardSubtitle>
                        </CardBody>
                    </Card>
        }
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Lista de Artistas</h1>
                { this.renderArtistas() }
            </React.Fragment>
        );
    }
}
 
export default Artistas;