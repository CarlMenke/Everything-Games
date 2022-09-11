import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Post = (props) =>{

    const[postOwner, setPostOwner] = useState('')

    let create = true;
    const getUser = async () =>{
        const response = await axios.get(`http://localhost:3001/api/user/${props.post.user_id}`)
        if(response.data[0] != undefined){
            setPostOwner(response.data[0].userName)
        }else{
            create = false
        }
}

getUser()

if(create){
    return(
        <div className='post-container'>
            <div className = 'post-name'>{postOwner}</div>
            <div className = 'post-content'>{props.post.content}</div>
        </div>
    )
}

}

export default Post
