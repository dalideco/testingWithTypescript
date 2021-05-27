import React,{FC,LegacyRef,useRef, useState} from 'react';
import Hello from './components/Hello'

import './App.css';

function App (): JSX.Element {
  
  const [hello, setHello] = useState<String>("hello world");


  return (
    <div className="App">
      <header className="App-header">
        <Hello>{hello}</Hello>
        <button onClick={()=>{setHello("hello no world")}}>
          click to not say hello
        </button>
      </header>
    </div>
  );
}

export default App;
