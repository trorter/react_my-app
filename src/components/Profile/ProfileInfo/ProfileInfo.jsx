import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfo}>
      <img className={s.profileInfoImg}
           src={"https://i.stack.imgur.com/9WYxT.png"} alt={"Profile logo"}/>
      <div className={s.descriptionBlock}>
        ava + desc
      </div>
    </div>
  )
}

export default ProfileInfo