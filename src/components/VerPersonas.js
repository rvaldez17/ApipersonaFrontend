import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const baseUrl = process.env.REACT_APP_BASE_URL

const VerPersonas = () => {

    const [personas, setPersonas] = useState([]);
   

    useEffect(() => { // se ejecuta cuando se carga el componente
        getPersonas();
    }, []);

    // con axios
    const getPersonas = async () => {
        const respuesta = await axios.get(baseUrl); 
        setPersonas(respuesta.data.personaResponse.personas);
    }

    const deletePersona = async (id) => {
        await axios.delete(baseUrl+'/'+id);
        getPersonas();
    }



  return (
    <div className='container'>
        <div className='row mt-3'>
            <div className='col-md-4 offset-md-4'>
                <div className='d-grid mx-auto'>
                    <Link to='/Create' className='btn btn-primary'>Añadir Categoria</Link>
                 </div>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                <table className='table table-hover'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Genero</th>
                            <th>Telefono</th>
                            <th>Edad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {personas.map((persona) => (
                            <tr key={persona.id}>
                                <td>{persona.nombre}</td>
                                <td>{persona.correo}</td>
                                <td>{persona.genero}</td>
                                <td>{persona.telefono}</td>
                                <td>{persona.edad}</td>
                                <td>
                                    <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                                        <Link to={`/edit/${persona.id}`} className='btn btn-warning'>Editar</Link>
                                        <button className='btn btn-danger' onClick={() => deletePersona(persona.id)}>Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>      
            </div>
        </div>
    </div>
    
  )
}

export default VerPersonas