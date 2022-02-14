import React from 'react'
import PostForm from './components/PostForm.js'
import logo from './img/logo.png';
import Arsenal from './img/4senal.png';
import Ricky from './img/Ricky.png'

console.log(Arsenal);
console.log(logo);
console.log(Ricky);

function App() {
  const clickMe = () =>{
      alert(
      <img src={Ricky}/>
      )
  }
  return (
    <>
        <a target="_blank" href="https://www.premierleague.com/
"       role="menuitem">
        <img src={logo}/>
        </a>
        <h1>no arsenal</h1> 
        <a onClick={clickMe}>
        <img src={Arsenal}/>
        </a>
      <section>
          <PostForm />
      </section>
    </>
  );
}

export default App;
