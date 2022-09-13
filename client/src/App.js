import './App.css';
import React from 'react'
import { useEffect } from 'react';
import{ Home } from './components/Home'
import {Header } from './components/Header'
import {Signup } from './components/Signup'
import {Login } from './components/Login'
import {Account} from './components/Account'
import {Discs} from './components/Discs'
import {useState} from 'react'
import {Route, Routes, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';
import { DiscDetails } from './components/DiscDetails';


function App(props) {
  

  let params = useParams()
  const [recentPostArray, setRecentPostArray] = useState([])
  const [logged, setLogged] = useState(false)
  const [loggedUser, setLoggedUser] = useState(null)
  const [discsArray , setDiscsArray] = useState(null)
  const [discsArrayAll , setDiscsArrayAll] = useState(null)
  const [selectedDisc, setSelectedDisc] = useState(null)
  const [currTopicArray, setCurrTopicArray] = useState([])

  const [possiblePages, setPossiblePages] = useState([])
  const [currPage, setCurrPage] = useState(1)
  const [searchDiscArray, setSearchDiscArray] = useState([])
  const [searchFilter, setSearchFilter] = useState({
    brand:false,category:false,speed:false,glide:false,turn:false,fade:false,stability:false,
  })


  useEffect(()=>{


    let discPage = [];


    if(discsArrayAll !== null){

      let filteredArray = discsArrayAll.filter((disc)=>{
        return disc
      })

      let numPages = Math.ceil(filteredArray.length / 40) ;


      setPossiblePages(numPages)


      for(let i = currPage * 40 - 40; i < currPage * 40; i++){
        if(filteredArray[i]){
        discPage.push(filteredArray[i])
        }
      }

      setSearchDiscArray(discPage)


    }



  },[discsArrayAll,currPage])


  const getDiscs = async ()  =>{
      const response = await axios.get('https://discitapi.herokuapp.com/disc')

      let discPage = [];

      for(let i = 0 ; i < 20; i++){
        discPage.push(response.data[i])
      }

      setDiscsArrayAll(response.data)
      setDiscsArray(discPage)
  }






  const getRecentPostArray = async ()=>{

    const response = await axios.get('http://localhost:3001/api/recentPosts')
    setRecentPostArray(response.data);
  }

  const getCurrTopicPostArray = async () =>{
    const response = await axios.get(`http://localhost:3001/api/posts-by-topic/${selectedDisc.name_slug}`)

    setCurrTopicArray(response.data)
  }

  useEffect(()=>{
    getRecentPostArray()
    getDiscs()
  },[])

  useEffect(()=>{

    if(selectedDisc !== null){
    getCurrTopicPostArray();
    }
    
  },[selectedDisc])

  console.log('discsarray',discsArray)
    return (
      <div className="App">
        <Header {...props} logged = {logged} loggedUser = {loggedUser} setLogged = {setLogged} setLoggedUser = {setLoggedUser} navigate ={useNavigate()}/>
        <Routes>

          <Route exact path="/" element={<Home {...props} 
            setSelectedDisc = {setSelectedDisc} 
            getRecentPostArray = {getRecentPostArray} 
            getDiscs = {getDiscs} 
            discsArray = {discsArray} 
            setDiscsArray={setDiscsArray} 
            recentPostArray = {recentPostArray} 
            setRecentPostArray = {setRecentPostArray} 
            logged = {logged} loggedUser = {loggedUser} 
            setLogged = {setLogged} 
            setLoggedUser = {setLoggedUser} 
            navigate ={useNavigate()}/>}/>  


          <Route exact path="/signup" element={<Signup {...props} 
            logged = {logged} 
            loggedUser = {loggedUser} 
            setLogged = {setLogged} 
            setLoggedUser = {setLoggedUser} 
            navigate ={useNavigate()}/>}/> 


          <Route exact path="/login" element = {<Login {...props} 
            logged = {logged} 
            loggedUser = {loggedUser} 
            setLogged = {setLogged} 
            setLoggedUser = {setLoggedUser} 
            navigate ={useNavigate()}/> }/>      


          <Route eaxct path="/disc/details/:discName" element = {<DiscDetails {...props} 
            selectedDisc = {selectedDisc} 
            setSelectedDisc = {setSelectedDisc} 
            discsArray = {discsArray} 
            setDiscsArray={setDiscsArray} 
            navigate ={useNavigate()} 
            recentPostArray = {currTopicArray} 
            setRecentPostArray = {setCurrTopicArray} 
            getRecentPostArray = {getRecentPostArray} 
            style = {'view'}
            logged = {logged} loggedUser = {loggedUser} 
            setLogged = {setLogged} 
            setLoggedUser = {setLoggedUser} /> }/> 

          <Route eaxct path="/viewDiscs" element = {<Discs {...props} 
            selectedDisc = {selectedDisc} 
            setSelectedDisc = {setSelectedDisc} 


            discsArrayAll = {discsArrayAll}
            discsArray = {searchDiscArray} //change to searchDiscArray
            currPage = {currPage}
            setCurrPage = {setCurrPage}
            possiblePages = {possiblePages}

            setDiscsArray={setDiscsArray} 
            style={'view'}
            pageAble = {true}
            navigate ={useNavigate()} 
            recentPostArray = {currTopicArray} 
            setRecentPostArray = {setCurrTopicArray} 
            getRecentPostArray = {getRecentPostArray} 
            logged = {logged} loggedUser = {loggedUser} 
            setLogged = {setLogged} 
            setLoggedUser = {setLoggedUser} /> }/> 


          <Route eaxct path="/disc/details/:discName" element = {<DiscDetails {...props} 
            selectedDisc = {selectedDisc} 
            setSelectedDisc = {setSelectedDisc} 
            discsArray = {discsArray} 
            setDiscsArray={setDiscsArray} 
            navigate ={useNavigate()} 
            recentPostArray = {currTopicArray} 
            setRecentPostArray = {setCurrTopicArray} 
            getRecentPostArray = {getRecentPostArray} 
            logged = {logged} loggedUser = {loggedUser} 
            setLogged = {setLogged} 
            setLoggedUser = {setLoggedUser} /> }/> 


          <Route exact path="/account" element = {<Account {...props} 
            getRecentPostArray = {getRecentPostArray} 
            logged = {logged} 
            loggedUser = {loggedUser} 
            setLogged = {setLogged} 
            setLoggedUser = {setLoggedUser} 
            navigate ={useNavigate()}/> }/>   

        </Routes>
      </div>
    );
}

export default App;




//////////////////////////NEXT IS MAKE THE RECENT POST ARRAY GET INITALIZED WITH A GET REQUEST OF THE 20 MOST RECENT POSTS so that it is there everytime the page is loaded
