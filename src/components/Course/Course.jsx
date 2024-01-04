import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";


const Course = ({ course,handleSelect }) => {
    const { image_link: img, course_name: courseName, course_description: courseDesc, credit, price } = course;
    return (
        <div className='bg-white mb-3 mr-3 rounded-xl flex flex-col'>
                <img className='p-3' src={img} alt="" />
                <h2 className='font-semibold text-xl pb-2 text-wrap'>{courseName}</h2>
                <p className='font-normal pb-3 text- text-sm text-[#1C1B1B99]' >{courseDesc}</p>
                <div className='flex justify-between pb-4 mt-auto'>
                    <div className='flex'>
                        <FiDollarSign className='mt-1 '></FiDollarSign><p className='ml-2 font-medium text-base text-[#1C1B1B99]'> Price : {price}</p>
                    </div>
                    <div className='flex'>
                        <IoBookOutline className='mt-1 '></IoBookOutline><p className='ml-2 pr-2 font-medium text-base text-[#1C1B1B99]'> Credit : {credit}hr</p>
                    </div>
                </div>
                <div className=''>
                    <button className='bg-blue-500 w-11/12 mb-2 rounded-xl p-1 text-white' onClick={()=>handleSelect(course)}>Select</button>
                </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handleSelect: PropTypes.func
}

export default Course;