import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Page from './Page';
import axios from 'axios';

function Pagination() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const fetchPosts = async () => {
    await setLoading(true);
    const res = await axios.get('https://randomuser.me/api/?results=51');
    if (res.status === 200) {
      await setPosts(res.data.results);
      await setLoading(false)
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="wrapper">
      <h1>My Blog</h1>
      <Posts post={currentPosts} loading={loading} />
      <Page
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Pagination;
