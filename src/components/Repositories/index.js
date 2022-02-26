import React from 'react';

import { Container, List } from './styles';
import Repository from '../Repository';
// import './styles.css'

const Repositories = ({repositories, handleClickRepository}) =>{
    return (
        <>
                <Container>
                    {
                        repositories.map(repo => (
                        <List key={repo.id}>
                            <Repository repo={repo} handleClickRepository={handleClickRepository}/>
                        </List>)
                        )
                    }
                </Container>
        </>
    );
}

export default Repositories ;