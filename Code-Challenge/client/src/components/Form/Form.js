import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import './Form.css'

import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <div className='wholeForm'>

      <form>
        <h2 className='formHead'>{currentId ? `Editing "${post.title}"` : 'Create a Capsule'}</h2>
        <input className='formInput' type="text" name="title" placeholder="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <input className='formInput' type="text" placeholder="Creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <input className='formInput' type="text" name="message" placeholder="Message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <input className='formInput' type="text" name="tags" placeholder="Tags (coma separated)" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className='formFiles'><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>

        <div className='formButtons'>
          <button className='formBtn formBtn1' onClick={handleSubmit} type="submit" >Submit</button>
          <button className='formBtn fornBtn2' onClick={clear} >Clear</button>
        </div>
      </form>

    </div>
  );
};

export default Form;
