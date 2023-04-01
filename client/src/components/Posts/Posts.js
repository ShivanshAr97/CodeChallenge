import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import './Posts.css'

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <h1 className='postsHeading'>ADD MEMORY TO PREVIEW</h1>  : (
      <div className='posts'>
        <div className='postsDesc'>
          {posts.map((post) => (
            <div key={post._id} >
              <Post post={post} setCurrentId={setCurrentId} />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Posts;
