import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
/* import Content from './components/Content/Content.jsx'; */
import Dialogs from './components/Dialogs/Dialogs.jsx'
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
      {/* <Content /> */}
      <Dialogs />
    </div>
  );
}





export default App;
