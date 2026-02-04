import videoHomaPage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);

  return (
    <div className="homepage-container">
      <video autoPlay loop muted>
        <source src={videoHomaPage} type="video/mp4"></source>
      </video>
      <div className="homepage-content">
        <div className="homepage-title">
          Build forms at the drop of a prompt
        </div>
        <div className="homepage-desc">
          Put a seasoned form expert to work with Typeform AI. It structures and
          designs at your command. Just type to build and edit.
        </div>
        <div className="homepage-btn">
          <button>See plans</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
