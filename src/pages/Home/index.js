import React, { useState, useEffect} from 'react';
import { CardCount, Container, DataContainer, DescriptionContainer, Header, InfosContainer, Link, Main, MenuContainer, ParamentContainer, RepoData, RepoDescription, RepoInformation, Title } from './styles'
import { useAuth } from '../../context/Auth';

import Repositories from '../../components/Repositories';
import User from '../../components/User';
import Menu from '../../components/Menu';

import { FiLink2 } from "react-icons/fi";

const Home = () =>{
    const { username } = useAuth();
    const [repositories, setRepositories] = useState([]);
    const [ repoData, setRepoData ] = useState([]);
    
    useEffect(()=> {
        const fetchData = async () =>{
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const data = await response.json();
            setRepositories(data);
        }
        fetchData();
    }, [username])


    
    const handleClickRepository = ( id ) => {
        const [ repo ] = repositories.filter( repo => repo.id === id);
        setRepoData(repo)
        console.log(repoData)
    }
    
    return (
        <Container>
            <Header>
                <User/>
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
                    <DescriptionContainer>
                        <h1>{repoData.name}</h1>
                        <p>{repoData.description}</p>
                    </DescriptionContainer>
                </RepoDescription>
                <RepoInformation>
                    <Title>Information</Title>
                    <InfosContainer>
                        <Link href={repoData.html_url} rel="noreferrer" target="_blank"><h3><FiLink2/></h3>access the repository here</Link>
                    </InfosContainer>
                </RepoInformation>
                <RepoData>
                    <Title>Score</Title>
                    <ParamentContainer>
                            <CardCount>
                                <p>{repoData.forks}</p>
                                
                            </CardCount>
                            <CardCount>
                                <p>{repoData.watchers_count}</p>
                                
                            </CardCount>
                            <CardCount>
                                <p>{repoData.stargazers_count}</p>
                                
                            </CardCount>
                    </ParamentContainer>
                </RepoData>
            </DataContainer> 
        </Container>
    )
}

export default Home;