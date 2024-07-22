import Gallery from '/gallery/Gallery.jsx';
import SlideImage from "/SlideImage.jsx";


const Gallery = () => {
  let slide = []
  for (let i = 0; i < SlideImage.length; i++){

    slide.push (<Gallery props={SlideImage[i]}/>)

  }
  return  <div> {slide} </div>
 
}

export default Gallery