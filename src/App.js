import React, { useEffect, useState } from 'react';

function App(){
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const response = await fetch('https://api.github.com/users/banRayan/repos');
      const data = await response.json();

      console.log(data)
      setRepositories(data)
      
    }
    fetchData();
  }, []);

  useEffect(()=> {
    const favorited = repositories.filter(repo => repo.favorite)
    console.log(favorited)

    document.title = `Você tem ${favorited.length} favoritos`;
     
  }, [repositories])

  const handleFavorite = (id) => {
      const newRepositories = repositories.map(repo => {
        return repo.id === id ? {...repo, favorite: !repo.favorite} : repo
      });

      setRepositories(newRepositories)
  }

  return (
    <>
      <h1>Fetch API</h1>
      <ul>
        {
          repositories.map(repo => {
            return <li key={repo.id}>
              {repo.name}
              {repo.favorite && <span>(Favorited)</span>}
              <button onClick={()=> handleFavorite(repo.id)}>Favorite</button>
            </li>
          })
        }
      </ul>
    </>
  )
}

export default App;