import React from 'react';

import './styles.css'

import Repository from '../Repository';
const Repositories = ({repositories, handleClickRepository}) =>{
    return (
        <>
                <div className="container">
                    {
                        repositories.map(repo => (<Repository key={repositories.id} repo={repo} handleClickRepository={handleClickRepository}/>))
                    }
                </div>
        </>
    );
}

export default Repositories ;