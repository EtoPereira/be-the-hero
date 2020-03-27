import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import logoImage from '../../assets/logo.svg';

import api from '../../service/api';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName');
    const history = useHistory();
    
    useEffect(()=> {
        api.get('profile', {headers: {
            Authorization: ongId,
        }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (error) {
            alert('Erro ao deletar o caso, tente novamente')
        }
    }
    function handleLogout() {
        localStorage.clear();
        history.push('/')
    }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImage} alt="Be The Hero"/>
    <span>Bem Vindo(a), {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="submit">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
             <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident=>(
                <li key={incident.id}>
                    <strong>Caso</strong>
                    <p>{incident.title}</p>

                    <strong>Descrição</strong>
                    <p>{incident.description}</p>

                    <strong>Valor</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                    <button onClick={()=>handleDeleteIncident(incident.id)} type="submit">
                        <FiTrash2 size={10} color="#E02041"/>
                    </button>
                </li>
                ))}
            </ul>
        </div>

    );
};