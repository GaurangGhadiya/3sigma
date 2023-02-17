import React from 'react'
import { Carousel } from 'react-bootstrap'
// import ReactPlayer from 'react-player'

const outerStyle = {
    height : "250px",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "#D9D9D9"
}
const VideoCarousel = () => {
  return (
    <div className='mt-2' style={outerStyle}>
      <Carousel slide={false} className='video-carousel'>
                <Carousel.Item>
                {/* <ReactPlayer
                url='https://www.youtube.com/embed/c7POv4qiZLM'
                // pip={true}
                controls={true}
                playing={false}
                stopOnUnmount={true}
                height={250}
                width="100vw"
                
                /> */}
                </Carousel.Item>

                <Carousel.Item>
                {/* <ReactPlayer
                url='https://www.youtube.com/embed/2FPTVYj3ouE'
                // pip={true}
                controls={true}
                playing={false}
                stopOnUnmount={true}
                height={250}
                width="100vw"
                /> */}
                </Carousel.Item>
              </Carousel>

    </div>
  )
}

export default VideoCarousel