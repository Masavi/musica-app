import React, { Component } from 'react';
import { Badge, Button, Row } from 'reactstrap';

class Contador extends Component {
    state = {
        titulo: this.props.titulo,
        valor: this.props.valor,
    }

    incrementarContador = () => {
        this.setState({
            valor: this.state.valor + 1
        });
    }

    decrementarContador = () => {
        this.setState({
            valor: this.state.valor - 1
        });
    }

    renderizarValor = () => {
        if (this.state.valor > 0) {
            return <Badge
                        color='primary' 
                        style={{ fontSize: '1.5em'}}>
                        {this.state.valor}
                    </Badge>
        } else if (this.state.valor < 0) {
            return <Badge
                        color='danger' 
                        style={{ fontSize: '1.5em'}}>
                        {this.state.valor}
                    </Badge>
        } else return <Badge
                        color='warning' 
                        style={{ fontSize: '1.5em'}}>
                        cero
                     </Badge>

    }

    render() { 
        return (
            <div style={{
                padding: '10px',
                borderRadius: '10px',
                width:'18em',
                backgroundColor: '#fae2aa'
                }}>
                <h2 className='ml-3'>
                    {this.state.titulo}
                </h2>
                <Row className='align-items-start ml-3'>
                    { this.renderizarValor() }
                    <Button
                        onClick={ this.incrementarContador }
                        className='ml-2 mr-2' 
                        color='primary'>+</Button>
                    <Button
                        onClick={ this.decrementarContador } 
                        color='danger'>-</Button>
                    <Button
                        className='ml-4' 
                        color='warning'>Eliminar</Button>
                </Row>
            </div>
        );
    }
}
 
export default Contador;