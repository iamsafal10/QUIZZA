import React from "react";

export default function Page1(props){
    return(
        <div className="page1">
            <div className="about_page1">
            <h1 className="page1_h1">QUIZZA</h1>
            <p className="page1_desc">Quiz Today, Lead Tomorrow</p>
            </div>
            
            <button onClick={props.click} className="start_quiz">Start Quiz</button>
        </div>
    )

}