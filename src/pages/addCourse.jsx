import React from 'react'
import {useForm} from 'react-hook-form';
const AddCourse = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data)=>{
        console.log(data)
        data.image="https://assets-global.website-files.com/6171e9fea621c60456b9f9ad/62cc4c57a212fe57e2e0cbbb_road-to-web3.png";
        console.log(data)
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          };
          fetch('https://dep-backend.vercel.app/course/addCourse', requestOptions)
          .then(response => response.json())
          .then(data =>{
            console.log(data+"this is from detail");
          });

          reset()
    }

    return (
        <>
        <div className='container'>
            <div className='container'>
                <form className='addCourseForm' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label for="exampleFormControlFile1">Course Name :</label>
                        <input className="form-control" type="text" placeholder="Course Name" name='course_name' {...register("course_name")}></input>
                    </div>
                    <div>
                        <label for="exampleFormControlFile1">Course Thumbnail :</label>
                        <input className="form-control" type="file" name='image_url' {...register("image_url")}></input>
                    </div>
                    <div>
                        <label for="exampleFormControlFile1">Tutor Name :</label>
                        <input className="form-control" type="text" placeholder="Tutor Name" name='tutor_name' {...register("tutor_name")}></input>
                    </div>
                    <div>
                        <label for="exampleFormControlFile1">Tutor Icon :</label>
                        <input className="form-control" type="file" name='tutor_icon' {...register("tutor_icon")}></input>
                    </div>
                    <div class="text-center">
                        <button type="submit" className="mt-2 btn btn-dark text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default AddCourse