import React from 'react'
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react'
import axios from 'axios'

export const Account = (props) =>{

    if(!props.logged){
        return(
            <div>You are not logged in. Please Log in or sign up to view account details</div>
        )
    }

    const handleDeleteUser = async() =>{
        const response = await axios.get(`http://localhost:3001/api/deleteUser/${props.loggedUser._id}`)
        console.log(response)
        props.setLogged(false)
        props.setLoggedUser(null)
        props.navigate('/')
    }
    const handleUpdateUserName = async  () =>{

        const newUserName = document.getElementById('new-user-name').value

        const response = await axios.get(`http://localhost:3001/api/updateUser/${props.loggedUser._id}/${newUserName}`)

        console.log(response)

    }

    return(
        <div>
            <h1>{props.loggedUser.userName}</h1>
            <button onClick = {()=>{
                props.setLogged(false)
                props.setLoggedUser(null)
                props.navigate('/')
            }}>Log Out</button>
            <button onClick = {() =>{handleDeleteUser()}}>Delete Account</button>
            <input placeholder = "Enter New User Name" type= "form" id = 'new-user-name'/>  
            <button onClick = {()=>{handleUpdateUserName()}}>Update UserName</button>
        </div>
    )
}