import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

  let textElement = React.createRef();

  let addPost = () => {
    props.posts.addPost(textElement.current.value)
  }

  return (
    <div className={s.myPosts}>
      My posts
      <div>
        <div>
          <textarea ref={textElement} />
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