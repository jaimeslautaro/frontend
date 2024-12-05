import React from 'react';
import '../styles/components/pages/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) =>{

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e =>{
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false){
            setFormData(initialForm);
        }
    }

    return(
        <main className="holder">
        <div className="contacto">
            <section>
                <h2>Contactanos</h2>
                <form className="formulario" action="/contacto" method="post" onSubmit={handleSubmit}>
                    <p>
                        <label for="nombre">Nombre y apellido:</label>
                        <input className='dato' type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ingrese su nombre"/>
                    </p>
                    <p>
                        <label for="email">Correo electrónico:</label>
                        <input className='dato' type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Ingrese su correo electrónico'/>
                    </p>
                    <p>
                        <label for="telefono">Teléfono:</label>
                        <input className='dato' type="tel" name="telefono" id="telefono" value={formData.telefono} onChange={handleChange} placeholder="+54 (11) 15 1234-5678"/>
                    </p>
                        <label for="mensaje">Cuéntenos más:</label>
                        <textarea className='dato' name="mensaje" id="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Ingrese aquí el motivo de su contacto"></textarea>
                    <p>
                        <input type="submit" value="Enviar"/>
                    </p>
                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
            </section>
            <section className="datos">
                <h2>Canales de contacto</h2>
                <ul>
                    <li>
                        <b>Teléfono</b>: +54 (11) 4000-0000
                    </li>
                    <li>
                        <b>Correo electrónico</b>: info@insumosit.com
                    </li>
                    <li>
                        <b>Facebook</b>: <a href="https://www.facebook.com">Insumos IT</a>
                    </li>
                    <li>
                        <b>X (Twitter)</b>: <a href="https://x.com">@insumosit</a>
                    </li>
                </ul>
            </section>
        </div>
    </main>
    );
}

export default ContactoPage;