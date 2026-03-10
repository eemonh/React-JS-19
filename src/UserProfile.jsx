import style from "./css/userProfile.module.css";
import derp from "./assets/derp.jpeg";
function UserProfile() {
  return (
    <div>
        <h2 className={style.heading}>User Profile</h2>
      <div className={style.card}>
        <img className={style["img-style"]} src={derp} alt="derp" />
        <div className={style.textWrap}>
          <h4>Alur Chop</h4>
          <p>Web developer</p>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
 