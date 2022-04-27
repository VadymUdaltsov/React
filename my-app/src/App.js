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
        <div>
          <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='img_bich' className='img-bich' />
        </div>
        <div>
          <img src='https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg' alt='user' className='img-user' />
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              Post 1
            </div>
            <div>
              Post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





export default App;
