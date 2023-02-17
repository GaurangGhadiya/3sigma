import React from 'react'

const outerStyle = {
    height : "250px",
    // display : "flex",
    // justifyContent : "center",
    // alignItems : "center",
    backgroundColor : "#D9D9D9"
}
const Maps = () => {
  return (
    <div className='mt-2' style={outerStyle}>
      <iframe
                    title="map"
                    width="100%"
                    height="250px"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=silver%20business%20point,%20uttran,%20surat&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
    </div>
  )
}

export default Maps