import React, { useEffect, useState } from 'react';

import Course from '../../Course/Course';

const Courses = () => {
    const [courses, setCourses]= useState([])
        
        useEffect(
            ()=>{
                fetch('./courses.JSON')
                .then(res=>res.json())
                .then(data=>setCourses(data))
            }, []
        )
    return (
        
        <div className="container" >
             <div className="my-3">
            <h2 className="text-warning text-center">Our Online Course</h2>
            <h5 className="text-center">Each Course Price: $99 </h5>
            </div>
            <div className="row ">
            {
                      courses.map(course => <Course
                      course={course}>

                      </Course>)
                            
                    }
            </div>
                     
                   
                    
              </div>  
        
    
    );
                }

export default Courses;