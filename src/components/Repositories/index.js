import React from 'react';

import Repository from '../Repository';
const Repositories = ({repositories}) =>{
    console.log(repositories)
    return (
        <>
                <div>
                    {
                        repositories.map(repo => (<Repository repo={repo}/>))
                    }
                </div>
        </>
    );
}

export default Repositories ;