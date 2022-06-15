import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'It\'s my fist post', likesCount: '100'},
    {id: 2, message: 'Hi! How are you?', likesCount: '11'},
    {id: 3, message: 'Stub / mock post', likesCount: '12'}
  ]

  let postsElements = posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

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