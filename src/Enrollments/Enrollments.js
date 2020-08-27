import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Enrollments.css';

const Enrollments = (props) => {
    const {course, content, price, img} = props.course;
    return (
        <div className="card-deck" > 
            
                     <div className="card">
                         <div>
                             <img src={img} className="card-img-top" alt=""/>
                         </div>
                        <div className="card-body" >
                        <h5 className="card-title"> {course}</h5>
                         <p className="card-text"><strong>Course Description:</strong> {content}</p>
                         
                        </div>
    
                        <div className="card-footer">
                        <p><small className="price-text">Course Fees: Tk. {price}   </small></p>
                        <button type="button"  className="btn btn-success" onClick={()=>props.handleAddCourse(props.course)}> <FontAwesomeIcon icon={faShoppingCart} />  Enroll Now</button>
                        </div>
                        
    
                

        </div>
        </div>
        
    );
};

export default Enrollments;