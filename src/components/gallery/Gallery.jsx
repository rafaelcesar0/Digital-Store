import React from "react";
import { Carousel } from "@material-tailwind/react";

export default function CarouselDefault({ images }) {
    let imgs;
    return (
        <Carousel className="rounded-xl">{
            imgs = images.map(img => {
                return <img
                    src={img.image1}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
            })}
        </Carousel>
    );
}