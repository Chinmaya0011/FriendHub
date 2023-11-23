import React, { useContext } from 'react';
import Post from './Post';
import '../App.css';
import UserContext from '../Store/UserContext';

function PostList() {
  const { posts } = useContext(UserContext);

  if (posts.length === 0) {
    return <div className="post-list-empty">Create Your First Post</div>;
  }

  return (
    <div className='post-list'>
      {posts.map((post, index) => (
        <Post key={index} userName={post.userName} userDes={post.userDes} userLink={post.userLink} />
      ))}
    </div>
  );
}

export default PostList;
