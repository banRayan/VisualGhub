import React from 'react';
import { FiGithub } from "react-icons/fi";
import './styles.css';

export const PrimaryLogin = () => {
  return (
    <main className='primarylogin-container'>
        <div className='heading-container'>
            <div className='heading'>
                <div className='title'>Enter your Github<br/> username</div>
                <div className='description'>With your username we can access your gitHub data</div>
            </div>
            <div className='logo'>VisualGit</div>
        </div>
        <div className='input-container'>
            <div className='input-field'>
              <h4><FiGithub/></h4>
              <input type='text' className='input' placeholder='username'></input>
            </div>
        </div>
        <div className='button-container'>
          <button>Access</button>
          <p>Don't have an account?<br/> <a target="_blank" rel="noreferrer" href="https://github.com/">Register Github</a></p>
        </div>
    </main>
  )
}
