import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Main(props){

  return (<div>
    <h1>The bed is my stage.</h1>
    <Product num={props.num}></Product>
  </div>)
}
function Product(props){
  
  return (<div>
    <h2>얏호</h2>
    <Board num={props.num}></Board>
  </div>)
}
function Board(props){
  
  return(<div>
    <h3>sosososo</h3>
    <h4>{props.num}</h4>
  </div>)
}

function Main2(props){

  return (<div>
    <h1>The bed is my stage2.</h1>
    <Product2 onAddNum={() => {props.onAddNum()}}></Product2>
  </div>)
}
function Product2(props){
  return (<div>
    <h2>얏호2</h2>
    <Board2 onAddNum={() => {props.onAddNum()}}></Board2>
  </div>)
}
function Board2(props){

  
  return(<div>
    <h3>sosososo2</h3>
    <div>
      <span>숫자:</span>
      <button onClick={()=>{props.onAddNum()}}>증가!</button>
    </div>
  </div>)
}

function App() {
  let [num, setNum] = useState(1);
  return (
    <>
      <Main num={num}></Main>
      <Main2 onAddNum={() => { setNum(num +1)}}></Main2>
      <Main2 onAddNum={() => { setNum(num +5)}}></Main2>
    </>
  );
}

export default App;
