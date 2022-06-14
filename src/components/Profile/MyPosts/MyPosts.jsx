import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

  let postsData = [
    {id: 1, message: 'It\'s my fist post', likesCount: '10'},
    {id: 2, message: 'Hi! How are you?', likesCount: '11'},
    {id: 3, message: 'Stub / mock post', likesCount: '12'}
  ]

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
        <Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount}/>
        <Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[1].likesCount}/>
        <Post id={postsData[2].id} message={postsData[2].message} likesCount={postsData[2].likesCount}/>
      </div>
    </div>
  )
}

export default MyPosts