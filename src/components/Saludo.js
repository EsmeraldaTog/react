import React from 'react'

const Saludo = (props) => {
  return (

    <h1 className= "tracking-wide bg-gradient-to-r from-cyan-500 to-blue-500"> Bienvenido {props.nombre} </h1>
    
  )
}

export default Saludo