import s from './Post.module.css'

const Post = (props) => {
  return (
    <div id={props.id} className={s.item}>
      <img src={"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"}
           alt={"Post icon"}/>
      <span>{props.message}</span>
      <div>
        <span>{`${props.likesCount} Likes`}</span>
      </div>
    </div>
  )
}

export default Post;