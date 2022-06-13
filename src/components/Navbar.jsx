import s from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href={"blank"} >Profile</a>
            </div>
            <div className={s.item}>
                <a href={"blank"}>Messages</a>
            </div>
            <div className={s.item}>
                <a href={"blank"}>News</a>
            </div>
            <div className={s.item}>
                <a href={"blank"}>Music</a>
            </div>
            <div className={s.item}>
                <a href={"blank"}>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;