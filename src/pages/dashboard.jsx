import React from 'react'
import { Banner } from "../sections/home";

const Dashboard = () => {
  return (
    <>
      <div class="card sticky-top text-center">
        <div class="card-body">
          <h5 class="card-title">Publish Your Courses</h5>
          <p class="card-text">You can publish own courses and make money easly.</p>
          <a href="/dashboard/add-course" class="btn btn-primary">Add Course</a>
        </div>
      </div>
      <h3 className="font-italic text-center mt-3 mb-3">All Featured Courses !</h3>
      <Banner />
      <Banner />
    </>
  )
}

export default Dashboard