import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Cart from './components/Cart/Cart';
import toast from 'react-hot-toast';


function App() {
  const [creditCount, setCreditCount] = useState(0);
  const [courseList, setCourseList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelect=(course)=>{
    if(courseList.includes(course)){
      toast('This course is already selected',{
        style: {
          color: 'red',
        }
      })
    }
    else{
      if(creditCount+course.credit>20){
        toast('Selecting this will exceed the credit limit',{
          style:{
            color: 'blue',
          }
        });
      }
      else{
        setCourseList([...courseList,course])
        setCreditCount(creditCount+course.credit);
        setTotalPrice(totalPrice+course.price);
      }
    }
    
  }

  //importing courses data from json

  return (
    <>
      <Header></Header>
      <div className='md:flex lg:flex max-w-7xl mx-auto'>
        <Courses className='' handleSelect={handleSelect}></Courses>
        <Cart courseList={courseList} creditCount={creditCount} totalPrice={totalPrice}></Cart>
      </div>

    </>
  )
}

export default App
