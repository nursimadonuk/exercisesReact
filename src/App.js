import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from './contact.js'
import Decrement from './decrement';
function App() {
  return (
    <div className="App">
      <ContactCard contactName = "Nursima" mobileNumber = "1234567" workPhoneNumber = "" email = "nd@gmail.com"/>
      <ContactCard contactName = "Will" mobileNumber = "9876543" workPhoneNumber = "7612945" email = "will@gmail.com"/>
      <ContactCard contactName = "Tony" mobileNumber = "24681357" workPhoneNumber = "2864378" email = "tony@gmail.com"/>
      <Decrement number = {5} />
    </div>
  );
}

export default App;
