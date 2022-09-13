import React from 'react'

export const Dropdown = ({dropDownArray,dropDown, dropped}) =>{

    return(
        <ul className = {`dropdown${dropDown?'show':''}`}>
            {dropDownArray.map((submenu, index)=>{
                return(
                <li key = {index} className = 'menu-items'>
                    <button className = 'menu-items' type = 'button' onClick  = {(e,submenu) => 
                    {
                        console.log('dropped', dropped)
                        console.log('e.target.innerHTML', e.target.innerHTML)
                        
                    }}>
                        {submenu.title}
                    </button>
                </li>
                )
            })}
        </ul>
    )
}