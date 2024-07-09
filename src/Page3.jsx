import React from "react";
import Page2 from "./Page2"
import Ques from "./QUES";
import P3Ques from "./P3QUES.jsx"
import Confetti from "react-confetti"

export default function Page3(props){
   
    //state to check if score is out of
    const [win,setwin]=React.useState(false)
    if(props.score===10)
        setwin(true)
    //functon to restart game

    //function to call restart function of App component which restarts the game
    function restart()
    {
        props.restart()
    }
    React.useEffect(()=>{
        // console.log(props.cans)
    },[])

    //an array storing info about a question (correct ans , incorrect ans , etc.)
    const ques=[]
    React.useEffect(()=>{})
    for(let i=0;i<(props.fques).length;i++)
        {
            ques.push(
                {
                    incorrect_answers:props.icans[i],
                    correct_answer:props.cans[i],
                    question:props.fques[i],
                    sans:props.sans[i],
                    choices:props.choices[i]
                }
            )
        }
        // console.log(ques)
        const arr = ques.map((e) =>{
             return(
               <P3Ques
                 question={e.question}
                 incorrect_answers={e.incorrect_answers}
                 correct_answer={e.correct_answer}
                 submitted_answer={e.sans}
                 choices={e.choices}
                 store_pairs={props.store_pairs}
          pairs={props.pairs}
               />
             )
           } );
    return(
        <div className="page3">
            {arr}
            {/* {win && <Confetti/>} */}
            <div className="display">
                You have submitted {props.score} correct answers 
            <button onClick={restart} className="play_again">Play Again!!
      </button>
            </div>
            </div>
    )
}