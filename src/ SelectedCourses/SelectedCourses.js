import React from 'react';


const SelectedCourses = (props) => {
    
const {course, price}= props.course;
    return (
        <div className="">
            <ul>
                <li>
                    Course: {course} <br/> Fees: {price}
                </li>
            
            </ul> 
        </div>
    );
};

export default SelectedCourses;