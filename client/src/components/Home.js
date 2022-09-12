import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Posts from './Posts'
import { Disc, Discs } from './Discs'

export const Home = (props) =>{

    
      useEffect(()=>{
        props.getRecentPostArray()
        props.getDiscs()
      },[])


    return(
        <div>
            <h1>Home Page</h1>
            <section className = "home-main">
                <div>Courses </div>
                <div> Recent Posts
                    <div>
                        <Posts logged = {props.logged} loggedUser = {props.loggedUser} displayArray = {props.recentPostArray} setRecentPostArray = {props.setRecentPostArray} currTopic = {'general'}/>
                    </div>
                </div>
                    <div>
                        <h1>Discs</h1>
                        <Discs {...props} navigate ={props.navigate} discsArray = {props.discsArray} setDiscsArray= {props.setDiscsArray} setSelectedDisc = {props.setSelectedDisc}/>
                    </div>
            </section>
        </div>
    )
}

