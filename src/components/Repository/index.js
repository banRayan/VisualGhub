import React from 'react';
import { Container, Status, StatusContainer, Techs } from './styles';

const Repository = ({repo, handleClickRepository}) => {
    const getRepositoryStatus = () =>{
        const status = repo.private;
        return !status ? 'Public' : 'Private'
    }

    return ( 
        <Container onClick={() => handleClickRepository(repo.id)}>
            <StatusContainer>
                {repo.name}
                <Status>{getRepositoryStatus()}</Status>
            </StatusContainer>
            <Techs>{repo.language}</Techs>
        </Container>
    );
}

export default Repository;