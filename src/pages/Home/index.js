import React, { useState, useEffect } from 'react';

import './styles.css'
import Repositories from '../../components/Repositories';
import Login from '../../components/Login';
import User from '../../components/User';

const Home = () =>{

    const [user, setUser] = useState('banRayan');
    const [repositories, setRepositories] = useState([]);

    useEffect(()=> {
        const fetchData = async () =>{
            const response = await fetch(`https://api.github.com/users/${user}/repos`);
            const data = await response.json();
            setRepositories(data);
        }
        fetchData();
    }, [user])

    const handleUserAddition = (user) => {
        setUser(user);
    }

    const handleClickRepository = ( id ) => {
        const [repo] = repositories.filter( repo => repo.id === id);
        displayRepository(repo);
        
    }

    const displayRepository = (repo) => {
        const displayArea = document.querySelector('.info-repository');

        const informations = `<h1>${repo.name}</h1>
                              <p>${repo.description}</P.  `
        displayArea.innerHTML = informations;
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
            <section className="right-section"></section> 
        </main>
    )
}

export default Home;