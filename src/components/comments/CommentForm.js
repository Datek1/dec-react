import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../services/comment.service";

const CommentForm = () => {
    const{register,reset,handleSubmit}=useForm()
    const saveComment = async (comment) => {
        const{data} = await commentService.create(comment)
        console.log(data);
        reset()
    }
    return (
        <form onSubmit={handleSubmit(saveComment)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Save comment</button>
        </form>
    );
};

export default CommentForm;