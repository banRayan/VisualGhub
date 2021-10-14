import React from 'react';

import './styles.css'

import Repository from '../Repository';
const Repositories = ({repositories}) =>{
    return (
        <>
                <div className="container">
                    {
                        repositories.map(repo => (<Repository repo={repo}/>))
                    }
                </div>
        </>
    );
}

export default Repositories ;