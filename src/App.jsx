import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Sidebar from './Component/Sidebr.jsx'; // Adjust the import path
import CreatePost from './Component/CreatePost';
import './App.css';
import PostList from './Component/PostList';
import UserContextProvider from './Store/UserContextProvider.jsx';

function App() {
  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <UserContextProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === 'Home' ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
