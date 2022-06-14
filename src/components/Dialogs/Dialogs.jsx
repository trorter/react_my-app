import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs} >
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/1"} className={s.dialogLink}>
                        Andrew
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/2"} className={s.dialogLink}>
                        Nick
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/3"} className={s.dialogLink}>
                        Sally
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/4"} className={s.dialogLink}>
                        Sarah
                    </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>What's up?</div>
                <div className={s.message}>How is your studying?</div>
            </div>
        </div>
    )
}

export default Dialogs