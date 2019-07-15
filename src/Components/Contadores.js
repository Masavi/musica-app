import React, { Component } from 'react';
import Contador from './Contador';

class Contadores extends Component {
    state = { 
        contadores: [
            { titulo: 'Alpha',   valor: 5, id: 0 },
            { titulo: 'Bravo',   valor: 0, id: 1 },
            { titulo: 'Charlie', valor: 0, id: 2 },
        ]
    }

    render() { 
        return ( 
            <React.Fragment>
                { /* */ }
                { this.state.contadores.map( contador => {
                    return <Contador 
                                key={contador.id}
                                titulo={contador.titulo} 
                                valor={contador.valor} />
                })}
            </React.Fragment>
        );
    }
}
 
export default Contadores;