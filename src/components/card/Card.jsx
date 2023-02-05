import React, {useState, useEffect} from 'react';

const Card = () => {
  
  const[courses,setCourses] = useState([]); 

  const fetchCardDetails = async()=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch("http://localhost:4000/course/getAllCourse",requestOptions);
    console.log(response)
    const tempdata = await response.json();
    // const data = tempdata.map(JSON.parse);
    console.log(tempdata.response);
    setCourses(tempdata.response);
  }

  const addModule = async(data)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('https://dep-backend.vercel.app/addModule', requestOptions)
    .then(response => response.json())
    .then(data =>{
      console.log(data+"this is from detail");
    });
  }

  const addVideo = async(data)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('https://dep-backend.vercel.app/addvideo', requestOptions)
    .then(response => response.json())
    .then(data =>{
      console.log(data+"this is video form details");
    });
  }

  const getUserRole = async()=>{
    let address = ""
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({address:address})
    };
    fetch('https://dep-backend.vercel.app/getUserRole', requestOptions)
    .then(response => response.json())
    .then(data =>{
      console.log(data+"this is user info");
    });
  }

  const purchaseCourse = async()=>{
    let address = ""
    let tokenId = ""
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({address:address,tokenId:tokenId})
    };
    fetch('https://dep-backend.vercel.app/purchaseCourse', requestOptions)
    .then(response => response.json())
    .then(data =>{
      console.log(data+"this is user info");
    });
  }

  const purchaseVideo = async()=>{
    let address = ""
    let tokenId = ""
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({address:address,tokenId:tokenId})
    };
    fetch('https://dep-backend.vercel.app/purchaseCourse', requestOptions)
    .then(response => response.json())
    .then(data =>{
      console.log(data+"this is user info");
    });
  }


  useEffect(() => {
    fetchCardDetails()
  }, []);
  return (
    <>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div href="/dashboard/add-course" class="col">
            {
              courses.map((course,index)=>(              
                <div class="card mb-3">
                  <img src={course.image} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">{course.course_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <span>
                      <img src={course.image} class="card-img-top" alt="..."></img>
                      <h6 class="card-title">Author = {course.tutor_name}</h6>
                      <a href="/dashboard/course-details" class="btn btn-primary stretched-link">Go Track</a>
                    </span>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </>
  )
}

export default Card
