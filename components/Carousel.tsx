import {useRef, useEffect, useState} from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import Arrow from '../svg/arrow.svg'

type CarouselProps = {
    images: Array<string>
}

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props

    return (
        <div
            className={"next-arrow"}
            onClick={onClick}
        >
            <Arrow/><Arrow/>
        </div>
    )
}
  
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props

    return (
        <div
            className={"prev-arrow"}
            onClick={onClick}
        >
            <Arrow/><Arrow/>
        </div>
    )
}

const Carousel = ( {images}: CarouselProps ) => {
    const [scrollBlocked, blockScroll] = useState(false)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: false,
        className: "carousel-slider",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    const slider = useRef(null)
    
    const wheel = (e: { deltaY: number; }) =>{
        if (slider === null) return 0
        e.deltaY > 0 ? (slider.current.slickNext()) : (slider.current.slickPrev())     
    }  

    useEffect(() => {
        const cancelWheel = (e: { preventDefault: () => any; }) => slider.current && e.preventDefault();
        document.body.addEventListener('wheel', cancelWheel, {passive:false});
        (scrollBlocked)? document.body.addEventListener('wheel', cancelWheel, {passive:false}) : document.body.removeEventListener('wheel', cancelWheel)
        return () => document.body.removeEventListener('wheel', cancelWheel)
    }, [scrollBlocked]) 

    if (images.length === 2) images.push(images[0])

    if (images.length > 0) {
        return (     
            <div
                className="carousel-outer"
                onWheel={wheel}
                onMouseEnter={() => blockScroll(true)}
                onMouseLeave={() => blockScroll(false)}
            >
                <Slider {...settings} ref={slider} >
                    {images.map((src) => (
                        <div
                            className="slide"
                            key={src}
                        >
                            <div
                                style={{ backgroundImage: "url(" + src +")",
                                backgroundPosition: 'left center',
                                backgroundSize: 'calc(100% - 10px) 100%',
                                backgroundRepeat: 'no-repeat',
                                width: '100%',
                                height: '100%', }}
                            ></div>
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