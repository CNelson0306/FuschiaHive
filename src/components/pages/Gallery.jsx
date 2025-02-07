import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import gsap from 'gsap';
import './Gallery.css';
const img1 = 'src/assets/img1.jpg';
const img2 = 'src/assets/img2.jpg';
const img3 = 'src/assets/img3.jpg';
const img4 = 'src/assets/img4.jpg';
const img5 = 'src/assets/img5.jpg';
const img6 = 'src/assets/img6.jpg';
const img7 = 'src/assets/img7.jpg';
const img8 = 'src/assets/img8.jpg';
const img9 = 'src/assets/img9.jpg';
const img10 = 'src/assets/img10.jpg';
const img11 = 'src/assets/img11.jpg';
const img12 = 'src/assets/img12.jpg';
const img13 = 'src/assets/img13.jpg';
const img14 = 'src/assets/img14.jpg';
const img15 = 'src/assets/img15.jpg';
const img16 = 'src/assets/img16.jpg';
const img17 = 'src/assets/img17.jpg';
const img18 = 'src/assets/img18.jpg';
const img19 = 'src/assets/img19.jpg';
const img20 = 'src/assets/img20.jpg';
const img21 = 'src/assets/img21.jpg';
const img22 = 'src/assets/img22.jpg';
const img23 = 'src/assets/img23.jpg';
const img24 = 'src/assets/img24.jpg';


//This slider was create by installing npm install gsap/react

const imageArray = [
              img1,img2,img3,img4,img5,img6,img7,img8,
              img9,img10,img11,img12,img13,img14,img15,
              img16,img17,img18,img19,img20,img21,img22,
              img23,img24
              ]

function Gallery () {

  const[midImage, setMidImage] = useState(0);
  const[rightImage, setRightImage] = useState(1);
  const[leftImage, setLeftImage] = useState(imageArray.length-1);

  useEffect(() => {
    if(midImage == 0) {
      setLeftImage(imageArray.length-1)
      setRightImage(1)
    }
    else if (midImage == imageArray.length-1)
    {
      setRightImage(0);
      setLeftImage(midImage-1);
    }
    else {
      setRightImage(0);
      setLeftImage(midImage-1);
    }
  },[midImage]);

  const increment = () => {
    if (midImage == imageArray.length-1) {
      setMidImage(0);
    }
    else {
      setMidImage(midImage+1);
    }

    // GSAP Animation
    gsap.fromTo('.middleImage',
      {x:-200, opacity:0, scale:0.6},
      {x:0, opacity:1, scale:1, duration:0.5}
    );
    gsap.fromTo('.rightImage',
      {x:600,opacity:0,scale:0.6},
      {x:0,opacity:1,scale:1,duration:0.5}
    );
    gsap.fromTo('.leftImage',
      {x:-500,opacity:0,scale:0.6},
      {x:0,opacity:1,scale:1,duration:0.5}
    );
  }

  const decrement=()=>{
    if(midImage == 0){
        setMidImage(imageArray.length-1);
    }
    else{
        setMidImage(midImage-1);
    }

    //GSAP Animation
    gsap.fromTo('.middleImage',
        {x:200,opacity:0,scale:0.6},
        {x:0,opacity:1,scale:1,duration:0.5}
    );
    gsap.fromTo('.rightImage',
        {x:600,opacity:0,scale:0.6},
        {x:0,opacity:1,scale:1,duration:0.5}
    );
    gsap.fromTo('.leftImage',
        {x:-500,opacity:0,scale:0.6},
        {x:0,opacity:1,scale:1,duration:0.5}
    );
}


  return (
    
      <div className='imageSlider'>
        <div className='imageSliderContainer'>
          <div className='images'>
            <img src={imageArray[rightImage]} className='rightImage' />
            <img src={imageArray[midImage]} className='middleImage' />
            <img src={imageArray[leftImage]} className='leftImage' />
          </div>
        </div>
        <div className='buttons'>
          <button className='leftButton' onClick={() => decrement()}><IoIosArrowBack />
          </button>
          <button className='rightButton' onClick={() => increment()}><IoIosArrowBack />
          </button>
        </div>

        <div className='dotsPlace'></div>

        {
          imageArray.map((_,index) => {
            <div className={`dots ${index === midImage ? 'active' : 'passive'}`}>....</div>
          })
        }
      </div>
    
    
  )
}

export default Gallery;