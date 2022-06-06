import React from 'react'
import {useRef, useEffect, useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
    images: Array<string>
  }

const Carousel = ( {images}: CarouselProps ) => {
    const [scrollBlocked, blockScroll] = useState(false);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        className: "carousel-slider"
    }
    const slider = useRef(null)
    const wheel = (e) =>{
        if (slider === null) {
            return 0
        }             
        e.deltaY > 0 ? (slider.current.slickNext()) : (slider.current.slickPrev())     
    }  
    useEffect(() => {
        const cancelWheel = e => slider.current && e.preventDefault();
        document.body.addEventListener('wheel', cancelWheel, {passive:false});
        (scrollBlocked)? document.body.addEventListener('wheel', cancelWheel, {passive:false}) : document.body.removeEventListener('wheel', cancelWheel)
        return () => document.body.removeEventListener('wheel', cancelWheel)
    }, [scrollBlocked])    
    if (images.length === 2) {
        images.push(images[0])
    }
    if (images.length > 0) {
        return (     
            <div
            onWheel={wheel}
            onMouseEnter={() => blockScroll(true)}
            onMouseLeave={() => blockScroll(false)}
            >
                <Slider {...settings} ref={slider} >
                {images.map((src, number) => (
                    <div
                    className="slide"
                    key={number}>                    
                        <img src={src}/>
                    </div>
                ))} 
                </Slider> 
            </div>
        )
    } else {
        return (<></>)
    }

}

export default Carousel