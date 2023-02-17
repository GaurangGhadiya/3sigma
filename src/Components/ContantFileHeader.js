import React from 'react'

const outerStyle = {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'column',
    height : "69px",
    background: "#EBEFF4"
}
const ContantFileHeader = ({fileName, userName}) => {
  return (
    <>
    <div style={outerStyle}>
        <h6 className='mt-2'>{fileName}</h6>
        <p>Prepared for {userName}</p>
    </div>
    </>
  )
}

export default ContantFileHeader