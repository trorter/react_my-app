import s from "./Header.module.css"

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={"https://i.pinimg.com/550x/8e/ea/95/8eea9534a875766fc488d2cba2a3f40a.jpg"}
           alt={"header img"}/>
    </header>
  );
}

export default Header;