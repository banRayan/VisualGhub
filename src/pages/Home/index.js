import React, { useState, useEffect } from 'react';

import './styles.css'
import Repositories from '../../components/Repositories';
import Header from '../../components/Header';

const Home = () =>{
    const [repositories, setRepositories] = useState([]);

    useEffect(()=> {
        const fetchData = async () =>{
            const response = await fetch('https://api.github.com/users/banRayan/repos');
            const data = await response.json();
            setRepositories(data);
        }
        fetchData();
    }, [])

    const handleClickRepository = (id) => {
        const thisRepository = repositories.filter(repo => {
            return repo.id === id;
        })

        const newRepository = thisRepository[0];
        
        const infoRepository = document.querySelector('.info-repository');
        const informations = document.createElement('div');
        informations.innerHTML = 
        `
        <h1>${newRepository.name}</h1>
        <p>${newRepository.description}</p>
        `;

        infoRepository.appendChild(informations);
    }

    return (
        <main className="home-container">
            <section className="left-section">
                <Header />  
            </section>
            <section className="main-section">
                <Repositories repositories={repositories} handleClickRepository={handleClickRepository}/>
                <div className="info-repository"></div>
            </section>
        </main>
    )
}

export default Home;