import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout"; //Use and import Layout2 when you use multipage
import Blog from "../components/Items/Blog";
import Pagination from "../components/Items/Pagination";
import userRequest from "./userRequests";

function Bloglist() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    userRequest
      .get("/blogs")
      .then((response) => {
        setPosts(response.data);
        console.log("posts:", posts)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  console.log(posts)
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <section className="shadow-blue white-bg padding mt-0">
        <div className="row -mt-50">
          {currentPosts.map((blog) => (
            <div className="col-md-6 mt-50" key={blog.title}>
              <Blog blog={blog} />
            </div>
          ))}
        </div>
        <div className="spacer" data-height="50"></div>
        {!(posts.length > postsPerPage) ? null : (
          <Pagination
            itemsPerPage={postsPerPage}
            totalItems={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </section>
    </Layout>
  );
}

export default Bloglist;
