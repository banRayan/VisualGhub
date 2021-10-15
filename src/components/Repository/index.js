import React from 'react';

import './styles.css';

const Repository = ({repo}) => {
    const getRepositoryStatus = () =>{
        const status = repo.private;
        return !status ? 'Public' : 'Private'
    }

    const getUrlRepository = () => {
        const url = repo.url;
        console.log(url)
    }

    return ( 
        <button onClick={getUrlRepository} className="repository-container">
            <div className="status-container">
                {repo.name}
                <div className="repository-status">{getRepositoryStatus()}</div>
            </div>
            <div className="techs">{repo.language}</div>
        </button>
    );
}

export default Repository;