import React, {useCallback, useState,useMemo} from 'react';
import DemoOutput from './components/UI/Button/DemoOutput';
import Button from './components/UI/Button/Button'
import './App.css';

function App() {
  console.log("****************")
  console.log("inside app.js")
  const[listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New title")
  },[])

  const list = useMemo(() => {return [125,3,1,10,9]} , [])
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput title={listTitle} items={list}/>
      <Button onClick={changeTitleHandler}> change title</Button>
    </div>
  );
}

export default App;
