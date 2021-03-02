import React from "react";
import "../styles/Titles.css"

function Titles(props) {
    return (
        <div className="container">
        <div className="row">
            <div className="col-2 image">
                Employee Photo
            </div>
            <div className="col-2 align-middle" >
                <button type="button" className="name nameButton btn-secondary btn-sm" onClick={props.click}>
                    Name 👇
                </button> 
            </div>
            <div className="col-3 phone">
                Phone Number
            </div>
            <div className="col-3 align-middle">
                <button type="button" className="email emailButton btn-secondary btn-sm" onClick={props.click}>
                    Email 👇
                </button>
                
            </div>
            <div className="col-2 dob">
                Date Of Birth
            </div>
        </div>
    </div>

    )
} 

export default Titles;