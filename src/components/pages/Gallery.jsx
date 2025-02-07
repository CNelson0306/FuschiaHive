import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import gsap from 'gsap';
import './Gallery.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';
import img10 from '../../assets/img10.jpg';
import img11 from '../../assets/img11.jpg';
import img12 from '../../assets/img12.jpg';
import img13 from '../../assets/img13.jpg';
import img14 from '../../assets/img14.jpg';
import img15 from '../../assets/img15.jpg';
import img16 from '../../assets/img16.jpg';
import img17 from '../../assets/img17.jpg';
import img18 from '../../assets/img18.jpg';
import img19 from '../../assets/img19.jpg';
import img20 from '../../assets/img20.jpg';
import img21 from '../../assets/img21.jpg';
import img22 from '../../assets/img22.jpg';
import img23 from '../../assets/img23.jpg';
import img24 from '../../assets/img24.jpg';


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