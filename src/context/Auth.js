import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [ data, setData] = useState([]);
    const [username, setUsername] = useState('banRayan');
    const [repository, setRepository] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`https://api.github.com/users/${username}`)
                .then(response => setData(response.data))
        }
        fetchData()
    },[username])


    useEffect(() => {
        const fetchRepository = async () => {
            await axios.get(`https://api.github.com/users/${username}/repos`)
                .then(response => setRepository(response.data))
        }
        fetchRepository()
    }, [username])

    return (
    <AuthContext.Provider 
     value={{
         data,
         setData,
         username,
         setUsername,
         repository
        }}
     >
         {props.children}
     </AuthContext.Provider>
  )
}


export const useAuth = () => useContext(AuthContext);