import React, { useState, useEffect} from 'react';
import { useAuth } from '../../context/Auth';

import { 
    Container,
    UserContainer,
    MainContainer,
    PageContainer,
    Text, LinkContainer,
    DescriptionArea,
    DescriptionContainer,
    Description,
    Link,
    Title,
    GridContainer,
    InfoArea,
    InfoContainer,
    CounterArea,
    CounterContainer,
    CountContainer,
    Count,
    NoClick, 
    NoClickContainer,
    NoDescription,
} from './styles'
    
import ErrorBoundary from '../../components/ErrorBoundary';
import Repositories from '../../components/Repositories';
import EndMenu from '../../components/EndMenu';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import { FiLink2, FiShare2, FiStar, FiInfo} from "react-icons/fi";
import Warn from '../../components/Warn';

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
        <ErrorBoundary>
            <Container>
                <Menu/>
                <MainContainer>
                    <Header/>
                    <PageContainer>
                        {
                            repoData.length === 0 
                            ?
                            <NoClickContainer>
                                    <Warn>Click on any item in the repository list</Warn>
                                    <UserContainer>
                                        <Repositories repositories={repositories} handleClickRepository={handleClickRepository}/>
                                    </UserContainer>
                            </NoClickContainer>
                            :
                            <>
                            <GridContainer>
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
                                    {   repoData.description === null | repoData.description === "" 
                                        ?
                                        <NoDescription>
                                            <p>No description</p>
                                        </NoDescription>
                                        :
                                        <Description>{repoData.description}</Description>
                                    }
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
                        </GridContainer>
                        <UserContainer>
                            <Repositories repositories={repositories} handleClickRepository={handleClickRepository}/>
                        </UserContainer>
                        </>
                        }
                        
                    </PageContainer>
                </MainContainer>
                <EndMenu />
            </Container>
        </ErrorBoundary>
    )
}

export default Home;