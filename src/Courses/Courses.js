import React from 'react';
import fakeData from '../fakeData/fakeData';
import { useState } from 'react';
import './Courses.css';
import Enrollments from '../Enrollments/Enrollments';
import Cart from '../Cart/Cart';



const Courses = () => {
    const first10 = fakeData.slice(0,15);
    const [course, setCourse] = useState(first10);
    
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course]; 
        setCart(newCart)
    }
    
    return (
        <div className="class-container">

            <div className="course-container clearfix flex-wrap">
            {
            course.map(course => <Enrollments 
                handleAddCourse = {handleAddCourse}
                course={course}> 
                </Enrollments>)
            }
                
            </div>

            <div className="enroll-container">
              <Cart cart={cart}>  </Cart>


            </div>

        </div>
    );
};

export default Courses;