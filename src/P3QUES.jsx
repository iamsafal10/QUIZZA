import React, { useEffect, useState } from "react";
import { decode } from "html-entities";

export default function P3Ques(props) {
  const [options, setOptions] = useState([]);
  const [correctBtn, setCorrectBtn] = useState(null);
  const [submittedBtn, setSubmittedBtn] = useState(null);

  useEffect(() => {
    setOptions(props.choices);
  }, [props.choices]);

  useEffect(() => {
    for (let i = 0; i < options.length; i++) {
      if (options[i] === props.correct_answer) {
        setCorrectBtn((i + 1).toString());
      }
    }
  }, [options, props.correct_answer]);

  useEffect(() => {
    for (let i = 0; i < options.length; i++) {
      if (options[i] === props.submitted_answer) {
        setSubmittedBtn((i + 1).toString());
      }
    }
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
