import React, { Component, useEffect, useState, useRef } from "react";
import LoadingOverlay from "react-loading-overlay";
import { BottomSheet } from "react-spring-bottom-sheet";
import axios from "axios";
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

const inputStyle = {
  borderRadius: "10px",
  // backgroundColor: "lightgray",
  height: "40px",
  width: "360px",
  border: "none",
  outline: "none",
};

const iframeStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "20px",
  borderRadius: "10px",
};
function Housing(props) {
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
    let body ={
      integrationKey: "housing",
      details:{"USER_ID": data?.userId, "HOUSING_API_KEY": data?.key}
    }
      axios.post(`${process.env.REACT_APP_APIURL}v1/integration/user-integration`, body, header).then((res) => {
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
          title={"Housing.com Integration"}
          logo={window.location.origin + "/assets/images/housing.png"}
        />
        <div className="px-3 py-2">
          <div>
          Connect your Housing.com account and automatically import your inquiries 
          </div>
          <div className="mt-4">How does Housing.com integration work?</div>
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
          <div className="mt-4  ">UserID</div>
          <input type="text" style={inputStyle} className="mt-2" name="userId" onChange={handleChange} value={data?.userId}/>
          <div className="mt-1  ">Key</div>
          <input type="text" style={inputStyle} className="mt-2" name="key" onChange={handleChange} value={data?.key}/>

          <div style={bottomBtn} onClick={onSubmit}>
          <img src={window.location.origin + "/assets/images/housing.png"} />
            &nbsp;Connect Housing.com</div>
        </div>
      {/* </BottomSheet> */}
    </LoadingOverlay>
  );
}

export default Housing;
