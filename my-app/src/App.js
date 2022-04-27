import React from 'react';
import './App.css';
/* import Header from './js_import/header';
import Technologies from './js_import/technologies'; */

/* const App = () => {  разметка в App это компанента 
  return (
    <div>
      <Header />  вызов разметки Header в App 
      <Technologies />  Вызов разметки Technologies в App 
    </div>
  );
} */

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/2000px-NBC_logo.svg.png" alt="logo" />
      </header>
      <nav className='nav'>
        <div>
          <a href='#s'>Profile</a>
        </div>
        <div>
          <a href='#s'>Messages</a>
        </div>
        <div>
          <a href='#s'>News</a>
        </div>
        <div>
          <a href='#s'>Music</a>
        </div>
        <div>
          <a href='#s'>Settings</a>
        </div>
      </nav>
      <div className='content'>
        Main Content
      </div>
    </div>
  );
}





export default App;
