import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
// import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Note from './Note';

const App = () =>{

  const[addItem, setAddItem] =useState([]);

  const addNote=(note)=>{
    // alert('cl');
    setAddItem((prevData)=>{
      return[...prevData,note];
    }); 
  };
 
  const onDelete=(id)=>{
  setAddItem((oldData)=>
    oldData.filter((currdata,indx)=>{
      return indx!==id;
    })
  );
  };

    return(
      <>
      <Header/>
      <CreateNote passNote={addNote} />
      {/* <Note/> */}

      {addItem.map((val,index) => {
        return (<Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
        />
        );
      })};


      <Footer/>

    </>
  );
};

export default App;