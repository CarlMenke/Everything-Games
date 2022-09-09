import './App.css';
import React from 'react'
import{ Home } from './components/Home'
import {Header } from './components/Header'
import {Signup } from './components/Signup'
import {Login } from './components/Login'
import {Account} from './components/Account'
import {useState} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'


function App(props) {
  
  const [logged, setLogged] = useState(false)
  const [loggedUser, setLoggedUser] = useState(null)

  return (
    <div className="App">
      <Header {...props} logged = {logged} loggedUser = {loggedUser} setLogged = {setLogged} setLoggedUser = {setLoggedUser} navigate ={useNavigate()}/>
      <Routes>
        <Route exact path="/" element={<Home {...props} logged = {logged} loggedUser = {loggedUser} setLogged = {setLogged} setLoggedUser = {setLoggedUser} navigate ={useNavigate()}/>}/>  
        <Route exact path="/signup" element={<Signup {...props} logged = {logged} loggedUser = {loggedUser} setLogged = {setLogged} setLoggedUser = {setLoggedUser} navigate ={useNavigate()}/>}/> 
        <Route exact path="/login" element = {<Login {...props} logged = {logged} loggedUser = {loggedUser} setLogged = {setLogged} setLoggedUser = {setLoggedUser} navigate ={useNavigate()}/> }/>      
        <Route exact path="/account" element = {<Account {...props} logged = {logged} loggedUser = {loggedUser} setLogged = {setLogged} setLoggedUser = {setLoggedUser} navigate ={useNavigate()}/> }/>      
      </Routes>
    </div>
  );
}

export default App;
