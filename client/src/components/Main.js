import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';
import Posts from './Posts/Posts';
import Form from './Form/Form';

const Maiin = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <>
            <Posts setCurrentId={setCurrentId} />
            <Form currentId={currentId} setCurrentId={setCurrentId} />
        </>
    )
}

export default Maiin