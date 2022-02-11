import React, { useState, useEffect } from 'react';

import Repositories from '../../components/Repositories';
import Login from '../../components/Login';
import User from '../../components/User';
import './styles.css'
import Menu from '../../components/Menu';

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
        const descriptionContainer = document.querySelector('.description-container');
        const infosContainer = document.querySelector('.infos-container');
        const dataContainer = document.querySelector('.data-container');

  
        const repoDescription = `
                                <div>
                                    <h1>${repo.name}</h1>
                                    <p>${repo.description}</p>
                                </div>
                                `;
        
        const repoInfos = `
                            <div class="link-container">
                                <a href="${repo.html_url}" rel="external" target="_blank" class="link">👉 access the repository here 📁</>
                            </div>
                          `;

        const repoData = `
                        <div class="repoCount">
                            <div class="cardCount">
                                <p>${repo.forks}</p>
                                <div class="cardIcon">
                                </div>
                            </div>
                            <div class="cardCount">
                                <p>${repo.watchers_count}</p>
                                <div class="cardIcon"></div>
                            </div>
                            <div class="cardCount">
                                <p>${repo.stargazers_count}</p>
                                <div class="cardIcon"></div>
                            </div>
                        </div>
                        `;
        descriptionContainer.innerHTML = repoDescription;
        infosContainer.innerHTML = repoInfos;
        dataContainer.innerHTML = repoData;
    }
    
    return (
        <main className="home-container">
            <header className="header">
                <User user={user} />
                <Login handleUserAddition={handleUserAddition}/> 
            </header>
            <section className="menu-section">
                <Menu /> 
            </section>
            <section className="main-section">
                <Repositories repositories={repositories} handleClickRepository={handleClickRepository}/>
            </section>
            <section className="information-section">
                <div className="repository-description">
                    <div className="title-container">
                        <p >Description</p>
                    </div>
                    <div className="description-container"></div>
                </div>

                <div className="repository-infos">
                    <div className="title-container">
                        <p>information</p>
                    </div>
                    <div className="infos-container"></div>
                </div>
                
                <div className='repository-data'>
                    <div className="title-container">
                        <p>Score</p>
                    </div>
                    <div className="data-container"></div>
                </div>
            </section> 
        </main>
    )
}

export default Home;