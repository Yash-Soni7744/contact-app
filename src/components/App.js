import React from 'react';
import './App.css';
import Header from "./header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"

function App() {
  const contacts = [
    {
      "id":1,
      "name":"Yash",
      "email":"yashwardhan@gmail.com"
    },
    {
      "id":2,
      "name":"Om",
      "email":"om@gmail.com"
    }
  ]
  return (
    <div className='ui container'> 
      <Header/>
    <AddContact/>
    <br/>
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;