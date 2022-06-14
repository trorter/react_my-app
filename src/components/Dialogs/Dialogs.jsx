import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path} className={s.dialogLink}>
        {props.name}
      </NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem id={"1"} name={"Andrew"}/>
        <DialogItem id={"2"} name={"Nick"}/>
        <DialogItem id={"3"} name={"Sally"}/>
        <DialogItem id={"4"} name={"Sarah"}/>
      </div>
      <div className={s.messages}>
        <Message message={"Hello"}/>
        <Message message={"What's up?"}/>
        <Message message={"How is your studying?"}/>
      </div>
    </div>
  )
}

export default Dialogs