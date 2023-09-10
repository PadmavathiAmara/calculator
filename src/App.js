import { useEffect, useState } from 'react';
import './App.css';
import Keypad from './components/Keypad';
import Display from './components/Display';

function App() {
  const [num, setNum] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [op, setOp] = useState([]);
  const [result, setResult] = useState(0);
  let [numCopy, setNumCopy] = useState("");

  const settingNumCopy = (valueOfKey) =>{
    let concatingNumCopy = numCopy.concat(valueOfKey);
    setNumCopy(concatingNumCopy);
  }
  const onKeyClick = (valueOfKey) => {
    if(valueOfKey == "AC"){
     setNumCopy("");
     setResult(0);
     setNum("");
     setOp([]);
     setNumbers([]);

    }
    else{
      if(typeof(valueOfKey)=="number"|| valueOfKey == "." || valueOfKey == "="  ){
        if(valueOfKey == "="){
          
        }
        let concatingNum  = num.concat(valueOfKey);
        setNum(concatingNum);
      }
      else{
          setNumbers([...numbers,Number(num)]);
          setOp([...op,valueOfKey]);
          setNum("");
        }
        
      }
    }
  
  useEffect(() => {
  console.log(num);
  console.log(numbers);
  console.log(op);
  console.log(numCopy);
  // console.log(result);
  }, [num,numbers,op,numCopy])
// 0 1 2 3 4 5 6         var arr = [2,2,3,2,7,3];
// 8 5 3 4 2 6 3         var indices = [];
//  0 1 2 3 4 5            arr.filter(function(yourArray, index) {
//  + + + / + /            if(yourArray == 2){
//                       indices.push(index)
//                       }});
//                       console.log(indices)

const onBackClick = () => {
  numCopy = numCopy.slice(0,-1);
  setNumCopy(numCopy);
  console.log(numCopy);
}

  const onEqualClick = () => {
    const newNumbers = [...numbers,...[Number(num)]]
    
    // let total1 = 0;
    let divIndexes = [];
    let mulIndexes = [];
    let subIndexes = [];
    let addIndexes = [];
    if(op.includes("/")){
      op.filter((val,index)=> {
        if(val == "/"){
          divIndexes.push(index);
        }
      });
      let total1 = [];
      divIndexes.map((divIndex)=> {
        console.log("in divindexes map")
        console.log(`divIndex ${divIndex}`);
        let totalVal = newNumbers[divIndex]/newNumbers[divIndex+1];
        return total1.push(totalVal.toFixed(2));
        }
      );
    let settingTotal1 = divIndexes.map((i)=>{
      console.log(i);
     return newNumbers.splice(i,1,total1);
    });
    console.log(`settingTotal1 ${settingTotal1}`)
    setNumbers(settingTotal1);
    
    }
    if(op.includes("*")){
      op.filter((val,index)=> {
        if(val == "*"){
          mulIndexes.push(index);
        }
      });
      let total2 = [];
      mulIndexes.map((mulIndex)=> {
        console.log("in mulindexes map")
        console.log(`mulIndex ${mulIndex}`);
        let totalVal = newNumbers[mulIndex]*newNumbers[mulIndex+1];
        return total2.push(totalVal);
      });
    console.log(`total2 ${total2}`);
    }
    if(op.includes("+")){
      op.filter((val,index)=> {
        if(val == "+"){
          addIndexes.push(index);
        }
      });
      let total3 = [];
      addIndexes.map((addIndex)=> {
        console.log("in addindexes map")
        console.log(`addIndex ${addIndex}`);
        let totalVal = (+newNumbers[addIndex])+(+newNumbers[addIndex+1]);
        return total3.push(totalVal);
      });
    console.log(`total3 ${total3}`);
    }
    if(op.includes("-")){
      op.filter((val,index)=> {
        if(val == "-"){
          subIndexes.push(index);
        }
      });
      let total4 = [];
      subIndexes.map((subIndex)=> {
        console.log("in subindexes map")
        console.log(`subIndex ${subIndex}`);
        let totalVal = newNumbers[subIndex]-newNumbers[subIndex+1];
        return total4.push(totalVal);
      });
    console.log(`total4 ${total4}`);
    }
    
  }
  
  return (
    <div className='main-container'>
          <Display numCopy={numCopy} result={result}/>
          <Keypad onKeyClick={onKeyClick} onEqualClick={onEqualClick} settingNumCopy={settingNumCopy} onBackClick={onBackClick}/>
    </div>
  );
}

export default App;