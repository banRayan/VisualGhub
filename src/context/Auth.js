import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [ data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('https://api.github.com/users/banRayan')
                .then(response => setData(response.data))
        }
        fetchData()
    },[])

  return (
    <AuthContext.Provider 
     value={{
         data,
         setData
        }}
     >
         {props.children}
     </AuthContext.Provider>
  )
}


export const useAuth = () => useContext(AuthContext);