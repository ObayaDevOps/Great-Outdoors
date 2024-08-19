import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'



const Carousel2 =()=> {

    const slides =[
        {   
            img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1719928250/IMG_3683-scaled_wby9wk.jpg",
            width: 770,
            height: 300,
            caption: "Great Outdoors",
            label: "At Home in Nature",
    
        },
        {   
          img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990249/MG_2753-2_vkitl3.jpg",
          width: 1024,
          height: 683,
          caption: "Great Outdoors",
          label: "Cozy Cottages",
        
        },
        {   
          img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1716990366/MG_2898-2_y3khog.jpg",
          width: 1024,
          height: 683,
          caption: "Great Outdoors",
          label: "Corporate Retreats",
        
        },
        {   
          img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101466/IMG_4045-scaled_umaqq6.jpg",
          width: 1024,
          height: 683,
          caption: "Great Outdoors",
          label: "Find Serenity",
        
        },
        {   
          img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101887/A7300820-1024x683_rh8gsj.jpg",
          width: 1024,
          height: 683,
          caption: "Great Outdoors",
          label: "Gourmet Food",
        
        },
        {   
          img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101644/IMG_4475-scaled_zlmfjc.jpg",
          width: 770,
          height: 300,
          caption: "Great Outdoors",
          label: "Premium Lodging",
    
      },
      {   
        img: "https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1720101818/A7300337-1024x683_trpffp.jpg",
        width: 770,
        height: 300,
        caption: "Great Outdoors",
        label: "At Home in Nature",
    
      },
        
      ] 
        return (
            <Carousel>
          {slides.map((slide, sid) => (                
                <div>
        <Image src={slide.img} 
        width={slide.width} height={slide.height}/>
                </div>
                
            ))}
            </Carousel>
        )
};


export default Carousel2