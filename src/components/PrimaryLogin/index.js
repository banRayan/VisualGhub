import React from 'react';
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
            <input type='text' className='input'></input>
            <button className='login-button'>Access</button>
        </div>

    </main>
  )
}
