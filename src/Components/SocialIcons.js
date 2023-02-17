import React from 'react'

const outerStyle = {
    background: "#F5F5F5",
border: "1px solid #000000",
borderRadius: "10px",
width : "90px"
}
const SocialIcons = ({logo, name}) => {
  return (
    <div style={outerStyle} className="text-center pt-2">
        <img src={logo} alt={name} />
        <p className='pt-1 text-blue'>{name}</p>
    </div>
  )
}

export default SocialIcons