import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <img src={"https://images.pexels.com/photos/9501844/pexels-photo-9501844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                 alt={"header img"}/>
        </header>
    );
}

export default Header;