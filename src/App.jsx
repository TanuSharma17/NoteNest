import React, { useState } from 'react';
import ToDoLists from './ToDoLists';


const App =()=>{

  const [inputList,setInputList] = useState("");
  const[items,setItems] = useState([]);

  const itemEvent=(event)=>{
  setInputList(event.target.value);

  }

  const listOfItems=()=>{
    setItems((oldItems)=>{
        return[...oldItems,inputList];
    });
    setInputList("");
  };

  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!=id;
      })
    })
  };

  return(
    <>
    <div className='main_div'>
      <div className='center_div'>
         <br/>
         <h1> TANU'S TO DO List </h1>

         <input type="text" placeholder="Add Items" onChange ={itemEvent} 
          value={inputList}
         />
         <button onClick={listOfItems}> + </button>

         <ol>
          {/* <li> {inputList} </li> */}

         {items.map((itemval,index) => {
             return <ToDoLists
             key={index}
             id={index}
             text={itemval} 
              onSelect={deleteItems}
             />
          })
          }

         </ol>
      </div>
    </div>

    </>
  );
};

export default App;