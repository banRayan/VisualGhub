import React, { useState } from 'react';

import { useAuth } from '../../context/Auth';

import { 
    Container,
    Main,
    WarnContainer,
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
            <WarnContainer>
                <Warn>Click on any item in the repository list</Warn>
                <Warn>Scroll to get access to non-vibles itens</Warn>
            </WarnContainer>
                <Repository handleClickRepository={handleClickRepository}/>
            </Main>
            <Use />
        </Container>
    )
}

export default HomePage;