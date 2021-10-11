import React from 'react';

import './styles.css';

const Repository = ({repo}) => {
    console.log(repo)
    return ( 
        <div className="repository-container">{repo.name}</div>
    );
}

export default Repository;