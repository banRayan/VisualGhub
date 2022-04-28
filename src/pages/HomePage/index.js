import React, { useState } from 'react';

import { useAuth } from '../../context/Auth';
import { FiLink2, FiStar, FiGitBranch, FiGitPullRequest } from "react-icons/fi";

import { 
    Container,
    Main,
    WarnContainer,
    DataContainer,
    SectionName,
    ItemName,
    ItemContainer,
    DescriptionContainer,
    Title,
    Description,
    Link,
    CardsContainer,
    CardScore,
    Score,
    ScoreIcon,
} from './styles';

// import Settings from '../../components/Settings';
import Repository from '../../components/Repository';
import Warn from '../../components/Warn';
import Menu from '../../components/Menu';
import Use from '../../components/Use';



const HomePage = () => {
    const { repository } = useAuth();
    const [ itemData, setItemRepoData ] = useState([]);

    const handleClickRepository = ( id ) => {
        const  [repo]  = repository.filter( repo => repo.id === id);
        setItemRepoData(repo)
    }

    console.log(itemData)
    return(
        <Container>
            <Menu/>
            <Main>
            {
            itemData.length === 0 
        
            ?
                <WarnContainer>
                    <Warn>Click on any item in the repository list</Warn>
                    <Warn>Scroll to get access to non-vibles itens</Warn>
                </WarnContainer>

            : 
                <DataContainer>
                    <ItemContainer>
                        <SectionName>Repository Data</SectionName>
                        <Title>Name</Title>
                        <ItemName>{itemData.name}</ItemName>
                    </ItemContainer>
                    <DescriptionContainer>
                        <Title>Description</Title>
                        <Description>{itemData.description}</Description>
                    </DescriptionContainer>
                    <CardsContainer>
                        <CardScore>
                            <Score>{itemData.stargazers_count}</Score>
                            <ScoreIcon>
                                <FiStar />
                            </ScoreIcon>
                        </CardScore>
                        <CardScore>
                            <Score>{itemData.stargazers_count}</Score>
                            <ScoreIcon>
                                <FiGitBranch />
                            </ScoreIcon>
                        </CardScore>
                        <CardScore>
                            <Score>{itemData.open_issues_count}</Score>
                            <ScoreIcon>
                                <FiGitPullRequest />
                            </ScoreIcon>
                        </CardScore>
                    </CardsContainer>
                    <Link href={itemData.html_url} rel='external' target='_blank'><h2><FiLink2/></h2>Repository Link</Link>
                </DataContainer>
            }
                <Repository handleClickRepository={handleClickRepository}/>
            </Main>
            <Use />
        </Container>
    )
}

export default HomePage;