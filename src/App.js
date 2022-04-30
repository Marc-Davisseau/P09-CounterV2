import './App.css';
import Add from './components/Add'; 
 import { useState } from 'react';


function App() {
  const [tab, setTab] = useState([]);
//  const [tab, setTab] = useState[0]
//  const newtab=[...tab]
//  setTab(newtab)
  return (
    <div className="App">

<button 

style = {{display:tab.length>=2?"none":""}}

  // display={tab.length >= 2 && ""}
  onClick={()=>{
    const newTab = [...tab];
    newTab.push(<Add/>);  
    setTab(newTab);
}}>click to add</button> 

<div className='bloc'>
{tab.map((item, index) => { return (item ) })}
<Add/>
</div>


    </div>
  );
}

export default App;



// {tab.map((test,index) =>{
//   return test
// })}