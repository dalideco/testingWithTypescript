import React,{FC,LegacyRef,useRef, useState} from 'react';
import Hello from './components/Hello'
import TransitionPage from './Pages/TransitionPage'
import TestingFramer from './Pages/TestingFramer'

import './App.css';
import TestingRedux from './Pages/TestingRedux';
import store from './store/store'
import { Provider } from "react-redux";

function App (): JSX.Element {
  
  const [hello, setHello] = useState<String>("hello world");


  return (
    <div className="App">
      <header className="App-header">
        {/* <Hello>{hello}</Hello>
        <button onClick={()=>{setHello("hello no world")}}>
          click to not say hello
        </button> */}
        {/* <TransitionPage/> */}
        {/* <TestingFramer/> */}
        <Provider store={store}>
          <TestingRedux/>
        </Provider> 
      </header>
    </div>
  );
}

export default App;
