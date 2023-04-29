import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const baseUrl = process.env.REACT_APP_BASE_URL;


const EditarPersona = () => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [genero, setGenero] = useState('');
    const [telefono, setTelefono] = useState('');
    const [edad, setEdad] = useState('');
    const { id } = useParams();
    const redirect = useNavigate();

    useEffect(() => {
        const getPersona = async () => {
            const res = await axios.get(`${baseUrl}/${id}`); 
            setNombre(res.data.personaResponse.personas[0].nombre);
            setCorreo(res.data.personaResponse.personas[0].correo); 
            setGenero(res.data.personaResponse.personas[0].genero); 
            setTelefono(res.data.personaResponse.personas[0].telefono); 
            setEdad(res.data.personaResponse.personas[0].edad); 
        }
        getPersona();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const persona = { nombre, correo, genero, telefono, edad };
        await axios.put(`${baseUrl}/${id}`, persona);
        redirect('/');
    }


  return (
    <div className='row mt-3'>
    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
        <div className='card'>
            <div className='card-header bg-dark text-white'>Editar Persona</div>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='nombre' className='form-label'>Nombre</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='nombre' 
                            name='nombre' 
                            maxLength={50}
                            value={nombre} 
                            required
                            onChange={(e) => setNombre(e.target.value)} 
                            />
                        <label htmlFor='correo' className='form-label'>Correo</label>
                        <input
                            className='form-control'
                            id='correo'
                            name='correo'
                            maxLength={255}
                            value={correo}
                            required
                            onChange={(e) => setCorreo(e.target.value)}
                            />
                        <label htmlFor='genero' className='form-label'>Genero</label>
                        <input
                            className='form-control'
                            id='genero'
                            name='genero'
                            maxLength={255}
                            value={genero}
                            required
                            onChange={(e) => setGenero(e.target.value)}
                            />
                        <label htmlFor='telefono' className='form-label'>Telefono</label>
                        <input
                            className='form-control'
                            id='telefono'
                            name='telefono'
                            maxLength={255}
                            value={telefono}
                            required
                            onChange={(e) => setTelefono(e.target.value)}
                            />
                        <label htmlFor='edad' className='form-label'>Edad</label>
                        <input
                            className='form-control'
                            id='edad'
                            name='edad'
                            maxLength={255}
                            value={edad}
                            required
                            onChange={(e) => setEdad(e.target.value)}
                            />
                            <br />

                        <div class="btn-group" role="group" aria-label="Default button group">
                            <button type="submit" class="btn btn-outline-primary">Actualizar</button>
                            <a type="button" class="btn btn-outline-primary" href='../'>Cancelar</a>
                        </div>
           
                    </form>
                </div>
            </div>
    </div>
</div>
  )
}

export default EditarPersona    