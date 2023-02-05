
import React from 'react'
import {useForm} from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

const SignUp =  () => {
  // const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async(body)=>{
      console.log(body)
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body:body })
      };
      console.log(requestOptions)
      const response = await fetch('http://localhost:4000/user/signup', requestOptions);
      const data = await response.json();
      console.log(data.status);
      if(data.status==true){
        alert(data.msg);
        // navigate("/");
      }
      else{
        alert(data.msg);
      }
      reset();
    }

    return (
        <div className='container'>
            <div className='container'>
                <form className='addCourseForm' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label for="exampleFormControlFile1">First Name:</label>
                        <input className="form-control" type="text" placeholder="Shubham" name='first_name' {...register("first_name")}></input>
                    </div>
                    <div>
                        <label for="exampleFormControlFile1">Last Name:</label>
                        <input className="form-control" type="text" placeholder="Dubey" name='last_name' {...register("last_name")}></input>
                    </div>
                    <div>
                        <label for="exampleFormControlFile1">Email:</label>
                        <input className="form-control" type="email" placeholder="abc@gmai.com" name='email_id' {...register("email_id")}></input>
                    </div>
                    <div>
                        <label for="exampleFormControlFile1">password:</label>
                        <input className="form-control" type="password"  name='password' {...register("password")}></input>
                    </div>
                    
                    <div class="text-center">
                        <button type="submit" className="mt-2 btn btn-dark text-white">Sign-Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
