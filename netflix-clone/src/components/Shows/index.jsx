import { Slide } from "@mui/material";
import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const handleDragStart = (e) => e.preventDefault();

const items = [
    <img
        src="https://image.tmdb.org/t/p/w500/y5Z0WesTjvn59jP6yo459eUsbli.jpg"
        onDragStart={handleDragStart}
        role="button"
        width="250"
        // height="168"
    />,
    <img
        src="https://image.tmdb.org/t/p/w500/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
        onDragStart={handleDragStart}
        role="button"
        width="250px"
    />,
    <img
        src="https://tse1.mm.bing.net/th?id=OIP.bNG9VN4sW9aWr3DTdGbzigHaEK&pid=Api&P=0"
        onDragStart={handleDragStart}
        role="button"
        width="250px"
    />, 
    <img
        src="https://image.tmdb.org/t/p/w500/y5Z0WesTjvn59jP6yo459eUsbli.jpg"
        onDragStart={handleDragStart}
        role="button"
        width="250"
        // height="168"
    />,
    <img
        src="https://image.tmdb.org/t/p/w500/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
        onDragStart={handleDragStart}
        role="button"
        width="250px"
    />,
    <img
        src="https://tse1.mm.bing.net/th?id=OIP.bNG9VN4sW9aWr3DTdGbzigHaEK&pid=Api&P=0"
        onDragStart={handleDragStart}
        role="button"
        width="250px"
    />, 
    <img
        src="https://image.tmdb.org/t/p/w500/y5Z0WesTjvn59jP6yo459eUsbli.jpg"
        onDragStart={handleDragStart}
        role="button"
        width="250"
        // height="168"
    />,
    <img
        src="https://image.tmdb.org/t/p/w500/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
        onDragStart={handleDragStart}
        role="button"
        width="250px"
    />,
    <img
        src="https://tse1.mm.bing.net/th?id=OIP.bNG9VN4sW9aWr3DTdGbzigHaEK&pid=Api&P=0"
        onDragStart={handleDragStart}
        role="button"
        width="250px"
    />, 
];

const Shows = ({category}) => {
    return (
        <div>
            <div style={{fontSize: '22px', fontWeight: 'bold', color: 'white'}}>{category}</div>
            <AliceCarousel
                mouseTracking
                items={items}
                controlsStrategy="alternate"
                responsive={{
                    0: { items: 2 },
                    568: { items: 4 },
                    1024: { items: 6 },
                }}
                disableDotsControls
                animationDuration={100}
            />
            
        </div>
    );
}

export default Shows;