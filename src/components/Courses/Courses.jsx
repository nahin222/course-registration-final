import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleSelect}) => {
    const [courses,setCourses] = useState([]);
    
    useEffect(()=>{
            fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    },[])
    
    return (
        <div className="md:w-3/4 lg:w-3/4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {courses.map((course,idx)=>
                <Course course={course} key={idx} handleSelect={handleSelect}></Course>
            )}
        </div>
    );
};

Courses.propTypes = {
    handleSelect: PropTypes.func
}

export default Courses;