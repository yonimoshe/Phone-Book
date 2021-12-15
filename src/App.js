import React, { useEffect, useState } from 'react';
import AddPersonForm from './components/AddPersonForm';
import PersonsList from './components/PersonsList';
import { toast } from 'react-toastify';

import './App.css';

toast.configure();

function App() {
  const [showForm, setShowForm] = useState(false);
  const [newContactAddedToggle, setNewContactAddedToggle] = useState(false);

  useEffect(()=>{
    if (localStorage.getItem("persons_list") === null) {
      localStorage.setItem('persons_list', JSON.stringify([]));
    }
  },[])

  const toggleFormHandler = () => {
    setShowForm(!showForm);
  }

  const headerBtn = !showForm ? <h1 onClick={toggleFormHandler}>Add New Contact</h1> : <h1 onClick={toggleFormHandler}>Done thanks</h1>
  return (
    <div className="App">
       { headerBtn }
       { showForm && <AddPersonForm 
                        setNewContactAddedToggle={setNewContactAddedToggle} 
                        newContactAddedToggle={newContactAddedToggle}
                        setShowForm={setShowForm}  /> }
       <PersonsList />
    </div>
  );
}

export default App;
