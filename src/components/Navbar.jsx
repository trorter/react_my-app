import s from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a href={"blank"} >Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href={"blank"}>Messages</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href={"blank"}>News</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href={"blank"}>Music</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href={"blank"}>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;