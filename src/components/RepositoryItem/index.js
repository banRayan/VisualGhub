import React from 'react';

import {
    Container,
    StatusContainer,
    Techs
} from './styles';

const RepositoryItem = ({ repo, handleClickRepository }) => {

    return (
        <Container onClick={() => handleClickRepository(repo.id)}>
            <StatusContainer>
                {repo.name}
            </StatusContainer>
            <Techs>{repo.language}</Techs>
        </Container>
    );
}

export default RepositoryItem;