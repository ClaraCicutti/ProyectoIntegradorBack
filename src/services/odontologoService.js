const endpoint = "http://localhost:8080/odontologos";

function buscarTodos() {
    console.log("Ingresando");
    return(
        fetch(endpoint)
        .then(response => response.json())
        .then(data => data)
    )
}

function eliminarOdontologo(id){
    const settings = {
        method: "delete"
    }
    return (
        fetch(endpoint + "/" + id, settings)
        .then(response => console.log(response.status))
    )
}

function crearOdontologo(json){
    const settings = {
        method: "post",
        body: JSON.stringify(json),
        headers: {
            "Content-Type" : "application/json"
        }
    }
    fetch(endpoint, settings)
    .then(response => response.json())
    .then(data => console.log(data))
}

function actualizarOdontologo(json){
    const settings = {
        method: "put",
        body: JSON.stringify(json),
        headers: {
            "Content-Type" : "application/json"
        }
    }
    fetch(endpoint, settings)
    .then(response => response.json())
    .then(data => console.log(data))
}

function encontrarOdontologo(id){
    const promesa = (
    fetch(endpoint + "/" + id)
    .then(response => response.json())
    .then(data => data)
    )
    return promesa;
}

export {buscarTodos, eliminarOdontologo, crearOdontologo, actualizarOdontologo, encontrarOdontologo};
