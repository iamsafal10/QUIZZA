import React, { useEffect, useState } from "react";
import { decode } from "html-entities";

export default function P3Ques(props) {
  const [options, setOptions] = useState([]);
  const [correctBtn, setCorrectBtn] = useState(null);
  const [submittedBtn, setSubmittedBtn] = useState(null);
  const [leftBtn, setleftBtn] = useState(null);
  console.log(props.pairs)
  useEffect(() => {
    setOptions(props.choices.map(choice => decode(choice)));
  }, [props.choices]);
//khud se likha
useEffect(()=>{
  for(let i=0;i<10;i++)
{
  const ques=decode((props.pairs[i]).question);
  if(decode(props.question)===ques)
  {
    const sans=decode((props.pairs[i]).sans);
    if(sans!=""){
    for (let j = 0; j < options.length; j++) {
      if (options[j] === sans) {
        setSubmittedBtn((j + 1).toString());
      }
      if (options[j] === props.correct_answer) {
        setCorrectBtn((j + 1).toString());
      }
    }
  }
  else
  {
    for (let j = 0; j < options.length; j++) {
      if (options[j] === props.correct_answer) {
        setleftBtn((j + 1).toString());
      }
    }
  }
  }
}},[props.pairs, props.question, options, props.correct_answer])

//yahan tak
//actual starts
  // useEffect(() => {
  //   for (let i = 0; i < options.length; i++) {
  //     if (options[i] === props.correct_answer) {
  //       setCorrectBtn((i + 1).toString());
  //     }
  //   }
  // }, [options, props.correct_answer]);

  // useEffect(() => {
  //   for (let i = 0; i < options.length; i++) {
  //     if (options[i] === props.submitted_answer) {
  //       setSubmittedBtn((i + 1).toString());
  //     }
  //   }
  // }, [options, props.submitted_answer]);
//actual ends
  return (
    <div className="ques desktop:ml-96 laptop:ml-96 mobile:max-w-100 mobile:ml-98 tablet:ml-97 ">
      <h1 className="question mobile:min-w-96 ">{decode(props.question)}</h1>
      <div className="options">
        {options.map((option, index) => {
          const btnId = (index + 1).toString();
          let className = "";
          if(btnId===leftBtn)
          {
            className="blue";
          }
          else if (btnId === correctBtn) {
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