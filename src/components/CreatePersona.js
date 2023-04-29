import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const baseUrl = process.env.REACT_APP_BASE_URL


const CreateCategoria = () => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [genero, setGenero] = useState('');
    const [telefono, setTelefono] = useState('');
    const [edad, setEdad] = useState('');


    const redirect = useNavigate();


    // agregar sweetalert2

    const handleSubmit = async (e) => {
        e.preventDefault();
        const persona = { nombre, correo, genero, telefono, edad };
        await axios.post(baseUrl, persona);
        redirect('/');
    }







  
  return (
    <div className='row mt-3'>
        <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
            <div className='card'>
                <div className='card-header bg-dark text-white'> Añadir Categoria</div>
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
                                type='text' 
                                className='form-control' 
                                id='correo' 
                                name='correo' 
                                maxLength={50}
                                value={correo} 
                                required
                                onChange={(e) => setCorreo(e.target.value)} 
                                />
                                <label htmlFor='genero' className='form-label'>Genero</label>
                            <input 
                                type='text' 
                                className='form-control' 
                                id='genero' 
                                name='genero' 
                                maxLength={50}
                                value={genero} 
                                required
                                onChange={(e) => setGenero(e.target.value)} 
                                />
                                <label htmlFor='telefono' className='form-label'>Telefono</label>
                            <input 
                                type='text' 
                                className='form-control' 
                                id='telefono' 
                                name='telefono' 
                                maxLength={50}
                                value={telefono} 
                                required
                                onChange={(e) => setTelefono(e.target.value)} 
                                />
                                <label htmlFor='edad' className='form-label'>Edad</label>
                            <input 
                                type='text' 
                                className='form-control' 
                                id='edad' 
                                name='edad' 
                                maxLength={50}
                                value={edad} 
                                required
                                onChange={(e) => setEdad(e.target.value)} 
                                />
                            <br />
                            <div class="btn-group" role="group" aria-label="Default button group">
                                <button type="submit" class="btn btn-outline-primary">Agregar</button>
                            <a type="button" class="btn btn-outline-primary" href='../'>Cancelar</a>
                        </div>
                        </form>
                    </div>
                </div>
        </div>
    </div>

  )
}

export default CreateCategoria