import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import { IconButton, SwipeableDrawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const searchResults = [
  {
    heading: "Understanding React",
    name: "React Basics",
    description:
      "Learn the fundamentals of React, a popular JavaScript library for building user interfaces, including components, state, and props in this comprehensive guide.",
    link: "https://autotrendai.vercel.app/",
  },
  {
    heading: "JavaScript Essentials",
    name: "JS Guide",
    description:
      "Explore the core concepts of JavaScript, including variables, functions, and objects, to build a strong foundation for web development and beyond.",
    link: "https://autotrendai.vercel.app/",
  },
  {
    heading: "CSS for Beginners",
    name: "Styling Web Pages",
    description:
      "Master the basics of CSS to style your web pages effectively, covering topics like selectors, properties, and responsive design techniques.",
    link: "https://autotrendai.vercel.app/",
  },
  {
    heading: "Advanced TypeScript",
    name: "TypeScript Deep Dive",
    description:
      "Dive into advanced TypeScript features such as generics, decorators, and type inference to write robust and maintainable code.",
    link: "https://autotrendai.vercel.app/",
  },
  {
    heading: "Node.js Overview",
    name: "Server-Side JavaScript",
    description:
      "Understand the basics of Node.js, a runtime for executing JavaScript on the server, and learn how to build scalable backend applications.",
    link: "https://autotrendai.vercel.app/",
  },
  {
    heading: "Database Management",
    name: "SQL Basics",
    description:
      "Get started with SQL, the standard language for managing relational databases, and learn how to create, read, update, and delete data.",
    link: "https://autotrendai.vercel.app/",
  },
  {
    heading: "Web Accessibility",
    name: "Inclusive Design",
    description:
      "Learn how to make your websites accessible to all users, including those with disabilities, by following best practices and guidelines.",
    link: "https://autotrendai.vercel.app/",
  },
  {
    heading: "Version Control with Git",
    name: "Git Essentials",
    description:
      "Discover the power of Git for version control, including branching, merging, and collaboration, to manage your codebase effectively.",
    link: "https://autotrendai.vercel.app/",
  },
  {
    heading: "Introduction to APIs",
    name: "API Integration",
    description:
      "Understand what APIs are and how to use them to connect different software systems, enabling seamless data exchange and functionality.",
    link: "https://autotrendai.vercel.app/",
  },
  {
    heading: "Debugging Techniques",
    name: "Fixing Code Issues",
    description:
      "Learn effective debugging techniques to identify and resolve issues in your code, improving the quality and reliability of your applications.",
    link: "https://autotrendai.vercel.app/",
  },
];
const AllResultsTab = (props: any) => {
  const { query } = props;
  const [open, setOpen] = useState(false);
  const [selectedResult, setSelectedResult] = useState<any>();
  return (
    <div className="searchresult-content-all">
      <div className="searchresult-content-all-head">
        <InfoOutlineIcon />{" "}
        <span>
          Search results for: <strong>{query}</strong>
        </span>
      </div>
      <div className="searchresult-content-all-list">
        {searchResults.map((item) => {
          return (
            <div
              className="searchresult-content-all-list-item"
              key={item.link}
              onClick={() => {
                setSelectedResult(item);
                setOpen(true);
              }}
            >
              <div className="searchresult-content-all-list-item-top">
                <div className="searchresult-content-all-list-item-top-image">
                  {item.name[0]}
                </div>
                <div className="searchresult-content-all-list-item-top-content">
                  <div className="searchresult-content-all-list-item-top-content-name">
                    {item.name}
                  </div>
                  <div className="searchresult-content-all-list-item-top-content-link">
                    {item.link}
                  </div>
                </div>
              </div>
              <div className="searchresult-content-all-list-item-bottom">
                <div className="searchresult-content-all-list-item-bottom-heading">
                  {item.heading}
                </div>
                <div className="searchresult-content-all-list-item-bottom-description">
                  {item.description} Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Non amet neque, distinctio aperiam
                  laudantium itaque blanditiis omnis, eum facilis iusto
                  delectus.
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {selectedResult && (
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
          <div
            className="drawer-news-bottom-content"
            style={{ height: "30vh" }}
          >
            <div className="drawer-news-bottom-content-close">
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="drawer-news-bottom-content-heading">
              {selectedResult.heading}
            </div>
            <a
              href={selectedResult.link}
              target="_blank"
              className="drawer-news-bottom-content-list"
              style={{ textDecoration: "none" }}
            >
              {selectedResult.link}
            </a>
            <div
              className="drawer-news-bottom-content-description"
              style={{ marginTop: "10px" }}
            >
              {selectedResult.description} Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Reprehenderit tempora dicta nam
              dolores similique architecto iusto, molestias tenetur laboriosam
              asperiores a culpa dolorum soluta. Necessitatibus eius sint optio
              autem ad.
            </div>
          </div>
        </SwipeableDrawer>
      )}
    </div>
  );
};

export default AllResultsTab;
