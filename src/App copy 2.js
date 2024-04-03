import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { legacy_createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

//Redux 라이브러리
function Main() {
  return (<div>
    <h1>The bed is my stage.</h1>
    <Product ></Product>
  </div>)
}
function Product() {

  return (<div>
    <h2>얏호</h2>
    <Board></Board>
  </div>)
}
function Board() {
  let num = useSelector((state) => state.num);
  //console.log(store.getState());
  //console.log(num);
  return (<div>
    <h3>sosososo</h3>
    <h4>{num}</h4>
  </div>)
}

function Main2() {

  return (<div>
    <h1>The bed is my stage2.</h1>
    <Product2></Product2>
  </div>)
}
function Product2() {
  return (<div>
    <h2>얏호2</h2>
    <Board2></Board2>
  </div>)
}
function Board2() {
let addFunc = useDispatch();
console.log(addFunc);
  return (<div>
    <h3>sosososo2</h3>
    <div>
      <span>숫자:</span>
      <button onClick={() => {addFunc({type : "add"})}}>증가!</button>
    </div>
  </div>)
}

function reducer(state, action) {


  if(state == undefined){
    return {num : 1}
  }
  let newState = {...state};

  if(action.type == "add"){
      newState.num +=1;
  }else if(action.type == "minus"){
      newState.num -=1;
  }
  //console.log(action);

  return  newState;
  
}


const store = legacy_createStore(reducer);
//console.log(newState.num);
function App() {
 //let seung_In = ["보드카", "사케", "와인", ["소주", "맥주", "단백질음료"]];
  //let bar = _.cloneDeep(seung_In);
  //let bar =[...seung_In];
  //console.log(bar);
  // let map = {new : 1};
  // let newMap= map;
  // newMap.num = 10;
  // console.log(newMap);

   //let arr = [1, 2, 3, 4, 5];
   //let newArr =[...arr];
  // newArr[0] = 100;
  // console.log(arr[0]);
  // console.log(newArr[0]);

  return (
    <>
      <Provider store={store}>
        <Main></Main>
        <Main2></Main2>
      </Provider>
    </>
  );
}

export default App;
