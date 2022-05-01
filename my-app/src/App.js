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
            <Route path='/dialogs/*' element={<Dialogs />} /> {/* уникальная компонента маршрутизатора */} {/* Если у нас есть вкладки в ссылке dialogs и путь к ним прописан в url как /dialogs/messages и т.п то в path нужно ставить /dialogs/*. Звёздочка это важно */}
            <Route path='/content' element={<Content />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

/* 
<BrowserRouter>
  <Routes>
    <Route path='/name' element={<component-name />} />
    <Route path='/name' element={<component-name />} />
  </Routes>
</BrowserRouter>

*/





export default App;
