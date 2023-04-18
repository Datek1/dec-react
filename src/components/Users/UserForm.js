import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";


const UserForm = () => {
    const {register, handleSubmit, reset} = useForm()
    const save = async (user) => {
        const {data} = await userService.create(user)
        console.log(data);
        reset()
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'Name'} {...register('name')}/>
            <input type="text" placeholder={'Username'} {...register('username')}/>
            <button>Save</button>
        </form>
    );
};

export default UserForm;