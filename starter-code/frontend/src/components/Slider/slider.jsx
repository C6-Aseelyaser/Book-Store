import {useState} from 'react'
import Header from '../Header/Header';
import "./slider.css";

const  Slider=()=> {
    const [slideIndex, setslideIndex] = useState(0);
    const handleClick =(direction)=>{
        if (direction==="left"){
            setslideIndex(slideIndex > 0 ? slideIndex-1:2);
        }else{
            setslideIndex(slideIndex < 2 ? slideIndex+1 :0);
        }
    } 
  return (
    <div className="slider-container">
   {slideIndex !== 0 &&  <i onClick={()=>handleClick("left")}className="bi bi-chevron-left arrow-left"></i>}
        <div style={{transform:`translateX(${slideIndex* -100}vw)`}} className='slider-wrapper'> 
            <div className='slide first-slide'>
                <div className='slide-img-wrapper'>
                    <img src= './sliderimg/slideimg6.jpg'  alt=""/>
                </div>
                <div className='slide-info-wrapper'>
                    <h1 className='slide-info-title'>Book Store</h1>
                    <p className='slide-info-desc'>“Books are a uniquely portable magic.” </p>
                </div>
            </div>
            <div className='slide second-slide'>
                <div className='slide-img-wrapper'>
                    <img src= './sliderimg/slideimg7.jpg' alt=""/>
                </div>
                <div className='slide-info-wrapper'>
                    <h1 className='slide-info-title'> The Reading </h1>
                    <p className='slide-info-desc'>“Any book that helps a child to form a habit of reading, to make reading one of his needs, is good for him.” </p>
                </div>
            </div>
            <div className='slide third-slide'>
                <div className='slide-img-wrapper'>
                    <img src= './sliderimg/imge1 (3).jpg' alt=""/>
                </div>
                <div className='slide-info-wrapper'>
                    <h1 className='slide-info-title'>A Friend!!</h1>
                    <p className='slide-info-desc'>“You know you have read a good book when you turn the last page and feel a little as if you have lost a friend.”</p>
                </div>
            </div>
        </div>
        {slideIndex !== 2 && <i onClick={()=>handleClick("right")}className="bi bi-chevron-right arrow-right"></i>} 
    </div>
  )
}

export default Slider