import React from 'react'
import {  Carousel, Image } from 'react-bootstrap';


const ImageCrousel = () => {
  return (
    <div className='mt-2'>   
    <Carousel >
    <Carousel.Item>
      <Image
        className="d-block w-100"
        src={"https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"}
        alt="First slide"
        height={550}
      />
    </Carousel.Item>

    <Carousel.Item>
      <Image
        className="d-block w-100"
        src={"https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"}
        alt="Second slide"
        height={550}
      />
    </Carousel.Item>

    <Carousel.Item>
      <Image
        className="d-block w-100"
        src={"https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"}
        alt="Third slide"
        height={550}
      />
    </Carousel.Item>
  </Carousel>
</div>
  )
}

export default ImageCrousel