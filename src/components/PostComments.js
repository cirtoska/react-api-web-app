import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const PostComments = () => {
  let { id } = useParams();
  const commentsUrl = `https://dummyjson.com/comments/post/${id}`;
  let { pathname } = useLocation();
  return <div>PostComments</div>;
};

export default PostComments;
