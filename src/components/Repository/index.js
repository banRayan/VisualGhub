import React from 'react';
import { useAuth } from '../../context/Auth';

import RepositoryItem from '../RepositoryItem';
import User from '../User';

import { 
    Container,
    Item,
    List,
} from './styles';

const Repository = ({ handleClickRepository }) => {

    const { repository } = useAuth();
    return(
        <Container>
            <List>
                {
                    repository.map(repo => 
                        <Item key={repo.id}>
                            <RepositoryItem repo={repo} handleClickRepository={handleClickRepository}/>
                        </Item>
                    )
                }
            </List>
        </Container>
    )
}

export default Repository;