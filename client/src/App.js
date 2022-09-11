import './App.css';
import React from 'react'
import { useEffect } from 'react';
import{ Home } from './components/Home'
import {Header } from './components/Header'
import {Signup } from './components/Signup'
import {Login } from './components/Login'
import {Account} from './components/Account'
import {useState} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import axios from 'axios';


function App(props) {
  
  const [recentPostArray, setRecentPostArray] = useState([])
  const [logged, setLogged] = useState(false)
  const [loggedUser, setLoggedUser] = useState(null)

  const getRecentPostArray = async ()=>{

    const response = await axios.get('http://localhost:3001/api/recentPosts')
    setRecentPostArray(response.data);
  }

  useEffect(()=>{
    getRecentPostArray()
  },[])

  return (
    <div className="App">
      <Header {...props} logged = {logged} loggedUser = {loggedUser} setLogged = {setLogged} setLoggedUser = {setLoggedUser} navigate ={useNavigate()}/>
      <Routes>
        <Route exact path="/" element={<Home {...props} recentPostArray = {recentPostArray} setRecentPostArray = {setRecentPostArray} logged = {logged} loggedUser = {loggedUser} setLogged = {setLogged} setLoggedUser = {setLoggedUser} navigate ={useNavigate()}/>}/>  
        <Route exact path="/signup" element={<Signup {...props} logged = {logged} loggedUser = {loggedUser} setLogged = {setLogged} setLoggedUser = {setLoggedUser} navigate ={useNavigate()}/>}/> 
        <Route exact path="/login" element = {<Login {...props} logged = {logged} loggedUser = {loggedUser} setLogged = {setLogged} setLoggedUser = {setLoggedUser} navigate ={useNavigate()}/> }/>      
        <Route exact path="/account" element = {<Account {...props} getRecentPostArray = {getRecentPostArray} logged = {logged} loggedUser = {loggedUser} setLogged = {setLogged} setLoggedUser = {setLoggedUser} navigate ={useNavigate()}/> }/>      
      </Routes>
    </div>
  );
}

export default App;




//////////////////////////NEXT IS MAKE THE RECENT POST ARRAY GET INITALIZED WITH A GET REQUEST OF THE 20 MOST RECENT POSTS so that it is there everytime the page is loaded
