import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Quiz from './components/quiz/quiz';
import Header from './components/header/header';
import Result from './components/result/result';



function App() {
  return (
    <div className="App">
        <Header/>
        <Quiz/>
        <Result/>
    </div>
  );
}

export default App;
