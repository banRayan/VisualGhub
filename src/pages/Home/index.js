import React, { useState, useEffect} from 'react';
import { Container, UserContainer, Text, LinkContainer, DescriptionArea, DescriptionContainer, Description,  Link, Title, MainContainer, InfoArea, InfoContainer, CounterArea, CounterContainer, CountContainer, Count} from './styles'
import { useAuth } from '../../context/Auth';

import Repositories from '../../components/Repositories';
import User from '../../components/User';
import Menu from '../../components/Menu';

import { FiLink2, FiShare2, FiStar, FiInfo} from "react-icons/fi";
import EndMenu from '../../components/EndMenu';

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
        const  [repo]  = repositories.filter( repo => repo.id === id);
        setRepoData(repo)
    }


    return (
        <Container>
            <Menu/>
            <UserContainer>
                <User/>
                <Repositories repositories={repositories} handleClickRepository={handleClickRepository}/>
            </UserContainer>
            <MainContainer>
                <InfoArea>
                    <InfoContainer>
                        <Title>{repoData.name}</Title>
                        <LinkContainer>
                            <h3><FiLink2/></h3>
                            <Link href={repoData.html_url} rel='external' target='_blank'>
                                <Text>Click here to access the repository</Text>
                            </Link>
                        </LinkContainer>
                    </InfoContainer>
                </InfoArea>
                <DescriptionArea>
                    <DescriptionContainer>
                        <Description>{repoData.description}</Description>
                    </DescriptionContainer>
                </DescriptionArea>
                <CounterArea>
                    <CounterContainer>
                        <CountContainer>
                            <Count>{repoData.forks_count}</Count>
                            <h4><FiShare2/></h4>
                        </CountContainer>
                        <CountContainer>
                            <Count>{repoData.stargazers_count}</Count>
                            <h4><FiStar/></h4>
                        </CountContainer>
                        <CountContainer>
                            <Count>{repoData.open_issues_count}</Count>
                            <h4><FiInfo/></h4>
                        </CountContainer>
                    </CounterContainer>
                </CounterArea>
            </MainContainer>
            <EndMenu />
        </Container>
    )
}

export default Home;