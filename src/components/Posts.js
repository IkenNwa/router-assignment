import React from 'react';

function Posts({ post, loading }) {
  if (loading) {
    return <h2 className="loading" >Wait a Sec!</h2>;
  }

  return (
    <div className="grid">
      {post.map( (posts) => (
        <div className="post" key={posts.id.value}>
          <div>
            <img className="image" src={posts.picture.large} alt={} />
            </div>
          <div>
          <h2>{posts.name.title} {posts.name.first} {posts.name.last}</h2>
          <p>{posts.dob.age} {posts.gender}</p>
          <p>{posts.phone}</p>
          </div>
        </div>
      ))
      }
    </div>
  );
}

export default Posts;
