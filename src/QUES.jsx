import React from "react";
import { decode } from "html-entities";
import Ans from "./ANS"

export default function Ques(props) {
  const [options, setOptions] = React.useState([]);

  //function to shuffle options after all options are combined
  function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    console.log(array)
    props.store_choices(array)
  }

// to store shuffled options
  React.useEffect(() => {
    // Create a copy of the options array before shuffling
    const shuffledOptions = [...props.incorrect_answers, props.correct_answer];
    // console.log(shuffledOptions)
    shuffle(shuffledOptions);
    setOptions(shuffledOptions);
  }, [props.incorrect_answers, props.correct_answer]);

  const cans = [];
  cans.push(props.correct_answer);

  //checking which button is selected by id
const [selectedbtn,setselectedbtn]=React.useState(null)

  const [id1, setid1] = React.useState("false");
  const [id2, setid2] = React.useState("false");
  const [id3, setid3] = React.useState("false");
  const [id4, setid4] = React.useState("false");

  function check_option(event) {
    const { id, value } = event.target;

    // storing submitted answer
    props.store_sans(value)

    if (value === cans[0]) {
     props.update_score()
      console.log("Correct answer selected");
    }
    setselectedbtn(id);//update selcted btn id
    
  }
  return (
    <div className="ques">
      <h1 className="question">{decode(props.question)}</h1>
      <div className="options">
        <button onClick={check_option} id="1" className={selectedbtn==="1"?"selected":""} value={decode(options[0])}>
          {decode(options[0])}
        </button>
        <button onClick={check_option} id="2" className={selectedbtn==="2"?"selected":""} value={decode(options[1])}>
          {decode(options[1])}
        </button>
        <button onClick={check_option} id="3" className={selectedbtn==="3"?"selected":""} value={decode(options[2])}>
          {decode(options[2])}
        </button>
        <button onClick={check_option} id="4" className={selectedbtn==="4"?"selected":""} value={decode(options[3])}>
          {decode(options[3])}
        </button>
      </div>
      <div className="line"></div>
    </div>
  );
}
