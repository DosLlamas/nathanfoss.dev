import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
// import Disqus from "disqus-react";
import fm from "front-matter";
import Layout from "../components/Layout/Layout"; //Use and import Layout2 when you use multipage
import Favorite from "@mui/icons-material/Favorite";
import userRequest from "./userRequests";
function BlogDetails(props) {
  const [meta, setMeta] = useState([]);
  const [content, setContent] = useState("");
  const blogId = props.match.params.id;
  // const blogFile = props.match.params.title;
  // isPostLiked needs to fetch be fetched to the backend on page load to see if the user liked this post or not
  const [isPostLiked, setIsPostLiked] = useState(false);

  useEffect(() => {
    userRequest.get(`/blogs/${blogId}`)
    .then((response) => {
      setMeta(response.data)
    })
    .catch((error) => {
      console.log(error)
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const disqusShortname = "bako-1"; //found in your Disqus.com dashboard
  // const disqusConfig = {
  //   url: "https://jthemes.net/themes/react/bako", //Homepage link of this site.
  //   identifier: blogId,
  //   // title: blogFile,
  // };

  // document.body.classList.add("dark");
  //Uncomment the above line if you use dark version
  const likeHandler = (e) => {
    e.preventDefault()
    setIsPostLiked(!isPostLiked);
    const postId = {
      blogId,
    }
    console.log("blogId: ", blogId)
    console.log("postId: ", postId)
    // userRequest.post("/like_post", blogId)
  };
  return (
    <Layout>
      {console.log(meta)}
      <section className="shadow-blue white-bg padding mt-0">
        <ul className="list-inline portfolio-info mt-0">
          <li className="list-inline-item">
            <i className="icon-user"></i>
            {meta.author?.username ? meta.author.username : "Loading..."}
          </li>
          <li className="list-inline-item">
            <i className="icon-calendar"></i>
            {/* {meta.date} */}
            {console.log(meta)}
          </li>
          <li className="list-inline-item">
            <i className="icon-folder"></i>
            {/* {meta.category} */}
          </li>
        </ul>
        <div className="blog-content mt-4">
          <Markdown children={meta.content ? meta.title + "\n" + meta.content : "Loading..."}></Markdown>
        </div>
        <div className="mi-blog-details-comments mt-4">
          <form>
            <button
              className={
                isPostLiked ? "blog-favorite-btn-liked" : "blog-favorite-btn"
              }
              onClick={likeHandler}
              type="submit"
            >
              <Favorite /> 117
            </button>
          </form>
          {/* <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          /> */}
        </div>
      </section>
    </Layout>
  );
}

export default BlogDetails;
