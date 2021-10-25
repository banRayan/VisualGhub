import React, { useState, useEffect } from 'react';

import './styles.css'
import Repositories from '../../components/Repositories';
import Login from '../../components/Login';
import User from '../../components/User';

const Home = () =>{
    const [repositories, setRepositories] = useState([]);
    const [user, setUser] = useState('banRayan');

    useEffect(()=> {
        const fetchData = async () =>{
            const response = await fetch(`https://api.github.com/users/${user}/repos`);
            const data = await response.json();
            setRepositories(data);
        }
        fetchData();
    }, [user])

    const handleClickRepository = (id) => {  
        const infoRepository = document.querySelector('.info-repository');
        const thisRepository = repositories.filter(repo => {
            return repo.id === id;
        })
        
        const newRepository = thisRepository[0];  
        infoRepository.innerHTML=''      
        addInfoReporitory(newRepository, infoRepository);
    }

    const addInfoReporitory = (newRepo, infoRepository) => {
        const informations = document.createElement('div');
        informations.setAttribute('class','informations');
       
        informations.innerHTML = 
        `
        <h1>${newRepo.name}</h1>
        <p>${newRepo.description}</p>
        `;

        infoRepository.appendChild(informations);
    }

    const handleUserAddition = (user) => {
        setUser(user);
    }

    return (
        <main className="home-container">
            <section className="header">
                <User user={user} />
                <Login handleUserAddition={handleUserAddition}/> 
            </section>
            <section className="main-section">
                <Repositories repositories={repositories} handleClickRepository={handleClickRepository}/>
                <div className="info-repository"></div>
            </section>
            <section className="right-section">
            </section> 
        </main>
    )
}

export default Home;