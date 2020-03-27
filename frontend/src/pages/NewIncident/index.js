import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

/* Importação de Estilos CSS */
import './styles.css';
/* Importação de Imagens */
import logoImg from '../../assets/logo.svg';
/* Importação de Icone */
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';


export default function Newincident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value
        };

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            history.push("/profile");
        } catch{
            alert("Não foi Possível Cadastrar Novo Caso");
        }
    }
    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Logo" />
                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar hérois que possam resolvê-lo.</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size="16" color="#e02041" />
                    Voltar para Home
                </Link>
            </section>

            <form onSubmit={handleNewIncident}>
                <input 
                placeholder="Titulo do Caso" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                <textarea 
                placeholder="Descrição do Caso" 
                value={description}
                onChange={e => setDescription(e.target.value)}
                />
                <input 
                placeholder="Valor em Reais" 
                value={value}
                onChange={e => setValue(e.target.value)}
                />
                <button className="button">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}