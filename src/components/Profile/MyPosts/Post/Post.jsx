import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"}
                 alt={"Post avatar"}/>
            <span>{props.message}</span>
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;