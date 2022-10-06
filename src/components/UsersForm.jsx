import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "../Styles/UsersForm.css"

const UsersForm = ({ createNewUsers, response, updateCarById }) => {
    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        if (response) {
            reset(response)
        }
    }, [response])

    const defaultValues = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: ""
    }
    const submit = data => {
        if (response) {
            //Update
            updateCarById(response.id, data)
        } else{
            //create
            createNewUsers(data)
        }
        reset(defaultValues)
    }

    return (
        <div className='card-newuser'>
            <h1 className='card__newuser-tittle'>New User</h1>
            <form onSubmit={handleSubmit(submit)} >
                <div className='user'>
                    <div className='user__item'>
                        <i className="fa-solid fa-user"></i>
                        <label htmlFor="first_name"></label>
                        <input {...register("first_name")} type="text" id='first_name' placeholder='First Name: ' />
                    </div>
                    <div className='user__item'>
                        <label htmlFor="last_name"></label>
                        <input  {...register("last_name")} type="text" id="last_name" placeholder='Last Name: ' />
                    </div>
                </div>
                <div className='user__item'>
                    <i className="fa-solid fa-envelope"></i>
                    <label htmlFor="email"></label>
                    <input {...register("email")} type="email" id="email" placeholder='Email: '/>
                </div>
                <div className='user__item'>
                    <i className="fa-solid fa-lock"></i>
                    <label htmlFor="password"></label>
                    <input {...register("password")} type="password" id="password" placeholder='Password: ' />
                </div>
                <div className='user__item'>
                <i className="fa-solid fa-cake-candles"></i>
                    <label htmlFor="birthday"></label>
                    <input {...register("birthday")} type="date" id="birthday" placeholder='Birthday: '/>
                </div>
                <button className='btn'>{response ? "Update" : "Create"}</button>
            </form>

        </div>
    )

}

export default UsersForm