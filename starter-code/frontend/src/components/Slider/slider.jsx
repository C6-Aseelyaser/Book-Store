import {useState} from 'react'
import Header from '../Header/Header';
import "./slider.css";

const  Slider=()=> {
    const [slideIndex, setslideIndex] = useState(0);
    const [sliderToggle, setSliderToggle] = useState(false)
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
                    <img src= './sliderimg/imge1 (1).jpg'  alt=""/>
                </div>
                <div className='slide-info-wrapper'>
                    <h1 className='slide-info-title'>Book Store</h1>
                    <p className='slide-info-desc'>It's not jsut reading. it's living the adventure.</p>
                </div>
            </div>
            <div className='slide second-slide'>
                <div className='slide-img-wrapper'>
                    <img src= './sliderimg/imge1 (2).jpg' alt=""/>
                </div>
                <div className='slide-info-wrapper'>
                    <h1 className='slide-info-title'>the Books For Everyone </h1>
                    <p className='slide-info-desc'>you can read at home or at the bookstore.</p>
                </div>
            </div>
            <div className='slide third-slide'>
                <div className='slide-img-wrapper'>
                    <img src= './sliderimg/imge1 (3).jpg' alt=""/>
                </div>
                <div className='slide-info-wrapper'>
                    <h1 className='slide-info-title'>Chek Out The New Titles</h1>
                    <p className='slide-info-desc'>we send you the book you want at home.</p>
                </div>
            </div>
        </div>
        {slideIndex !== 2 && <i onClick={()=>handleClick("right")}className="bi bi-chevron-right arrow-right"></i>} 
        <Header sliderToggle={sliderToggle} setSliderToggle={setSliderToggle} />
    </div>
  )
}

export default Slider