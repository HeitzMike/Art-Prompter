// import LISTY from "../data/actionList";
import TheDefault, { someActions } from "../data/actionsList";

export default function Randomizer(props) {
  return (
    <div>
      {someActions.map((actions) => (
        <p>{actions.action}</p>
      ))}
    </div>
  );
}
