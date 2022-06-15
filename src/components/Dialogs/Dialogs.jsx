import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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