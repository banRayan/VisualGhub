import React from 'react';

import './styles.css';

const Repository = ({repo}) => {
    const getRepositoryStatus = () =>{
        const status = repo.private;
        return !status ? 'Public' : 'Private'
    }

    return ( 
        <div className="repository-container">
            <div className="status-container">
                {repo.name}
                <div className="repository-status">{getRepositoryStatus()}</div>
            </div>
            <div className="techs">{repo.language}</div>
        </div>
    );
}

export default Repository;