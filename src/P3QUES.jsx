import React, { useEffect, useState } from "react";
import { decode } from "html-entities";

export default function P3Ques(props) {
  const [options, setOptions] = useState([]);
  const [correctBtn, setCorrectBtn] = useState(null);
  const [submittedBtn, setSubmittedBtn] = useState(null);
 
  useEffect(() => {
    setOptions(props.choices);
   
  }, [props.choices]);

  useEffect(()=>{
    console.log(props.question)
    console.log(props.incorrect_answers)
    console.log(props.correct_answer)
    console.log(props.choices)

  },[])
  useEffect(() => {
    for (let i = 0; i < (props.pair).length; i++) {
      const ques=(props.pair)[i].question;
      const sans=(props.pair)[i].sans;
      // console.log(ques)
      if(ques==props.question)
        {
          for(let j=0;j<options.length;j++)
          {
            if (options[j] === props.correct_answer && (sans!="")) 
              {
                setCorrectBtn((j + 1).toString());
              }
          }
          // flag=true;
          break;
        }
        //no marks shows question unattempted
    }
  }, [options, props.correct_answer]);
useEffect(()=>{
  console.log(props.pair)
},[])
  useEffect(() => {
  
    let flag=false;
    for (let i = 0; i < (props.pair).length; i++) {
      const ques=(props.pair)[i].question;
      const sans=(props.pair)[i].sans;
      // console.log(ques)
      if(ques==props.question)
        {
          for(let j=0;j<options.length;j++)
          {
            if (options[j] === sans) {
                setSubmittedBtn((j + 1).toString());
              }
          }
          flag=true;
          break;
        }
    }
    // if(flag===false)
    // {

    // }

  }, [options, props.submitted_answer]);

  return (
    <div className="ques">
      <h1 className="question">{decode(props.question)}</h1>
      <div className="options">
        {options.map((option, index) => {
          const btnId = (index + 1).toString();
          let className = "";
          if (btnId === correctBtn) {
            className = "green";
          } else if (btnId === submittedBtn) {
            className = "red";
          }
          return (
            <button
              key={index}
              id={btnId}
              className={className}
              value={decode(option)}
            >
              {decode(option)}
            </button>
          );
        })}
      </div>
      <div className="line"></div>
    </div>
  );
}
