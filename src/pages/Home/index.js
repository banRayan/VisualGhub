import React, { useState, useEffect } from 'react';

import './styles.css'
import Repositories from '../../components/Repositories';

const Home = () =>{
    const [repositories, setRepositories] = useState([]);

    useEffect(()=> {
        const fetchData = async () =>{
            const response = await fetch('https://api.github.com/users/banRayan/repos');
            const data = await response.json();
            setRepositories(data);
        }
        fetchData();
    }, [])

    return (
        <main>
            <section className="container">
                <Repositories repositories={repositories}/>
            </section>
        </main>
    )
}

export default Home;