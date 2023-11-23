import React, { useState } from 'react';
import UserContext from './UserContext';

function UserContextProvider({ children }) {
  const [userName, setUserName] = useState();
  const [userDes, setUserDes] = useState();
  const [userLink, setUserLink] = useState();
  const [posts, setPosts] = useState([]); // Initialize as an empty array

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <UserContext.Provider
      value={{
        posts,
        addPost,
        userName,
        setUserName,
        userDes,
        setUserDes,
        userLink,
        setUserLink,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
