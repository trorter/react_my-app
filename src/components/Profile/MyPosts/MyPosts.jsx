import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <Post message={`It's my fist post`}/>
                <Post message={`Hi! How are you?`}/>
                <Post message={`Stub / mock post`}/>
                <Post message={`Stub / mock post`}/>
                <Post message={`Stub / mock post`}/>
            </div>
        </div>
    )
}

export default MyPosts