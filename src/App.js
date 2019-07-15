import React from 'react';
import Contadores from './Components/Contadores';
import { Container } from 'reactstrap';

function App() {
  return (
      <Container className='mt-4'>
        <h1>Contadores</h1>
        <Contadores />
      </Container>
  );
}

export default App;
