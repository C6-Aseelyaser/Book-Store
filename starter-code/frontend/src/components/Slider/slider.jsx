// import {useState} from 'react'
// import "./slider.css";
// // import book1 from "../../../public/Images/book1.jpeg";
// // import book2 from "../../../public/Images/book2.png";
// // import book3 from "../../../public/Images/book3.jpeg";

// const  Slider=()=> {
//     const [slideIndex, setslideIndex] = useState(0);
//     const handleClick =(direction)=>{
//         if (direction==="left"){
//             setslideIndex(slideIndex-1);
//         }else{
//             setslideIndex(slideIndex+1);
//         }
//     } 
//   return (
//     <div className="slider-container">
//         {slideIndex !== 0 && <i onClick={()=>handleClick("left")}className="bi bi-chevron-double-left arrow-left"></i>}
//         <div style={{transform:`translateX(${slideIndex* -100}vw)`}} className='slider-wrapper'> 
//             <div className='slide first-slide'>
//                 <div className='slide-img-wrapper'>
//                     <img src='{book1}' alt=""/>
//                 </div>
//                 <div className='slide-info-wrapper'>
//                     <h1 className='slide-info-title'>Book Store</h1>
//                     <p className='slide-info-desc'>It's not jsut reading. it's living the adventure.</p>
//                 </div>
//             </div>
//             <div className='slide second-slide'>
//                 <div className='slide-img-wrapper'>
//                     <img src='{book2}' alt=""/>
//                 </div>
//                 <div className='slide-info-wrapper'>
//                     <h1 className='slide-info-title'>the Books For Everyone </h1>
//                     <p className='slide-info-desc'>you can read at home or at the bookstore.</p>
//                 </div>
//             </div>
//             <div className='slide third-slide'>
//                 <div className='slide-img-wrapper'>
//                     <img src='{book3}' alt=""/>
//                 </div>
//                 <div className='slide-info-wrapper'>
//                     <h1 className='slide-info-title'>Chek Out The New Titles</h1>
//                     <p className='slide-info-desc'>we send you the book you want at home.</p>
//                 </div>
//             </div>
//         </div>
//         {slideIndex !== 2 &&  <i onClick={()=>handleClick("right")}className="bi bi-chevron-double-right arrow-right"></i>}
       
//     </div>
//   )
// }

// export default Slider