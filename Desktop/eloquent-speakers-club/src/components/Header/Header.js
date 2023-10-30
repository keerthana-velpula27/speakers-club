import React from 'react'


function Header() {
    const styles={
        display:"flex",
        background:"lavender",
        height:"30vh",
        alignItems:"center",
        justifyContent:"center",
        fontWeight:"bold",
        fontSize:"50px",
        fontFamily:"verdana"
    }
  return (
    <div style={styles}>
        <img src={process.env.PUBLIC_URL + 'speaker.jpeg'} style={{width:"100px",height:"90px",borderRadius:"30px"}} alt=''/>
        ZELAR ELOQUENT SPEAKERS!
    </div>
  )
}

export default Header