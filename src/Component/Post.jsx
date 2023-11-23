import React from 'react';

const Post = ({ userDes, userLink, userName }) => {
  return (
    <div className="card" style={{ width: '18rem', marginTop: '5px' }}>
      <div className="card-body">
        <h5 className="card-title">{userName}</h5>
        <p className="card-text">{userDes}</p>
        {/* Replace "#" with the actual URL */}
        <p>{userLink}</p>
      </div>
    </div>
  );
};

export default Post;
