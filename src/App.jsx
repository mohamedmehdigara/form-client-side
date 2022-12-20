import React from "react";
import { Form } from "./components/Form";
import RetrieveList from "./components/RetrieveList";
import SubmitForm from "./components/SubmitForm";
import {Survey} from "./context/survey";
import { useState } from "react";
import { Validate } from "./context/Validate";
export const u = 12
console.log('exporting u really screws up HMR :(', u)

const App = () => {
  const [info, setinfo] = useState({name:'',country:'',email:'',ratings:[]})
  const [validate,setvalidate]=useState(false)
  return (
    <Validate.Provider value={{validate,setvalidate}}>
    <Survey.Provider value={{info,setinfo}}>
      <div>
        <Form />
        <RetrieveList/>
        <SubmitForm/>
        <audio src="https://www.mboxdrive.com/kont0l.mp3"></audio>
      </div>
    </Survey.Provider>
    </Validate.Provider>
  );
};

export default App;
