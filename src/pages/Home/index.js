import React, { useState, useEffect} from 'react';
import { CardCount, Container, UserContainer, DataContainer, DescriptionArea, DescriptionContainer, Description, Header, InfosContainer, Link, Main, MenuContainer, ParamentContainer, RepoData, RepoDescription, RepoInformation, Title, MainContainer, RightBar, InfoArea, InfoContainer } from './styles'
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
            <Menu/>
            <UserContainer>
                <User/>
                <Repositories repositories={repositories} handleClickRepository={handleClickRepository}/>
            </UserContainer>
            <MainContainer>
                <DescriptionArea>
                    <DescriptionContainer>
                        <Description>{repoData.description}</Description>
                    </DescriptionContainer>
                </DescriptionArea>
                <InfoArea>
                    <InfoContainer>
                        <Title>{repoData.name}</Title>
                    </InfoContainer>
                </InfoArea>
            </MainContainer>
            <RightBar/>
        </Container>
    )
}

export default Home;