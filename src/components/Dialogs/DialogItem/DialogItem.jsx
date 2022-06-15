import s from "./DialogItem.module.css";
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

export default DialogItem