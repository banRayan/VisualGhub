import React, { useState, useEffect} from 'react';
import { Container, DataContainer, Header, Main, MenuContainer, RepoData, RepoDescription, RepoInformation, Title } from './styles'
import './styles.css'

import Repositories from '../../components/Repositories';
import User from '../../components/User';
import Menu from '../../components/Menu';

import { useAuth } from '../../context/Auth';

const Home = () =>{
    const { username } = useAuth();
    const [repositories, setRepositories] = useState([]);
    
    useEffect(()=> {
        const fetchData = async () =>{
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const data = await response.json();
            setRepositories(data);
        }
        fetchData();
    }, [username])


    
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
        <Container>
            <Header>
                <User user={username} />
            </Header>
            <MenuContainer>
                <Menu /> 
            </MenuContainer>
            <Main>
                <Repositories repositories={repositories} handleClickRepository={handleClickRepository}/>
            </Main>
            <DataContainer>
                <RepoDescription>
                    <Title>Description</Title>
                    <div className="description-container"></div>
                </RepoDescription>
                <RepoInformation>
                    <Title>Information</Title>
                    <div className="infos-container"></div>
                </RepoInformation>
                <RepoData>
                    <Title>Score</Title>
                    <div className="data-container"></div>
                </RepoData>
            </DataContainer> 
        </Container>
    )
}

export default Home;