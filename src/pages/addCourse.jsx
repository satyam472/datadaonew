import React from 'react'

const AddCourse = () => {
    return (
        <>
            {/* <h1>Hello Vaishal You can add video</h1> */}
            <form className='text-center'>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Course Name</label>
                        <input type="email" class="form-control ml-3" id="inputEmail4" placeholder="Enter Course Name"></input>
                    </div>

                    <div class="form-group col-md-3 ml-5 ">
                        <label for="exampleFormControlFile1">Select Course Image</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                    </div>

                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Tutor Name</label>
                        <input type="email" class="form-control ml-3" id="inputEmail4" placeholder="Enter Tutor Name"></input>
                    </div>

                    <div class="form-group col-md-3 ml-5 ">
                        <label for="exampleFormControlFile1">Select Tutor Icon</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                    </div>

                </div>


                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mb-3">Create Course</button>
            </form>
        </>
    )
}

export default AddCourse