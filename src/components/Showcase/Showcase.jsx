import "./showcase.css";
import { auth } from "../../firebase";

const Showcase = () => {
  const checking = () => {
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
      console.log(displayName, email, photoURL, emailVerified, uid);
    }
  };
  return (
    <div className="showcase">
      <div className="showcase__content">
        <h4>Hottest drop of the summer</h4>
        <p>Limited Stocks Only 🔥🔥</p>
        <button onClick={checking}>Shop now</button>
      </div>
    </div>
  );
};

export default Showcase;
