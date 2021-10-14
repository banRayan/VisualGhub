import React, { useState, useEffect } from 'react';

import './styles.css'
import Repositories from '../../components/Repositories';
import Header from '../../components/Header';

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
        <main className="home-container">
            <section className="left-section">
                <Header />  
            </section>
            <section className="main-section">
                <Repositories repositories={repositories}/>
            </section>
        </main>
    )
}

export default Home;