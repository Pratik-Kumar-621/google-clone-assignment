import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const PlaceholderTab = ({ tab }: { tab: { name: string; value: string } }) => {
  const { query } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state?.image;

  useEffect(() => {
    if (query?.startsWith("image_result") && !image) {
      navigate("/", { replace: true });
    }
  }, [image, navigate]);

  return (
    <div className="searchresult-placeholder">
      <div className="searchresult-placeholder-heading">
        {tab.name} results tab for:
      </div>
      <br />
      {query?.startsWith("image_result") ? <img src={image} /> : query}
    </div>
  );
};

export default PlaceholderTab;
