import './App.css';
import React from 'react';
import NavBar from './components/navBar/navBar';
import Banner from './components/banner/banner';
import RowPost from './components/rowPost/rowPost';
import {Originals,actions}  from './urls/imgesUrl'
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost title='Netflix Originals' url={Originals}/>
     <RowPost title='Action' isSmall url={actions}/>
    </div>
  );
}

export default App;
