import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'


import Quiz from './components/quiz/quiz';
import Header from './components/header/header';
import Counter from './components/counter/counter.js'



function App() {
  return (
    <Container>
      <div className="App">
          <Header/>
          <Quiz/>
          <Counter/>
      </div>
    </Container>
  );
}

export default App;
