import React from 'react'
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react'
import axios from 'axios'

export const Signup = (props) =>{

    const [newUserName , setNewUser] = useState('')
    const [newUserPassword , setnewUserPassword] = useState('')
    const [newUserProfilePic , setUserProfilePic] = useState('')


    async function createUser(){
        if(newUserName != ''){
            console.log(`http://localhost:3001/api/newUser/${newUserName}/${newUserPassword}/${newUserProfilePic}`)
            const response = await axios.get(`http://localhost:3001/api/newUser/${newUserName}/${newUserPassword}/${newUserProfilePic}`)
            console.log(response)
        }

    }

    useEffect(()=>{
        createUser()
    },[newUserName])

    const handleNewUserClick = () =>{
        console.log(props)
        const newUserNameInput = document.getElementById('userNameInput').value;
        const newUserPasswordInput = document.getElementById('passwordInput').value;
        const newUserProfilePicInput = document.getElementById('profilePicInput').value;

        setNewUser(newUserNameInput)
        setnewUserPassword(newUserPasswordInput)
        setUserProfilePic(newUserProfilePicInput)
    }

    return(
        <div>
            <input type = 'form' placeholder = "username" id = 'userNameInput'/>
            <input type = 'form' placeholder = "password" id = 'passwordInput'/>
            <input type = 'form' placeholder = "profilepic" id = 'profilePicInput'/>
            <button type = 'submit' onClick = {()=>{
                handleNewUserClick()
            }}>Sign Up</button> 
        </div>
    )
}