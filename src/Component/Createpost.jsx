import React, { useContext, useState } from 'react';
import './Create.css';
import UserContext from '../Store/UserContext';

const CreatePost = () => {
  const { setUserName, setUserDes, setUserLink, addPost } = useContext(UserContext);

  const [name, setName] = useState('');
  const [des, setDes] = useState('');
  const [link, setLink] = useState('');

  const inputName = (e) => {
    setName(e.target.value);
  };

  const inputDes = (e) => {
    setDes(e.target.value);
  };

  const inputLink = (e) => {
    setLink(e.target.value);
  };

  const handleClick = () => {
    setUserName(name);
    setUserDes(des);
    setUserLink(link);
    setName('');
    setDes('');
    setLink('');

    addPost({
      userName: name,
      userDes: des,
      userLink: link,
    });
  };

  return (
    <div className="create-post-container">
      <label htmlFor="name" className="create-form-label">
        Name:
      </label>
      <input type="text" id="name" className="create-form-input" value={name} onChange={inputName} />

      <label htmlFor="description" className="create-form-label">
        Description:
      </label>
      <input type="text" id="des" className="create-form-input" value={des} onChange={inputDes} />

      <label htmlFor="quoraLink" className="create-form-label">
        Quora Link:
      </label>
      <input type="text" id="quoraLink" className="create-form-input" value={link} onChange={inputLink} />

      <button className="create-submit-button" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default CreatePost;
