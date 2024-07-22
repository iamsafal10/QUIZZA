import React from "react";

export default function Page1(props){
    return(
        <div className="page1 mini-mobile:p-0">
            <div className="about_page1">
            <h1 className="page1_h1 tablet:xl mobile:text-base">QUIZZA</h1>
            <p className="page1_desc mobile:hidden tablet:block  mobile:text-xs ">Quiz Today, Lead Tomorrow</p>
            </div>
            
            <button onClick={props.click} className="start_quiz mobile:w-20 tablet:w-36 laptop:w-36">Start</button>
        </div>
    )

}