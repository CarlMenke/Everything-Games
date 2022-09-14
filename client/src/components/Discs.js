import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Posts from './Posts'
import {DiscCard } from './DiscCard'
import { MenuItems } from './MenuItems'
import { Dropdown } from './Dropdown'
import {filterBar} from '../filterBar'


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
    
    }

    const searchFilter = props.searchFilter

    const removeFilter = (index) =>{

        let arr = []
        arr.push(props.searchFilter);


        arr.splice(index,1)

        props.setSearchFilter(arr);
    }

    const discsArray = props.discsArray;
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

            console.log(searchFilter)
            return(
                <div>
                    <div className = 'search-bar'>
                        <div className = 'filter-container'>
                            <ul className = 'filter-options'>
                                Sort By: 
                                {filterBar.map((item,index)=>{

                                    return(
                                        <MenuItems  
                                            dropDownArray = {props.dropDownArray} 
                                            setDropDownArray = {props.setDropDownArray} 
                                            setDropDown = {props.setDropDown} 
                                            dropDown = {props.dropDown}
                                            key = {index} 
                                            items = {item}
                                            dropped = {props.dropped}
                                            setDropped = {props.setDropped}
                                        />
                                    )
                                })}
                                <div>
                                    {searchFilter.map((filter,index)=>{
                                        return(
                                            <div key = {index} className = 'inline'>
                                                <div className = 'inline'>{filter.main}</div>
                                                <div className = 'inline'>{filter.sub}</div>
                                                <button type = 'button' onClick = {()=>{removeFilter(index)}}>❌</button>
                                            </div>
                                        )
                                    })}
                                </div>
                            </ul>
                            <Dropdown 
                                searchFilter = {props.searchFilter}
                                setSearchFilter = {props.setSearchFilter}
                                filterBar = {filterBar}
                                dropped = {props.dropped}
                                setDropDown = {props.setDropDown} 
                                dropDown = {props.dropDown} 
                                dropDownArray = {props.dropDownArray} 
                                setDropDownArray = {props.setDropDownArray} 
                            />
                        </div>
                        <div>
                            <input id = 'disc-search-input' placeholder = 'Search By Name'></input>
                            <button>Search</button>
                        </div>
                    </div>
                <div className = {`discs-display-${props.style}`}>
                    {discsArray.map((disc,index) =>{
                        return(
                            <DiscCard 
                                disc = {disc} 
                                navigate ={props.navigate} 
                                key = {index} 
                                setSelectedDisc = {props.setSelectedDisc} 
                                style = {props.style}
                            />
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
            <div>
                <div>Loading</div>
                <button>Back</button>
            </div>
            
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
                        <div>
                <div>Loading</div>
                <button>Back</button>
            </div>
        )}
    }
}

