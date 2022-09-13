import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Posts from './Posts'
import {DiscCard } from './DiscCard'

export const Discs = (props) =>{

    const discsArray = props.discsArray;

    const setDiscsArray = props.setDiscsArray;

    console.log('discsarray', discsArray)

    if(discsArray != null){
        return(
            <div>
            <div className = {`discs-display-${props.style}`}>
                {discsArray.map((disc,index) =>{
                    return(
                        <DiscCard disc = {disc} navigate ={props.navigate} key = {index} setSelectedDisc = {props.setSelectedDisc} style = {props.style}/>
                    )
                })}
            </div>
            </div>
        )
    }else{return(
        <div>Loading</div>
    )}
}

