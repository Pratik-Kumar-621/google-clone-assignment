import Logout from "./TopbarComponents/Logout";

const TopBar = (props: any) => {
  const { logout, tab, setTab, userDetails, setOpen } = props;
  return (
    <div className="home-topbar">
      <Logout logout={logout} />
      <div className="home-topbar-tabs">
        <div
          className={`home-topbar-tabs-item ${
            tab === "search" ? "home-topbar-tabs-active" : ""
          }`}
          onClick={() => setTab("search")}
        >
          <img src="/assets/Google.png" alt="G" /> Search
        </div>
        <div
          className={`home-topbar-tabs-item ${
            tab === "Gemini" ? "home-topbar-tabs-active" : ""
          }`}
          onClick={() => setTab("Gemini")}
        >
          <img src="/assets/Gemini.png" alt="Gemini" />
        </div>
      </div>
      <div
        className="home-topbar-profile"
        onClick={() => {
          setOpen(true);
        }}
      >
        <img src={userDetails.image} alt={userDetails.name} />
      </div>
    </div>
  );
};

export default TopBar;
