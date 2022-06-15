import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsItems = props.dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name} />)
  let messagesItems = props.messages.map( message => <Message id={message.id} message={message.message} /> )

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