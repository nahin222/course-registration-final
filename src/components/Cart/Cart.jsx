import PropTypes from 'prop-types';

const Cart = ({ courseList, creditCount, totalPrice }) => {
    
    const maxCredit = 20;

    return (
        <div className='bg-white rounded-xl p-3 mb-auto w-1/4'>
            <h2 className='border-b-2 text-[#2F80ED] text-xl font-bold pb-3'>Credit Hour Remaining {maxCredit-creditCount}hr</h2>
            <p className='text-xl font-bold pt-3 pb-3'>Course Name</p>
            <div className='pb-3'>
                {courseList.map((course, idx) =>
                    <div className='text-base font-normal text-[#1C1B1B99]' key={idx}>{idx + 1}.{course.course_name}</div>
                )}
            </div>
            <p className='pt-3 pb-3 border-t-2 text-base font-medium'>Total Credit Hour: {creditCount}</p>
            <p className='pt-3 pb-3 border-t-2 text-base font-semibold'>Total Price: {totalPrice} USD</p>
        </div>
    );
};

Cart.propTypes = {
    courseList: PropTypes.array,
    creditCount: PropTypes.number,
    totalPrice: PropTypes.number
}
export default Cart;