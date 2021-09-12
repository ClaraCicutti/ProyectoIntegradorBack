import React, { Component } from 'react';
import {buscarTodos, 
        eliminarOdontologo, 
        crearOdontologo, 
        actualizarOdontologo, 
        encontrarOdontologo} from '../services/odontologoService.js';
import Editable from './Editable.jsx'

export default class Odontologos extends Component {
    state = {
        data: [],
        editable: false,
        icono: "✏",
        odontologo: {},
        idEditable: 0
    }

    componentDidMount(){
        this.reiniciarTodo()
    }

    reiniciarTodo = () => {
        buscarTodos()
        .then(res => {
            this.setState(() => {
                return {data: res}
            })
        })
    }

    handleDelete = async (e) => {
        let id = e.target.id;
        await eliminarOdontologo(id);
        this.reiniciarTodo()
    }
    
    handleEdit = (e) => {
        console.log(e.target);
        this.setState(() => {
            return {editable: true, icono: "✔", idEditable: e.target.id}
        })
    }

    handleChange = (e) => {
        // this.setState
        let value = e.target.value;
        const id = e.target.id;
        const name = e.target.name
        console.log(value, id, name);
    }
    
    esEditable = (id) => this.state.editable && Number(id)===Number(this.state.idEditable)

    render(){
        return(
            <table><tbody>
                <tr>
                    <td>Edit </td>
                    <td>Nombre: </td>
                    <td>Apellido: </td>
                    <td>Matrícula: </td>
                    <td>Eliminar </td>
                </tr>
                    {this.state.data.map((data, index) => {
                        return( 
                            <tr key={index}>
                                <td><button onClick={this.handleEdit} id={data.id}>{this.state.icono}</button></td>
                                
                                <td><Editable texto={data.nombre} id={data.id} editable={this.esEditable(data.id)} onChange={this.handleChange} name="nombre"/></td>
                                <td><Editable texto={data.apellido} editable={this.esEditable(data.id)} onChange={this.handleChange} name="apellido"/></td>
                                <td><Editable texto={data.matricula} editable={this.esEditable(data.id)} onChange={this.handleChange} name="matricula"/></td>
                                
                                <td>
                                    <button onClick={this.handleDelete} id={data.id}>❌</button>
                                </td>
                            </tr>)
                    })}
            </tbody></table>
        )
    }
}