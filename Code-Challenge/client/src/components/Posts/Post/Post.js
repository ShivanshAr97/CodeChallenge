import React from 'react';
import { AiOutlineEdit, AiOutlineLike } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import './Post.css'
import { likePost, deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="singlePost">

        <img className='postImage' src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />

        <div className='postDesc'>

          <div className="postHeadings">
            <h2 className='postTitle'>{post.title}</h2>
            <h5>{moment(post.createdAt).fromNow()}</h5>
          </div>
          
          <div className="postHeadings">
            <p className='postTags'>{post.tags.map((tag) => `#${tag} `)}</p>
            <button className='postEdit' onClick={() => setCurrentId(post._id)}><AiOutlineEdit size="16px" /></button>
          </div>

          <h2 className='postCreator'>By: {post.creator}</h2>

          <p className='postMessage'>{post.message}</p>

          <div className='postButtons'>
            <button className='postLike' onClick={() => dispatch(likePost(post._id))}><span>
              <AiOutlineLike size="16px" /> Like: {post.likeCount}</span>
            </button>
            <button className='postDelete' onClick={() => dispatch(deletePost(post._id))}><span>
              <BsTrash /> Delete</span>
            </button>
          </div>

        </div>

      </div>
    </>
  );
};

export default Post;
