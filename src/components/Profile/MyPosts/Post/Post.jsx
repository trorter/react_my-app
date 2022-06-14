import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={"https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg"} alt={"Post avatar"}/>
            <span>{props.message}</span>
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;