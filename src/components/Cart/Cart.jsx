import PropTypes from 'prop-types';

const Cart = ({courseList}) => {
    return (
        <div className='bg-white rounded-xl p-3 mb-auto w-1/4'>
            <h2 className='border-b-2 text-[#2F80ED] text-xl font-bold'>Credit Hour Remaining hr</h2>
            <p className='text-xl font-bold'>Course Name:</p>
            {courseList.map((course,idx)=>
                <div key={idx}>{idx+1}.{course.course_name}</div>
            )}
            <p className='border-t-2 text-base font-medium'>Total Credit Hour: </p>
            <p className='border-t-2 text-base font-semibold'>Total Price: USD</p>
        </div>
    );
};

Cart.propTypes = {
    courseList: PropTypes.array
}
export default Cart;