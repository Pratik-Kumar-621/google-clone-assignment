import { Drawer, IconButton } from "@mui/material";
import { newsData } from "../homeData";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const NewsPage = () => {
  const [drawerBottom, setDrawerBottom] = useState(false);
  const [drawerContent, setDrawerContent] = useState({
    title: "",
    description: "",
    image: "",
    source: "",
    publishedAt: "",
    category: "",
  });
  const handleDrawerOpen = (item: any) => {
    setDrawerContent({
      title: item.title,
      description: item.description,
      image: item.imageUrl,
      source: item.source,
      publishedAt: item.publishedAt,
      category: item.category,
    });
    setDrawerBottom(true);
  };
  return (
    <div className="news">
      {newsData.map((item) => {
        return (
          <div
            className="news-item"
            key={item.id}
            onClick={() => handleDrawerOpen(item)}
          >
            <img
              className="news-item-image"
              src={item.imageUrl}
              alt={item.title}
            />
            <div className="news-item-description">{item.description}</div>
            <div className="news-item-list">
              <div className="news-item-publisher">{item.source}</div>
              <div className="news-item-seperator"></div>
              <div className="news-item-date">
                {item.publishedAt.split("T")[0]}
              </div>
            </div>
          </div>
        );
      })}
      <Drawer
        anchor="bottom"
        open={drawerBottom}
        onClose={() => setDrawerBottom(false)}
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
            <IconButton onClick={() => setDrawerBottom(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="drawer-news-bottom-content-heading">
            {drawerContent.title}
          </div>
          <div className="drawer-news-bottom-content-list">
            <div className="drawer-news-bottom-content-source">
              {drawerContent.source}
            </div>
            <div className="drawer-news-bottom-content-seperator"></div>
            <div>{drawerContent.category}</div>
            <div className="drawer-news-bottom-content-seperator"></div>
            <div>{drawerContent.publishedAt.split("T")[0]}</div>
          </div>
          <div className="drawer-news-bottom-content-image">
            <img src={drawerContent.image} alt={drawerContent.title} />
          </div>

          <div className="drawer-news-bottom-content-description">
            {drawerContent.description} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Possimus, ipsam odit? Saepe sit, ipsa ab quisquam
            dicta, cupiditate eius molestias reprehenderit deserunt placeat
            corrupti ullam hic itaque aliquam repudiandae atque reiciendis
            accusantium neque nihil asperiores molestiae ipsum. Nam corporis
            nulla nisi quaerat cum quos unde, illo quia repellendus quae ex
            sapiente nostrum perferendis aperiam soluta tempora reiciendis
            molestiae ducimus. Quis obcaecati molestiae, aliquid reprehenderit
            velit rerum voluptates autem provident corrupti temporibus assumenda
            dicta accusamus delectus ut. Culpa est architecto libero maiores ab
            perferendis inventore accusantium voluptatem modi, optio et aut eius
            asperiores tenetur accusamus quisquam alias. Aspernatur cum quo et
            dolores, molestiae deleniti ea rerum praesentium voluptatum
            doloremque enim blanditiis nam! Ut, ullam! Assumenda odit itaque
            natus sit placeat, ipsa voluptate eius incidunt mollitia, quis
            accusamus ad quia alias repellat perspiciatis. Ab impedit veritatis
            autem iure magnam aliquam eligendi laborum debitis harum
            consectetur, aperiam qui. Doloremque vero voluptatum maxime dolorem,
            possimus commodi saepe debitis alias dolores nobis. Dignissimos
            corrupti accusantium totam voluptatem fugit esse quo, repellat
            consequatur in odio animi ad quaerat nisi molestiae dicta earum
            explicabo. Autem, rem nihil? Qui accusamus, commodi iste, blanditiis
            quia ducimus quidem pariatur aliquid, officiis error sint voluptatem
            temporibus ad impedit quasi eum nisi.
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default NewsPage;
