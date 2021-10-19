// import LISTY from "../data/actionList";
import {
  someActions,
  subjects,
  styles,
  stuffList,
  adjectives,
  scenarios,
} from "../data/actionsList";

export default function Randomizer() {
  let randomAction = Math.floor(Math.random() * someActions.length);
  // let randIndex = Math.floor(Math.random() * randomAction.subactions.length);
  // let randomSubActions = Math.floor(Math.random() * props[randomAction].length);
  let randomSubAction = Math.floor(
    Math.random() * someActions[randomAction].subactions.length
  );
  console.log(someActions[randomAction]);
  // console.log(someActions[randIndex]);
  return (
    <>
      <div className="randomBox">
        {someActions[randomAction].action +
          " with " +
          someActions[randomAction].subactions[randomSubAction]}
      </div>
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
