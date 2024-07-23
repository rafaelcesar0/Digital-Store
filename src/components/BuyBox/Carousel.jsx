import { Carousel } from "@material-tailwind/react";
 
function CarouselDefault() {
  return (
    <Carousel className="w-[700px] h-[570px]">
      <img
        src="public\sapato_exemplo-2.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="public\sapato_exemplo-3.png"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="public\sapato_exemplo-2.png"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default CarouselDefault