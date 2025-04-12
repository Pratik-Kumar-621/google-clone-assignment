import { useParams } from "react-router-dom";

const PlaceholderTab = ({ tab }: { tab: { name: string; value: string } }) => {
  const { query } = useParams();

  return (
    <div className="searchresult-placeholder">
      <div className="searchresult-placeholder-heading">
        {tab.name} results tab for:
      </div>
      <br />
      {query}
    </div>
  );
};

export default PlaceholderTab;
