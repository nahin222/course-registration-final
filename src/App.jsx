import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Cart from './components/Cart/Cart';

function App() {
  const [creditCount, setCreditCount] = useState(0);
  const [courseList, setCourseList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [flag,setFlag] = useState(0);

  const handleSelect=(course)=>{
    if(courseList.includes(course)){
      console.log('already exists'+flag);
      setFlag(1);
    }
    else{
      setCourseList([...courseList,course])
      setCreditCount(creditCount+course.credit);
      setTotalPrice(totalPrice+course.price);
    }
    
    // setCourseList([...courseList,course])
    // setCreditCount(creditCount+course.credit);
    // setTotalPrice(totalPrice+course.price);
  }

  //importing courses data from json

  return (
    <>
      <Header></Header>
      <div className='flex max-w-7xl mx-auto'>
        <Courses className='' handleSelect={handleSelect}></Courses>
        <Cart courseList={courseList} creditCount={creditCount} totalPrice={totalPrice}></Cart>
      </div>

    </>
  )
}

export default App
