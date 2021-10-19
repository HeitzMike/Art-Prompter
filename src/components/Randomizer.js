// import LISTY from "../data/actionList";
import {
  someActions,
  subjects,
  styles,
  stuffList,
  adjectives,
  scenarios,
} from "../data/actionsList";

import a from "indefinite";

export default function Randomizer() {
  const getRandomElement = (list) => {
    let randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  };

  const renderActionText = () => {
    const randomAction = getRandomElement(someActions);
    const randomSubAction = getRandomElement(randomAction.subactions);
    let text = "";
    text += randomAction.action + " ";
    if (randomAction.preposition) {
      text += "with ";
    }
    if (randomAction.article) {
      text += a(randomSubAction);
    } else {
      text += randomSubAction;
    }

    return text;
  };

  return (
    <>
      <div className="randomBox">{renderActionText()}</div>
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
