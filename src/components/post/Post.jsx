import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClicked = () =>{
    console.log('function called');
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((user) => user.id === post.userId)[0].profilePicture}
              alt=""
              className="postProfileImage"
            />
            <div className="postProfileName">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </div>
            <div className="postDate">{post.date}</div>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">{post?.desc}</div>
          <img src={post?.photo} alt="" className="postCenterImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="" className="likeImage" onClick={handleLikeClicked}/>
            <span className="likeCounter">{like} Like this</span>
          </div>
          <div className="postBottomRight"> {post.comment} Comments</div>
        </div>
      </div>
    </div>
  );
}
