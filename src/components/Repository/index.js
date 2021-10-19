import React from 'react';

import './styles.css';

const Repository = ({repo, handleClickRepository}) => {
    const getRepositoryStatus = () =>{
        const status = repo.private;
        return !status ? 'Public' : 'Private'
    }

    return ( 
        <button onClick={() => handleClickRepository(repo.id)} className="repository-container">
            <div className="status-container">
                {repo.name}
                <div className="repository-status">{getRepositoryStatus()}</div>
            </div>
            <div className="techs">{repo.language}</div>
        </button>
    );
}

export default Repository;