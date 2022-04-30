import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Content from './components/Content.jsx';
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
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}





export default App;
