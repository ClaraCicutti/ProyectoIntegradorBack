import React from 'react';
import './App.css';
import Odontologos from './components/Odontologos.jsx'
import { buscarTodos, eliminarOdontologo, crearOdontologo, actualizarOdontologo, encontrarOdontologo } from './services/odontologoService';

class App extends React.Component {

  componentDidMount() {
    // buscarTodos();
    // eliminarOdontologo();

    const nuevoOdontologo = { 
      nombre: "Marcos",
      apellido: "No se",
      matricula: 1231
    }

    encontrarOdontologo(4).then(res => console.log(res));
  }

  render() {
     return (
    <div className="App">
      <header className="App-header">
      </header>
      <Odontologos />
    </div>
  );
  }
 
}

export default App;
