import style from "./Profile.module.scss";
import exitIcon from "../../assets/exit.png";

export const Profile = ({ user, logout }) => {
  return (
    <div className={style.profileStyle}>
      <span>
        logout
        <img src={exitIcon} alt="logout" onClick={logout} />
      </span>
      <h2>You are logged in</h2>
      <p>User Name: {user?.username}</p>
      <p>User Email: {user?.useremail}</p>
    </div>
  );
};
