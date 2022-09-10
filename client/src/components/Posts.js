import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post'

const Posts = (props) =>{

    const postArray = props.postArray;
    const [creatingPost , setCreatingPost] = useState(false);
    const [newPostContent, setNewPostContent] = useState('');



    const createNewPost = async () =>{

        if(props.logged && newPostContent !== ''){
        const response = await axios.get(`http://localhost:3001/api/newPost/${newPostContent}/${props.loggedUser._id}`)

        props.setRecentPostArray([response.data.post,...props.recentPostArray])
        }
    }


    useEffect(()=>{
        createNewPost()
    },[newPostContent])



    if(!creatingPost){
        return(
            <div>
                <div className='posts-container'>
                <div>               
                    <button onClick = {(e)=>{
                        setCreatingPost(true)
                    }} >Create Post</button>
                    </div>
                    <div>
                        {props.recentPostArray.map((post, index)=>{
                            return(
                                <Post post = {post} key = {index}/>
                            )
                            })}
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <div className='posts-container'>
                <div>               
                    <input placeholder = 'content' id = 'new-post-content' />
                    <button onClick = {()=>{
                        setNewPostContent(document.getElementById('new-post-content').value)
                        setCreatingPost(false)
                    }}>Post</button>
                        </div>
                        <div>
                        {props.recentPostArray.map((post, index)=>{
                            return(
                                <Post post = {post} key = {index}/>
                            )
                            })}
                        </div>
                </div>
            </div>
        )
    }
}

export default Posts

