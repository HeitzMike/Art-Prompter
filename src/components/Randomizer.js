// import LISTY from "../data/actionList";
import actionsList, {
  someActions,
  subjects,
  styles,
  stuffList,
  adjectives,
  scenarios,
} from "../data/actionsList";

import a from "indefinite";

import { useState, useEffect } from "react";

export default function Randomizer() {
  const [text, setText] = useState("Click Generate For A Prompt!");
  const [actionsList, setActionsList] = useState(someActions);

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

  const getRandomElement = (list) => {
    let randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  };

  const setRandomText = () => {
    const filteredActions = actionsList.filter((action) => {
      return (action.selected = true);
    });
    const randomAction = getRandomElement(filteredActions);
    const randomSubAction = getRandomElement(randomAction.subactions);
    const randomSubject = getRandomElement(subjects);
    const randomSubSubject = getRandomElement(randomSubject.list);
    const randomAdjective = getRandomElement(adjectives);
    const randomScenario = getRandomElement(scenarios);
    const randomStyle = getRandomElement(styles);

    let text = "";
    text += randomAction.action + " ";

    // TODO: STUFF

    text += " a " + randomAdjective + " ";
    text += randomStyle + " ";

    if (randomSubject.list === false) {
      text += randomSubject.subject + " ";
    } else {
      text += randomSubSubject + " ";
    }

    text += randomScenario + " ";

    if (randomAction.preposition) {
      text += " with ";
    }
    if (randomAction.article) {
      text += " as " + a(randomSubAction);
    } else {
      text += randomSubAction;
    }

    console.log(text);

    setText(text);
  };

  return (
    <>
      <div className="randomBox">{text}</div>
      <button className="genButton" onClick={setRandomText}>
        Generate
      </button>
    </>
  );
}

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
