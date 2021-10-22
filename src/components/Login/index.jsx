import React, {useState} from 'react'
// import { FiUser } from "react-icons/fi";

const Login = ({handleUserAddition}) => {
    const [inputUser, setInputUser] = useState('')
    
    const handleInputChange = (e) => {
        // console.log(e.target)
        setInputUser(e.target.value); // pega o valor do campo de entrada
        
    }

    const handleInputUserClick = () => {
        handleUserAddition(inputUser);
    }

    return (
        <div className="login-container">
            <input 
                onChange={handleInputChange}
                type="text" 
                value={inputUser}
                className="user-field"
            />
            <button onClick={handleInputUserClick}>Entrar</button>
        </div>
    )
}

export default Login;