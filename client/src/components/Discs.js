import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Posts from './Posts'
import {DiscCard } from './DiscCard'

export const Discs = (props) =>{

    const discsArrayAll = props.discsArrayAll
    if(discsArrayAll !== undefined && discsArrayAll !== null){

    const getDetails = (spec) =>{
    let arr = [];
    let arr1 = [];
    let specSubmenu = [];

    for(let i = 0; i < discsArrayAll.length; i++){
        if(!arr.includes(discsArrayAll[i][spec])){
        arr.push(discsArrayAll[i][spec])
        arr1.push(discsArrayAll[i][`${spec}_slug`])
        }
        console.log(arr)
    }

    for(let i = 0; i < arr.length; i++){
        specSubmenu.push({ 
            title: arr[i],
            onClick: arr1[i]
        })
    }
    return specSubmenu;
    }

    const glideSubmenu =[
    {title: '4', onClick: undefined}
    ,
    {title: '5', onClick: undefined}
    ,
    {title: '3', onClick: undefined}
    ,
    {title: '6', onClick: undefined}
    ,
    {title: '1', onClick: undefined}
    ,
    {title: '2', onClick: undefined}
    ,
    {title: '0', onClick: undefined}
    ,
    {title: '5.5', onClick: undefined}
    ,
    {title: '1.5', onClick: undefined}
    ,
    {title: '3.5', onClick: undefined}
    ,
    {title: '2.5', onClick: undefined}
    ,
    {title: '7', onClick: undefined}
    ,
    {title: '4.5', onClick: undefined}
    ]

    const turnSubmenu = [
        {title: '-2', onClick: undefined}
        ,
        {title: '2', onClick: undefined}
        ,
        {title: '-1', onClick: undefined}
        ,
        {title: '0', onClick: undefined}
        ,
        {title: '-1.5', onClick: undefined}
        , 
        {title: '-4', onClick: undefined}
        , 
        {title: '-3', onClick: undefined}
        ,
        {title: '-0.5', onClick: undefined}
        , 
        {title: '1', onClick: undefined}
        , 
        {title: '0.5', onClick: undefined}
        ,
        {title: '-5', onClick: undefined}
        ,
        {title: '-3.5', onClick: undefined}
        , 
        {title: '-2.5', onClick: undefined}
        ,
        {title: '-4.5', onClick: undefined}
        ,
        {title: '0.05', onClick: undefined}
    ]

    const fadeSubmenu = [
        {title: '2', onClick: undefined}
    ,
    {title: '3', onClick: undefined}
    , 
    {title: '4', onClick: undefined}
    ,
    {title: '1', onClick: undefined}
    ,
    {title: '0', onClick: undefined}
    ,
    {title: '0.5', onClick: undefined}
    ,
    {title: '2.5', onClick: undefined}
    ,
    {title: '1.5', onClick: undefined}
    ,
    {title: '5', onClick: undefined}
    ,
    {title: '3.5', onClick: undefined}
    ,
    {title: '4.5', onClick: undefined}
    ,
    {title: '6', onClick: undefined}
    ]

    const stabilitySubmenu = [
        {title: 'Understable', onClick: 'understable'}
        ,
        {title: 'Stable', onClick: 'stable'}
        ,
        {title: 'Overstable', onClick: 'overstable'}
        , 
        {title: 'Very Overstable', onClick: 'very-overstable'}
        ,
        {title: 'Very Understable', onClick: 'very-understable'}
    ]

    const brandSubmenu =[

    {title: 'Lightning', onClick: 'lightning'}
    ,
    {title: 'Prodigy', onClick: 'prodigy'}
    ,
    {title: 'Storm', onClick: 'storm'}
    ,
    {title: 'Wild Discs', onClick: 'wild-discs'}
    ,
    {title: 'Westside Discs', onClick: 'westside-discs'}
    ,
    {title: 'Innova', onClick: 'innova'}
    ,
    {title: 'Legacy', onClick: 'legacy'}
    , 
    {title: 'DGA', onClick: 'dga'}
    ,
    {title: 'Dynamic Discs', onClick: 'dynamic-discs'}
    ,
    {title: 'Daredevil Discs', onClick: 'daredevil-discs'}
    ,
    {title: 'Axiom Discs', onClick: 'axiom-discs'}
    ,
    {title: 'Infinite Discs', onClick: 'infinite-discs'}
    ,
    {title: 'Other', onClick: 'other'}
    ,
    {title: 'Mint Discs', onClick: 'mint-discs'}
    ,
    {title: 'Thought Space Athletics', onClick: 'thought-space-athletics'}
    ,
    {title: 'MVP', onClick: 'mvp'}
    ,
    {title: 'Discraft', onClick: 'discraft'}
    ,
    {title: 'Latitude 64', onClick: 'latitude-64'}
    ,
    {title: 'Gateway', onClick: 'gateway'}
    ,
    {title: 'Millennium', onClick: 'millennium'}
    ,
    {title: 'Vibram', onClick: 'vibram'}
    ,
    {title: 'Lone Star Discs', onClick: 'lone-star-discs'}
    ,
    {title: 'Streamline', onClick: 'streamline'}
    ,
    {title: 'Discmania', onClick: 'discmania'}
    ,
    {title: 'Viking', onClick: 'viking'}
    , 
    {title: 'Above Ground Level', onClick: 'above-ground-level'}
    , 
    {title: 'Kastaplast', onClick: 'kastaplast'}
    , 
    {title: 'Clash Discs', onClick: 'clash-discs'}
    , 
    {title: 'Yikun', onClick: 'yikun'}
    ,
    {title: 'Løft Discs', onClick: 'løft-discs'}
    , 
    {title: 'Crosslap', onClick: 'crosslap'}
    ,
    {title: 'Disctroyer', onClick: 'disctroyer'}
    ,
    {title: 'AquaFlight', onClick: 'aquaflight'}
    ,
    {title: 'Prodiscus', onClick: 'prodiscus'}
    ,
    {title: 'RPM', onClick: 'rpm'}
    ,
    {title: 'EV-7', onClick: 'ev-7'}
    ,
    {title: 'Disc Golf UK', onClick: 'disc-golf-uk'}
    ]

    const categorySubmenu = [
        {title: 'Control Driver', onClick: 'control-driver'}
    ,
        {title: 'Putter', onClick: 'putter'}
    ,
        {title: 'Approach', onClick: 'approach'}
    ,
        {title: 'Midrange', onClick: 'midrange'}
    ,
        {title: 'Distance Driver', onClick: 'distance-driver'}
    ,
        {title: 'Hybrid Driver', onClick: 'hybrid-driver'}
    ,
        {title: 'Disc Golf Sets', onClick: 'disc-golf-sets'}
    ]

    const speedSubmenu = [
        {title: '6', onClick: undefined}
    ,
        {title: '8', onClick: undefined}
    ,
        {title: '7', onClick: undefined}
    ,
        {title: '3', onClick: undefined}
    ,
        {title: '5', onClick: undefined}
    ,
        {title: '13', onClick: undefined}
    , 
        {title: '2', onClick: undefined}
    ,
        {title: '9', onClick: undefined}
    ,
        {title: '14', onClick: undefined}
    ,
        {title: '4', onClick: undefined}
    ,
        {title: '10', onClick: undefined}
    ,
        {title: '11', onClick: undefined}
    ,
        {title: '12', onClick: undefined}
    ,
        {title: '1', onClick: undefined}
    ,
        {title: '5.5', onClick: undefined}
    , 
        {title: '6.5', onClick: undefined}
    ,
        {title: '3.5', onClick: undefined}
    ,
        {title: '14.5', onClick: undefined}
    ,
        {title: '4.5', onClick: undefined}
    ,
        {title: '15', onClick: undefined}
    ]

    const filterBar = [
        {
            title: 'Brand',
            url: '/brand',
            submenu:brandSubmenu
        },

        {
            title: 'Category',
            url: '/category',
            submenu:categorySubmenu
        },

        {
            title: 'Speed',
            url: '/speed',
            submenu:speedSubmenu
        },

        {
            title: 'Glide',
            url: '/glide',
            submenu:glideSubmenu
        },

        {
            title: 'Turn',
            url: '/turn',
            submenu:turnSubmenu
        },

        {
            title: 'Fade',
            url: '/fade',
            submenu:fadeSubmenu
        },

        {
            title: 'Stability',
            url: '/stability',
            submenu:stabilitySubmenu
        }
    ]
}

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

