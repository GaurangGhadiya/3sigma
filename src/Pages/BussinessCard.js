import React from 'react'
import { IoIosCall } from 'react-icons/io';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';
import { ImEarth } from 'react-icons/im';

const BussinessCard = () => {
  return (
    <div style={{display : "flex", alignItems : "center", flexDirection : "column", backgroundColor : "#E6EEF1", backgroundImage : "linear-gradient(160deg, #E6EEF1 0px, #E6EEF1 230px, #E6EEF1 100px, white 0px, white 0px)", height : "100vh"}}>
        <img src="https://i.pinimg.com/originals/11/f2/fd/11f2fd963a2028fa67ce38ffe0e92bc5.png" height={180} width={180} style={{borderRadius : "50%", marginTop : "50px"}} />
        <h1 className='mt-3' style={{fontWeight : "500"}}>JASON VENN</h1>
        <h5 >CO-FOUNDER</h5>
        <p className='mt-4 px-4'>Use 1324 as OTP to login to you 3sigma CRM account. OTP is confidential and valid for 5 minits.</p>
        <div className='d-flex justify-contant-center mt-2'>
            <span style={{display : "flex", justifyContent : "center", alignItems : "center", backgroundColor : "#00A2E1", borderRadius : "50%", height : "25px", width : "25px"}}><IoIosCall color='white' size={16} /></span>&nbsp;&nbsp;
            <h5 style={{fontWeight : "600"}}>+1 (847) 347-846</h5>
        </div>
        <div className='d-flex justify-contant-center'>
            <span style={{display : "flex", justifyContent : "center", alignItems : "center", backgroundColor : "#00A2E1", borderRadius : "50%", height : "25px", width : "25px"}}><AiOutlineWhatsApp color='white' size={16} /></span>&nbsp;&nbsp;
            <h5 style={{fontWeight : "600"}}>+1 (847) 347-846</h5>
        </div>
        <div className='d-flex justify-contant-center'>
            <span style={{display : "flex", justifyContent : "center", alignItems : "center", backgroundColor : "#00A2E1", borderRadius : "50%", height : "25px", width : "25px"}}><CgMail color='white' size={16} /></span>&nbsp;&nbsp;
            <h5 style={{fontWeight : "600"}}>json@gmail.com</h5>
        </div>
        <div className='d-flex justify-contant-center'>
            <span style={{display : "flex", justifyContent : "center", alignItems : "center", backgroundColor : "#00A2E1", borderRadius : "50%", height : "25px", width : "25px"}}><ImEarth color='white' size={16} /></span>&nbsp;&nbsp;
            <h5 style={{fontWeight : "600"}}>www.3sigma.com</h5>
        </div>
        <div style={{position : "absolute", bottom : "60px", right : "5px", backgroundColor : "#00A0DC", height : "40px", width : "40px", display :"flex", justifyContent : "center", alignItems : "center", borderRadius : "50%",color : "white"}}>
            <AiOutlinePlus />
        </div>
        <div style={{position : "fixed" , bottom : "0px", backgroundColor : "#00A0DC", color : "white", width : "100%", textAlign :"center", padding :"10px"}}>
             <h5>6300 Riverside Plaza LN NW Ste 118</h5>
        </div>
    </div>
  )
}

export default BussinessCard