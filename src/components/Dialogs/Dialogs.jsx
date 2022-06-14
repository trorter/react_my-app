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
    <div className={s.message} id={props.id} >{props.message}</div>
  )
}

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Andrew'},
    {id: 2, name: 'Nick'},
    {id: 3, name: 'Sally'},
    {id: 4, name: 'Sarah'},
  ]

  let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'What\'s up?'},
    {id: 3, message: 'How is your studying?'}
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
      </div>
      <div className={s.messages}>
        <Message id={messagesData[0].id} message={messagesData[0].message}/>
        <Message id={messagesData[1].id} message={messagesData[1].message}/>
      </div>
    </div>
  )
}

export default Dialogs