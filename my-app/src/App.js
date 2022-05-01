import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

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
    <BrowserRouter> {/* обязательный тег для маршрутизатора */}
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs' element={<Dialogs />} /> {/* уникальная компонента маршрутизатора */}
            <Route path='/content' element={<Content />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}





export default App;
