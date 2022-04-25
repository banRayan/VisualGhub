import React, { useState, useEffect } from 'react';

import { useAuth } from '../../context/Auth';

import { 
    Container,
} from './styles';

// import Settings from '../../components/Settings';
import Warn from '../../components/Warn';
import Repository from '../../components/Repository';
// import Men from '../../components/Men';
// import Use from '../../components/Use';



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
            <Repository handleClickRepository={handleClickRepository}/>
        </Container>
    )
}

export default HomePage;