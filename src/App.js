import React from 'react'
import PostForm from './components/PostForm.js'

function App() {
  return (
    <>
       <img src = "data:image/png;base64,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">
       </img>
        <h1>
          no arsenal 
          <img src = "https://resources.premierleague.com/premierleague/badges/50/t3.png"></img>
        </h1>
        <h2><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87gTqawJmlD6zUtb5ZPm0AN7BDDnVr4_oVfCXNH4lnQ&s"></img></h2>
      <section>
          <PostForm />
      </section>
    </>
  );
}

export default App;
