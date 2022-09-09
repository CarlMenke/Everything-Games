import React from 'react'
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const Header = (props) =>{
if(props.logged){
    let nameArr = props.loggedUser.userName.split('');

    nameArr[0] = nameArr[0].toUpperCase();
    console.log(nameArr)

    const displayName = nameArr.join('')

    return(
        <div className = 'header'>
        <Link to = "/" className = 'header-link'>Home</Link>
        <Link to = "/account" className = 'header-link'>Hello {displayName}!</Link>
        </div>
    )
}else{
    return(
        <div className = 'header'>
        <Link to = "/" className = 'header-link'>Home</Link>
        <Link to = "/login" className = 'header-link'>Login</Link>
        <Link to = "/signup" className = 'header-link'>Sign Up</Link>
        </div>
    )}
}