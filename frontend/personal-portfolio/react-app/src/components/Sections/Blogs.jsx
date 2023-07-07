import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Blog from "../Items/Blog";
import userRequest from "../../pages/userRequests";

function Blogs() {
  
  const [meta, setMeta] = useState([]);

  useEffect(() => {
    userRequest
      .get("/blogs")
      .then((response) => {
        setMeta(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="row">
        {meta.map(blog => (
          <div className="col-md-4" key={blog.title}>
            <Blog blog={blog} />
          </div>
        ))}
      </div>
      <div className="spacer" data-height="50"></div>
      <div className="text-center">
        <Link to="/blogs" className="btn btn-default">
          Show All Blogs
        </Link>
      </div>
    </>
  );
}
export default Blogs;
