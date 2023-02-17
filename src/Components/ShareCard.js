import React from 'react'
import Footer from './Footer'
import SocialIcons from './SocialIcons'

const outerStyle = {
    background: "#EBEFF4",
    // height : "100vh",
}

const innerHeader = {
    width : "100%",
    textAlign: "center",
    paddingTop : "40px"
} 

const boxStyle = {
    marginTop : "50px",
    marginBottom : "70px",
    display : "flex",
    justifyContent : "space-around",
    alignItems : "center",
    width : "100%",
}
const ShareCard = () => {
  return (
    <div className='mt-2' style={outerStyle}>
        <header style={innerHeader}>
        Shared by 
        </header>
        <div className='border-rounded text-center mt-5'>
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
         height={100} width={100} style={{borderRadius : "50%"}}/>
         </div>

         <h6 className='text-center mt-5 font-weight-bold'>Vivek Rana</h6>

         <div className='mt-3 text-center'>
                <span>M: +909016193206</span><br/>
                <span>Comapny Name</span>
         </div>
         <div style={boxStyle}>
         <SocialIcons logo={window.location.origin + "/assets/images/call.png"} name="Call"/>
         <SocialIcons logo={window.location.origin + "/assets/images/sms.png"} name="SMS"/>
         <SocialIcons logo={window.location.origin + "/assets/images/whatsapp.png"} name="Whatsapp"/>
         </div>
         <Footer />
    </div>
  )
}

export default ShareCard