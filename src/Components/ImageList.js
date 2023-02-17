import React from 'react'

const outerStyle = {
    height : "300px",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "#D9D9D9"
}
const ImageList = () => {
  return (
    <div className='mt-2' style={outerStyle} ><img src="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
    height="100%" width="100%"
    /></div>
  )
}

export default ImageList