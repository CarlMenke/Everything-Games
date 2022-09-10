import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Posts from './Posts'

export const Home = (props) =>{

    console.log(props)
    return(
        <div>
            <h1>Home Page</h1>
            <section className = "home-main">
                <div>Account </div>
                <div> Recent Posts
                    <div>
                        <Posts logged = {props.logged} loggedUser = {props.loggedUser} recentPostArray = {props.recentPostArray} setRecentPostArray = {props.setRecentPostArray}/>
                    </div>
                </div>
                <div>Explore</div>
            </section>
        </div>
    )
}

