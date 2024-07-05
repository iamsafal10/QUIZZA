import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
export default function App() {
  //state and function to store submitted answers
  const [sans, set_sans] = React.useState([]);

  //score state
  const [score, setscore] = React.useState(0);
  function update_score() {
    setscore((prev) => prev + 1);
  }
  function store_sans(e) {
    set_sans((prev) => {
      return [...prev, e];
    });
  }
  // state and function to store options
  const [choices, set_choices] = React.useState([]);
  function store_choices(e)
  {
    set_choices(
      (prev) => {
        return [...prev,e];
      }
    );
  }

  //state and function to store all the questions fetched
  const [fques, set_fques] = React.useState([]);

  function store_fques(e) {
    set_fques((prev) => {
      return [...prev, e];
    });
  }
  //state and function to store all incorrect answers
  const [icans, set_icans] = React.useState([]);

  function store_icans(e) {
    set_icans((prev) => {
      return [...prev, e];
    });
  }

  //state to store all the answers of user

  //state and function to store all correct answers

  const [cans, set_cans] = React.useState([]);

  function store_cans(e) {
    set_cans((prev) => {
      return [...prev, e];
    });
  }
  function restart() {
    setFirst(true);
    setStartQuiz(false);
    setCheckAnswers(false);
  }

  //states to display diff pages
  const [first, setFirst] = React.useState(true);
  const [startQuiz, setStartQuiz] = React.useState(false);
  const [checkAnswers, setCheckAnswers] = React.useState(false);
  const [playAgain, setPlayAgain] = React.useState(false);

  function start_quiz() {
    setStartQuiz(true);
    setFirst(false);
    // console.log("func gets logged");
  }
  function check_ans() {
    setFirst(false);
    setStartQuiz(false);
    setCheckAnswers(true);
  }
  return (
    <div>
      {first && <Page1 click={start_quiz} />}

      {startQuiz && (
        <Page2
          update_score={update_score}
          score={score}
          check_ans={check_ans}
          fques={fques}
          store_fques={store_fques}
          store_cans={store_cans}
          icans={icans}
          store_icans={store_icans}
          cans={cans}
          store_sans={store_sans}
          sans={sans}
          choices={choices}
          store_choices={store_choices}
        />
      )}

      {checkAnswers && (
        <Page3
          score={score}
          sans={sans}
          fques={fques}
          cans={cans}
          icans={icans}
          restart={restart}
          choices={choices}
        />
      )}
    </div>
  );
}
