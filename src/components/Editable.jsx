import React, { Component } from 'react';

export default class Editable extends Component {

    state = {
        texto: this.props.texto
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({texto: value})
        console.log(e);
        this.props.onChange(e)
    }

    render() {
        const { editable, id, name } = this.props;
        return (
            !editable ? this.state.texto : <input value={this.state.texto} id={id} name={name} onChange={this.handleChange}></input>
        )
    }
}