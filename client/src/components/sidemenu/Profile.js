
import React from 'react'
import { Link } from "react-router-dom";
import davi from "../../assets/images/davi.jpg"

const Profile = ({name}) => {
    return (
        <div className="profile">
            <img src={davi} alt="" style={{
                margin: "15px auto",
                display: "block",
                width: "120px",
                border: "8px solid #2c2f3f",
                borderRadius: "50%",
                height: "120px"
            }} />
            <Link to="/" style={{ textDecoration: "none", color: "white", marginTop: "10px" }}>
                <h1>{name}</h1>
            </Link>
        </div>
    )
}

export default Profile