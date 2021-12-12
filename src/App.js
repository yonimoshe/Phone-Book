import AddPersonForm from './components/AddPersonForm';
import './App.css';
import { useEffect } from 'react/cjs/react.development';
import React from 'react';

function App() {

  useEffect(()=>{
    if (localStorage.getItem("persons_list") === null) {
      localStorage.setItem('persons_list', JSON.stringify([]));
    }
  },[])

  console.log('<App /> component rendered');
  return (
    <div className="App">
       <h1>Phone Book App</h1>
       <AddPersonForm />
    </div>
  );
}

export default App;
