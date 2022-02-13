import React from 'react'
import PostForm from './components/PostForm.js'
import logo from './img/logo.png';
import Arsenal from './img/4senal.png';

console.log(Arsenal);
console.log(logo);

function App() {
  return (
    <>
        <img src={logo} alt="Logo" />
        <h1>no arsenal</h1>  
        <img src={Arsenal} alt="Aresnal" />
      <section>
          <PostForm />
      </section>
    </>
  );
}

export default App;
