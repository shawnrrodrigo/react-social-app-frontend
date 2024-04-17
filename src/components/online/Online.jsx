import React from "react";

function Online({user}) {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImageContainer">
          <img
            src={user.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarFriendName">{user.username}</span>
      </li>
    </div>
  );
}

export default Online;
