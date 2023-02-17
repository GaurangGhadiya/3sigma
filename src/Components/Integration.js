import React from 'react'

const integrationOuter ={
    backgroundColor : "#4C88D3",
    padding : "20px",
    color : "#FFFFFF",
    borderRadius : "10px",
    textAlign : "center",
    width : "100%",
    fontWeight : "700",
    fontSize : "16px",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    height : "75px"
}
const roundIcon = {
  backgroundColor : "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding : "10px 10px",
  borderRadius : "50%"
}
const Integration = ({title, logo, isRounded}) => {
  return (
    <>
    <div style={integrationOuter}>
     {isRounded ? <span style={roundIcon}><img src={logo}/></span> : <img src={logo}/> }  &nbsp; {title}
    </div>
    </>
  )
}

export default Integration