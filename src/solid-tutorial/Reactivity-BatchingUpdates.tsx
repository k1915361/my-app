import { createSignal, batch } from "solid-js";

export const Reactivity_BatchingUpdates = () => {
  const [firstName, setFirstName] = createSignal("John");
  const [lastName, setLastName] = createSignal("Smith");
  const fullName = () => {
    console.log("Running FullName");
    return `${firstName()} ${lastName()}`
  } 
  const updateNames = () => {
    console.log("Button Clicked");
    batch(() => {
        setFirstName(firstName() + "n");
        setLastName(lastName() + "!");
    })  
  }
  
  return <button onClick={updateNames}>My name is {fullName()}</button>
};
