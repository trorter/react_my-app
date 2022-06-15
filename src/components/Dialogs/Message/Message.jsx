import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={s.message} id={props.id} >{props.message}</div>
  )
}

export default Message