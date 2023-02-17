import React from 'react'

const outerStyle = {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'column',
    backgroundColor : '#D9D9D9'
}
const FindOut = () => {
  return (
    <div className='mt-2' style={outerStyle}>
        <h6 className='mt-3'>Want to find out more ?</h6>
        <p className='mt-1' style={{color : "#2536CC"}}>Contact me </p>
    </div>
  )
}

export default FindOut