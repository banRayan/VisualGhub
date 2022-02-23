import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [ data, setData] = useState([]);
    const [username, setUsername] = useState('banRayan');

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`https://api.github.com/users/${username}`)
                .then(response => setData(response.data))
        }
        fetchData()
    },[username])

    console.log(data)
    return (
    <AuthContext.Provider 
     value={{
         data,
         setData,
         setUsername
        }}
     >
         {props.children}
     </AuthContext.Provider>
  )
}


export const useAuth = () => useContext(AuthContext);