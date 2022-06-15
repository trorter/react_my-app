import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

  return (
    <div className={s.myPosts}>
      My posts
      <div>
        <div>
          <textarea/>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts