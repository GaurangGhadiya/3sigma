import React from 'react'
import { Carousel } from 'react-bootstrap';
import FileViewer from 'react-file-viewer';


const outerStyle = {
    height : "68vh",
    // width : "400px",
    // display : "flex",
    // justifyContent : "center",
    // alignItems : "center",
    backgroundColor : "#D9D9D9",
    textalign : "center",
}
const PdfCarousel = () => { 
  return (
    <div className='mt-2 p-2' style={outerStyle}>
      {/* <Carousel slide={true} className='video-carousel'>
                <Carousel.Item > */}
                {/* <FileViewer
                width={50}
                filePath={radhikaFile}
                fileType='pdf'
                onError={error =>
                  console.error("FileViewer error: ", { error })
                }
              /> */}
                {/* </Carousel.Item>

                <Carousel.Item>
                <FileViewer
                filePath={radhikaFile}
                fileType='pdf'
                onError={error =>
                  console.error("FileViewer error: ", { error })
                }
              />
                </Carousel.Item>
              </Carousel> */}
       
    </div>
  )
}

export default PdfCarousel