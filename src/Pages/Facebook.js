import React, { Component, useEffect, useState, useRef } from "react";
import LoadingOverlay from "react-loading-overlay";
import { BottomSheet } from "react-spring-bottom-sheet";
// import 'react-spring-bottom-sheet/dist/style.css'
import axios from "axios"

import Integration from "../Components/Integration";
import { useParams } from "react-router-dom";
const bottomBtn = {
  backgroundColor: "#3A4B86",
  padding: "10px",
  color: "#FFFFFF",
  borderRadius: "15px",
  textAlign: "center",
  width: "92%",
  fontWeight: "500",
  fontSize: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  bottom: "20px",
};

const iframeStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "20px",
  borderRadius: "10px",
};

function Justdial(props) {
  const [open, setOpen] = useState(false);
   const [data, setData] = useState({})
   const {user_id} = useParams()

  const handleChange = (e) => {
      const {name, value} = e.target

      setData({...data, [name] : value});
  }

  const onSubmit = (e) => {
    let header = {
      headers: {
        'Authorization': `Bearer ${user_id}`
      }
    }
    let data ={
      integrationKey: "facebook",
      details:{fbUserId : "12",pageAccessToken : "321", fbUserAccessToken :"EAAI0QSZBZCDGsBACUvcdnIsPPdMy1yWwAuENSyvkNY1XOfrsULMdzBZCqCy7XxAHiydySUctKziKR0gbd4rOUDB4KaJddMws0CDbqFIjk7AvCKoCsRy0LC2CrEv3q0AHZB34f7nigN0EnnFV9wF3ifSDO1Jmrfm4ntJi6ptWZBrLZAnNO48sFI8xQC1yQYGoijNgdLJTvvBZAFylK3YSv7Q"}
    }
      axios.post(`${process.env.REACT_APP_APIURL}v1/integration/user-integration`, data,header).then((res) => {
        console.log("res", res)
      }).catch(err => console.log("error", err))
  }

  return (
    <LoadingOverlay>
      {/* <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet
        open={open}
        snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight / 0.2]}
        defaultSnap={({ lastSnap, snapPoints }) =>
          lastSnap ?? Math.max(...snapPoints)
        }
      > */}
        <Integration
          title={"Facebook Integration"}
          logo={window.location.origin + "/assets/images/facebook.png"}
        />
        <div className="px-3 py-2">
          <div>
            Connect your facebook lead ads account and automatically import your
            leads instantly .
          </div>
          <div className="mt-5 pt-5">How does facebook integration works?</div>
          {/* <textarea rows="3" cols="50" style={inputStyle} className="mt-2" /> */}
          <div style={iframeStyle}>
            <iframe
              width="300"
              height="150"
              frameBorder="0"
              borderRadius="5"
              style={{ borderRadius: "10px" }}
              src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
            ></iframe>
          </div>

          <div style={bottomBtn} onClick={onSubmit}>
            <img src={window.location.origin + "/assets/images/facebook.png"} />
            &nbsp; Connect Facebook
          </div>
        </div>
      {/* </BottomSheet> */}
    </LoadingOverlay>
  );
}

export default Justdial;
