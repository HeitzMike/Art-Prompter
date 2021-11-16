import {
  someActions,
  subjects,
  styles,
  //stuffList, TODO add stuff list to the string at some point?
  adjectives,
  scenarios,
} from "../data/actionsList";

import a from "indefinite"; //indefinite npm function installed

import { useState, useEffect } from "react";

export default function Randomizer() {
  const [text, setText] = useState("Click Generate For A Randomized Prompt!");

  const [actionsList, setActionsList] = useState(someActions);

  // TODO big list

  // 1. change randomizers to generate from the list stored in state instead
  // 2. render the controls for the different actions and subjects
  //   - map over the state version of the list
  //   - whether the checkbox is checked is based on the "selected" property of the item
  // 3. write functions to change the state for each list based on the items selected
  // 4. updating your randomizer to only use selected items when generating (filter before hand)

  // useEffect with an empty array will be called once when the component mounts
  // useEffect(() => {
  //   setRandomText();
  // }, []);

  // produces a random index from array
  const getRandomElement = (list) => {
    let randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  };

  const setRandomText = () => {
    //this is the start of how toggle on and off of certain indexes will start, property "selected" in actionsList
    const filteredActions = actionsList.filter((action) => {
      return (action.selected = true);
    });

    //getting random indexes from each list and sublist
    const randomAction = getRandomElement(filteredActions);
    const randomSubAction = getRandomElement(randomAction.subactions);

    const randomSubject = getRandomElement(subjects);
    const randomSubSubject = getRandomElement(randomSubject.list);

    const randomAdjective = getRandomElement(adjectives);
    const randomScenario = getRandomElement(scenarios);
    const randomStyle = getRandomElement(styles);

    //set text to blank and subesquently add to it
    let text = "";

    //string together Action, Adjective, Style, Subject, Scenario, SubAction

    text += randomAction.action + " ";

    text += " a " + randomAdjective + " ";

    text += randomStyle + " ";
    //TODO if style is 3-4 panel comic then style comes right before subject
    //if style is still life then

    if (randomSubject.list === false) {
      text += randomSubject.subject + " ";
    } else {
      text += randomSubSubject + " ";
    }
    //TODO if hybrid then randomized list + randomized list as subject

    text += randomScenario + " ";

    // if index needs preposition or article attach whicever or not
    if (randomAction.preposition) {
      text += " with ";
    }
    if (randomAction.article) {
      text += " as " + a(randomSubAction);
    } else {
      text += randomSubAction;
    }

    //console log full sentence
    console.log(text);

    //set blank text to full string of randomized variables
    setText(text);
  };

  //return the random string and a button for generating new randomization
  return (
    <>
      <div className="randomBox">{text}</div>
      <button className="genButton" onClick={setRandomText}>
        Generate New Prompt
      </button>
    </>
  );
}

//                       CODE COMMENT HELL

// function indexGetter(array) {
//   let randomArray = Math.floor(Math.random() * array.length);
//   let randomSub = Math.floor(Math.random() * array[randomArray].length);
//   return (
//     <div>
//       {randomArray.map((name) => (
//         <></>
//       ))}
//     </div>
//   );
// }

// {someActions.map((actions) => (
//         <>
//           <p>
//             {actions.action + " with " + actions.subactions[randomSubActions]}
//           </p>
//         </>
//       ))}
