import React, {useState} from 'react'
import { FiCheck } from "react-icons/fi";

import './styles.css'

const Login = ({handleUserAddition}) => {
    const [inputUser, setInputUser] = useState('')
    
    const handleInputChange = (e) => {
        // console.log(e.target)
        setInputUser(e.target.value); // pega o valor do campo de entrada
        
    }

    const handleInputUserClick = () => {
        try{
            if(inputUser === ''){
                alert('insira um nome')
            }else{
                handleUserAddition(inputUser);
                setInputUser('')
            }
        }catch(error){
            console.log(error.message)
        }
    }

    return (
        <div className="login-container">
            <input 
                onChange={handleInputChange}
                type="text" 
                value={inputUser}
                className="user-field"
            />
            <button onClick={handleInputUserClick}><div className="login-button-container"><FiCheck/></div></button>
        </div>
    )
}

export default Login;