import React from 'react'

const AddModule = () => {
  return (
    <>
      <form className='text-center'>


        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Module Name</label>
            <input type="email" class="form-control ml-3" id="inputEmail4" placeholder="Enter Module Name"></input>
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

export default AddModule