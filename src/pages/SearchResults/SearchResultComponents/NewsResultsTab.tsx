import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import { newsData } from "../../Home/homeData";
import { IconButton, SwipeableDrawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NewsResultsTab = ({ query }: { query: string | undefined }) => {
  const [open, setOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<any>();
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state?.image;

  useEffect(() => {
    if (query?.startsWith("image_result") && !image) {
      navigate("/", { replace: true });
    }
  }, [image, navigate]);
  return (
    <div className="searchresult-content-images">
      <div
        className="searchresult-content-all-head"
        style={{
          flexDirection: query?.startsWith("image_result") ? "column" : "row",
          alignItems: query?.startsWith("image_result")
            ? "flex-start"
            : "center",
        }}
      >
        <div className="searchresult-content-all-head-main">
          <InfoOutlineIcon /> News for:{" "}
        </div>
        <div className="searchresult-content-all-head-content">
          {query?.startsWith("image_result") ? (
            <>
              <br />
              <img src={image} />
            </>
          ) : (
            query
          )}
        </div>
      </div>
      <div className="searchresult-content-news-list">
        {newsData.map((item) => {
          return (
            <div
              className="searchresult-content-news-list-item"
              key={item.id}
              onClick={() => {
                setSelectedNews(item);
                setOpen(true);
              }}
            >
              <div className="searchresult-content-news-list-item-content">
                <div className="searchresult-content-news-list-item-content-head">
                  <div className="searchresult-content-news-list-item-content-head-image">
                    {item.title[0]}
                  </div>
                  <div className="searchresult-content-news-list-item-content-head-title">
                    {item.title && item.title.length > 20 ? (
                      <>{item.title.slice(0, 20)}...</>
                    ) : (
                      <>{item.title}</>
                    )}
                  </div>
                </div>
                <div className="searchresult-content-news-list-item-content-description">
                  {item.description}
                </div>
                <div className="searchresult-content-news-list-item-content-date">
                  {item.publishedAt.split("T")[0]}
                </div>
              </div>
              <div className="searchresult-content-news-list-item-image">
                <img src={item.imageUrl} alt={item.title} />
              </div>
            </div>
          );
        })}
      </div>
      {selectedNews && (
        <SwipeableDrawer
          anchor="bottom"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              width: "auto",
              maxWidth: "700px",
              margin: "0 auto",
              borderRadius: "12px 12px 0 0",
            },
          }}
          className="drawer-news-bottom"
        >
          <div className="drawer-news-bottom-content">
            <div className="drawer-news-bottom-content-close">
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="drawer-news-bottom-content-heading">
              {selectedNews.title}
            </div>
            <div className="drawer-news-bottom-content-list">
              <div className="drawer-news-bottom-content-source">
                {selectedNews.source}
              </div>
              <div className="drawer-news-bottom-content-seperator"></div>
              <div>{selectedNews.category}</div>
              <div className="drawer-news-bottom-content-seperator"></div>
              <div>{selectedNews.publishedAt.split("T")[0]}</div>
            </div>
            <div className="drawer-news-bottom-content-image">
              <img src={selectedNews.imageUrl} alt={selectedNews.title} />
            </div>

            <div className="drawer-news-bottom-content-description">
              {selectedNews.description} Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Possimus, ipsam odit? Saepe sit, ipsa ab
              quisquam dicta, cupiditate eius molestias reprehenderit deserunt
              placeat corrupti ullam hic itaque aliquam repudiandae atque
              reiciendis accusantium neque nihil asperiores molestiae ipsum. Nam
              corporis nulla nisi quaerat cum quos unde, illo quia repellendus
              quae ex sapiente nostrum perferendis aperiam soluta tempora
              reiciendis molestiae ducimus. Quis obcaecati molestiae, aliquid
              reprehenderit velit rerum voluptates autem provident corrupti
              temporibus assumenda dicta accusamus delectus ut. Culpa est
              architecto libero maiores ab perferendis inventore accusantium
              voluptatem modi, optio et aut eius asperiores tenetur accusamus
              quisquam alias. Aspernatur cum quo et dolores, molestiae deleniti
              ea rerum praesentium voluptatum doloremque enim blanditiis nam!
              Ut, ullam! Assumenda odit itaque natus sit placeat, ipsa voluptate
              eius incidunt mollitia, quis accusamus ad quia alias repellat
              perspiciatis. Ab impedit veritatis autem iure magnam aliquam
              eligendi laborum debitis harum consectetur, aperiam qui.
              Doloremque vero voluptatum maxime dolorem, possimus commodi saepe
              debitis alias dolores nobis. Dignissimos corrupti accusantium
              totam voluptatem fugit esse quo, repellat consequatur in odio
              animi ad quaerat nisi molestiae dicta earum explicabo. Autem, rem
              nihil? Qui accusamus, commodi iste, blanditiis quia ducimus quidem
              pariatur aliquid, officiis error sint voluptatem temporibus ad
              impedit quasi eum nisi.
            </div>
          </div>
        </SwipeableDrawer>
      )}
    </div>
  );
};

export default NewsResultsTab;
