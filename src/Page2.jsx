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
         props.store_fques(e.question)
         props.store_cans(e.correct_answer)
         props.store_icans(e.incorrect_answers)
        //  props.store_pair(e.question,"")
          return(
            <Ques
              // key={nanoId()}
              update_score={props.update_score}
              question={e.question}
              incorrect_answers={e.incorrect_answers}
              correct_answer={e.correct_answer}
              store_pair={props.store_pair}
              pair={props.pair}
              choices={props.choices}
              store_choices={props.store_choices}
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

  return (
    <div className="page2">
      {
      loading?

      (<div className="loading"><img className="img" src="Hourglass.gif" alt="loading gif"/>
      <div className="written">LOADING...</div></div>)
      :
      (<div className="unloading"><div className="questions">{array}</div>
      <div className="check_button"><button onClick={props.check_ans} className="check_answers">
        Check Answers
      </button></div>
      </div>)
      
      }
    </div>
  );
}