import React, {useCallback, useState} from 'react';
import DemoOutput from './components/UI/Button/DemoOutput';
import Button from './components/UI/Button/Button'
import './App.css';

function App() {
  console.log("****************")
  console.log("inside app.js")
  const[allowToggle, setAllowToggle] = useState(false);
  const[paragraph, setParagraph] = useState(false);

  const allowTogglerHandler = useCallback(() => {
    setAllowToggle(true)
  },[])
  const togglerParagraph = useCallback (() => {
   if(allowToggle) {
    setParagraph((prevPara) => !prevPara)
   }
  }, [allowToggle]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={paragraph}/>
      <Button onClick={allowTogglerHandler}> Allow Toggle </Button>
      <Button onClick={togglerParagraph}> see paragraph </Button>
    </div>
  );
}

export default App;
