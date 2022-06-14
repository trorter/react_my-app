import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.profile_img}
                     src={"https://i.stack.imgur.com/9WYxT.png"}
                     alt={"Profile logo"}/>
            </div>
            <div>
                ava + desc
            </div>

            <MyPosts />
        </div>
    );
}

export default Profile;