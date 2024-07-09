import React from "react";
import Ques from "./QUES";
import { decode } from "html-entities";
import { decodeEntity } from "html-entities";
import Ans from "./ANS";

export default function Page2(props) {

  //state to check loading or loaded
  const [loading, setLoading] =React.useState(true);

  //state that stores all the rendered QUES components
  const [array, setArray] = React.useState([]);
  // console.log(props.cans)

  //fetch api for questions
  React.useEffect(() => {
    async function getData() {
      const url =
        "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setLoading(false)
          throw new Error(`Response status: ${response.status}`);
          
        }
        setLoading(false)
        const json = await response.json();
        const data = json.results;
        const arr = data.map((e) =>{
         props.store_fques(decode(e.question))
         props.store_cans(decode(e.correct_answer))
         props.store_icans(decode(e.incorrect_answers))
         props.store_pairs((decode(e.question)),"")
        //  props.store_cansid(e.)
          return(
            <Ques
              // key={nanoId()}
              update_score={props.update_score}
              question={(e.question)}
              incorrect_answers={(e.incorrect_answers)}
              correct_answer={(e.correct_answer)}
              store_sans={props.store_sans}
              sans={props.sans}
              choices={(props.choices)}
              store_choices={props.store_choices}
              store_pairs={props.store_pairs}
              pairs={props.pairs}
            />
          )
        } );
        setArray(arr);
      } catch (error) {
        console.error(error.message);
      }
    }
    
    getData();
  }, []);

  //returning on page
  return (
    <div className="page2">
      {loading?(<div className="loading"><img className="img" src="Hourglass.gif" alt="loading gif"/>
      <div className="written">LOADING...</div></div>):
      (<div className="unloading"><div className="questions">{array}</div>
      <div className="check_button"><button onClick={props.check_ans} className="check_answers">
        Check Answers
      </button></div>
      </div>)}
    </div>
  );
}