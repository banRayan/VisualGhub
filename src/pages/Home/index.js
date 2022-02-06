import React, { useState, useEffect } from 'react';

import Repositories from '../../components/Repositories';
import Login from '../../components/Login';
import User from '../../components/User';
import './styles.css'

// import { VscRepoForked } from "react-icons/vsc";

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
        console.log(repo)
        const repoData = `
                                <div>
                                    <div>
                                        <h1>${repo.name}</h1>
                                        <p>${repo.description}</p>
                                    </div>
                                    <div class="repoCount">
                                        <div class="cardCount">
                                            <p>${repo.forks}</p>
                                        </div>
                                        <div class="cardCount">
                                            <p>${repo.watchers_count}</p>
                                        </div>
                                        <div class="cardCount">
                                            <p>${repo.stargazers_count}</p>
                                        </div>
                                    </div>
                                </div>
                                `
        displayArea.innerHTML = repoData;
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