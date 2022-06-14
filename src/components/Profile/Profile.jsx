import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.profile_img} src={"https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}  alt={"Profile logo"}/>
            </div>
            <div>
                ava + desc
            </div>

            <MyPosts />
        </div>
    );
}

export default Profile;