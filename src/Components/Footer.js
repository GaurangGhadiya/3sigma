
import React from 'react'

const footerOuter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height : "50px",
    marginBottom: "50px",
    
}
const Footer = () => {
  return (
    <div style={footerOuter}>
        <img src= {window.location.origin + "/assets/images/YellowLogo.png"}/>&nbsp;
        <h6>Powered by 3Sigma</h6>
    </div>
  )
}

export default Footer