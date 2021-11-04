import React from 'react';

import './styles.css'

import Repository from '../Repository';
const Repositories = ({repositories, handleClickRepository}) =>{
    return (
        <>
                <ul className="container">
                    {
                        repositories.map(repo => (
                        <li key={repo.id}>
                            <Repository repo={repo} handleClickRepository={handleClickRepository}/>
                        </li>)
                        )
                    }
                </ul>
        </>
    );
}

export default Repositories ;