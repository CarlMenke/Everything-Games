import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Posts from './Posts'
import {DiscCard } from './DiscCard'

export const Discs = (props) =>{

    const discsArray = props.discsArray;

    console.log(props.possiblePages)
    let currPage = props.currPage
    let possiblePagesArray = []

    if(currPage < 6){
        possiblePagesArray = [1,2,3,4,5,6,7,8,9,10]
    }else if(currPage > props.possiblePages - 6){


        for(let i = 9; i >= 0; i--){
            possiblePagesArray.push(props.possiblePages - i)
        }

    }else{
        for(let i = currPage - 5; i < currPage + 5; i++){
            possiblePagesArray.push(i);
        }
    }

    if(props.pageAble){
        if(discsArray != null){
            return(
                <div>
                    <div className = 'search-bar'>

                        <div>
                            <div>Sort By: </div>
                            <button>Brand</button>
                            <button>Category</button>
                            <button>Speed</button>
                            <button>Glide</button>
                            <button>Turn</button>
                            <button>Fade</button>
                            <button>Stability</button>
                        </div>

                        <div>
                            <input id = 'disc-search-input' placeholder = 'Search By Name'></input>
                            <button>Search</button>
                        </div>
                    </div>
                <div className = {`discs-display-${props.style}`}>
                    {discsArray.map((disc,index) =>{
                        return(
                            <DiscCard disc = {disc} navigate ={props.navigate} key = {index} setSelectedDisc = {props.setSelectedDisc} style = {props.style}/>
                        )
                    })}
                </div>

                <div className = 'inline'>Page: {props.currPage}</div>

                <button
                onClick = {()=>{
                    let page = props.currPage;
                    page--;
                    if(page > 0) {props.setCurrPage(page)};
                }}>Previous Page</button>

                <div className  = 'inline'>
                    {possiblePagesArray.map((page,index) =>{
                        return (<button key = {index} className = 'page' onClick ={()=>{props.setCurrPage(page)}}>{page}</button>)
                    })}
                </div>
                <button
                onClick = {()=>{
                    let page = props.currPage;
                    page++;
                    if(currPage < props.possiblePages) {props.setCurrPage(page)}
                }}>Next Page</button>


                </div>
            )
        }else{return(
            <div>Loading</div>
        )}
    }else{
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
}

