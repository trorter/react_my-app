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

  let dialogsItems = dialogsData.map( dialog => <DialogItem id={dialog.id} name={dialog.name} />)

  let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'What\'s up?'},
    {id: 3, message: 'How is your studying?'}
  ]

  let messagesItems = messagesData.map( message => <Message id={message.id} message={message.message} /> )

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsItems}
      </div>
      <div className={s.messages}>
        {messagesItems}
      </div>
    </div>
  )
}

export default Dialogs