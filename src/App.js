import React from 'react'
import PostForm from './components/PostForm.js'
import logo from './img/PLlogo.png';
import Arsenal from './img/4senal.png';
import Ricky from './img/Ricky.png'

const App = () => {
  
  return (
    <>
      <a target="_blank" href="https://www.premierleague.com/" role="menuitem">
        <img src={logo}/>
      </a>
      <h1>no arsenal</h1>
      <a target="_blank" href= {Ricky} role="menuitem">
      <img src={Arsenal}/>
      </a>
      <section>
          <PostForm />
      </section>
    </>
  );
}

export default App;