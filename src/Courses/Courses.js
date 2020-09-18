import React from 'react';
import fakeData from '../fakeData/fakeData';
import { useState } from 'react';
import './Courses.css';
import Enrollments from '../Enrollments/Enrollments';
import Cart from '../Cart/Cart';
import SelectedCourses from '../ SelectedCourses/SelectedCourses';
import { addToDatabaseCart, getDatabaseCart } from '../Utilities/DatabaseManager';
import { useEffect } from 'react';


const Courses = () => {
        
        const [course, setCourse] = useState(fakeData);
        const [cart, setCart] = useState([]);

        const [enroll, setEnroll] = useState([]);

        const handleAddCourse = (course) => {
        const newCart = ([...cart, course]); 
        setCart(newCart);
        
        const sameItem = newCart.filter(crs => crs.id === course.id)
        const count = sameItem.length;
        addToDatabaseCart (course.id, count);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const courseIds = Object.keys(savedCart);

        const cartCourses = courseIds.map(id => {
            const course = fakeData.find(crs => crs.id === id);
            course.quantity = savedCart[id];
            return course;
        });
            setCart(cartCourses);
    },[])

    return (
        <div className="class-container">

            <div className="row">
            {
            course.map(course => <Enrollments 
                key={course.id}
                handleAddCourse = {handleAddCourse}
                course={course}> 
                </Enrollments>)
            }
            </div>

            <div className="enroll-container">
              <Cart cart={cart} ></Cart>
              
                {
                cart.map(crs=><SelectedCourses 
                     course={crs}>
                    </SelectedCourses>)
                }
             
            </div>
        </div>
    );
};

export default Courses;