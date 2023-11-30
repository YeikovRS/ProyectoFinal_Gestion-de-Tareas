import React from 'react'
import { useState } from "react"

const Formulario = ({ serUser }) => {
    const [nombre, setNombre] = useState("")
    const [Apellido, setApellido] = useState("")
    const [edad, setEdad] = useState("")
    const [error, setError] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault()

        if (nombre === "" || Apellido === "") {
            setError(true)
            return
        }

        setError(true)

        setUser([nombre])
    }

    return (
        <div>
            <h1 className='test-2xl'>Registrate</h1>

            <form className='formulario mx-4 my-4 pb-10'>
                <div>
                    <h2>Nombre</h2>
                    <input className='text-black' type="text"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div>
                <h2>Apellido</h2>
                <input className='text-black' type="text"
                    value={Apellido}
                    onChange={e => setApellido(e.target.value)}
                />
                </div>
                <div>
                <h2>Edad</h2>
                <input className='text-black' type="number"
                    value={edad}
                    onChange={e => setEdad(e.target.value)}
                />
                </div>
                
                <button className='border-black'>Registrar</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </div>
    )
}

export default Formulario