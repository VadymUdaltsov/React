import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import BestFriends from './components/BestFriends/BestFriends';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

/* const App = () => {  разметка в App это компанента 
  return (
    <div>
      <Header />  вызов разметки Header в App 
      <Technologies />  Вызов разметки Technologies в App 
    </div>
  );
} */

const App = (props) => {
  return (
    <BrowserRouter> {/* обязательный тег для маршрутизатора */}
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.dialogsPage} />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} />} />
            {/* уникальная компонента маршрутизатора */} {/* Если у нас есть вкладки в ссылке dialogs и путь к ним прописан в url как /dialogs/messages и т.п то в path нужно ставить /dialogs/*. Звёздочка это важно */}
            <Route path='/content' element={<Content state={props.state.profilePage} />} />
            <Route path='/friends' element={<BestFriends state={props.state.dialogsPage} />} />
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
