import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBody} from "../../redux/state";

const Dialogs = (props) => {

  let dialogsItems = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
  let messagesItems = props.messages.map(message => <Message id={message.id} message={message.message}/>)
  let newMessageBody = props.newMessageBody

  const onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreator())
  }

  const onNewMessageChange = (e) => {
    props.dispatch(updateNewMessageBody(e.target.value))
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsItems}
      </div>
      <div className={s.messages}>
        <div>{messagesItems}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              placeholder={'Enter your message'}
              onChange={onNewMessageChange} />
          </div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs