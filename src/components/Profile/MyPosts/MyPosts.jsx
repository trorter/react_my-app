import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import store from "../../../redux/state";

const MyPosts = () => {

  let postsElements = store.getState().profilePage.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

  let textElement = React.createRef();

  let addPost = () => {
    store.addPost()
  }

  let editMessage = event => {
    store.editMessage(event.target.value)
    textElement.current.value = store.getState().profilePage.message
  }

  return (
    <div className={s.myPosts}>
      My posts
      <div>
        <div>
          <textarea ref={textElement} value={store.getState().profilePage.message} onChange={editMessage} />
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