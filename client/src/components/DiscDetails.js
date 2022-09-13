import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Posts from './Posts'
import { useParams } from 'react-router'
import { useLocation } from "react-router-dom";



export const DiscDetails = (props) =>{


if(props.discsArray !== null && props.recentPostsArray !== null && props.selectedDisc !== null){   

    return(
        <div >
            <button onClick = {()=>{props.navigate('/')}}>Home</button>
            <div className = 'disc-details'>
                <div>{props.selectedDisc.name}</div>
                <div>{props.selectedDisc.category}</div>
                <img src = {props.selectedDisc.pic}></img>
            </div>
            <div className = 'disc-posts'>
                <Posts {...props} logged = {props.logged} style = {'view'} loggedUser = {props.loggedUser} displayArray = {props.recentPostArray} setRecentPostArray = {props.setRecentPostArray} currTopic = {props.selectedDisc.name_slug}/>
            </div>
        </div>
    )
}else{
    return(
        <div>Loading </div>
    )
}
}


// add a topic id to all posts
//
