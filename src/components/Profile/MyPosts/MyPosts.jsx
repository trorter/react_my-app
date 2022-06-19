import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, editMessageActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

  let postsElements = props.profile.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

  let textElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let editMessage = event => {
    props.dispatch(editMessageActionCreator(event.target.value))
    textElement.current.value = props.message
  }

  return (
    <div className={s.myPosts}>
      My posts
      <div>
        <div>
          <textarea ref={textElement} value={props.profile.message} onChange={editMessage} />
        </div>
        <div>
          <button onClick={addPost} >Add post</button>
        </div>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts