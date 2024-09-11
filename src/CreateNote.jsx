import React, {useState} from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// import './index.css';

const CreateNote=(props)=>{
    
    const[note,setNote] = useState({
        title:"",
        content:"",
    });

    const inputEvent=(event)=>{
        const{name,value} = event.target;

        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            };
        });
    };

    const addEvent=()=>{
       props.passNote(note);
       setNote({
        title:"",
        content:"",
       });
    };


    return(
        <>
        <div className="main_note">
            <form>
                <input type='text'
                 placeholder='Title'
                 name='title'
                 value={note.title}
                 onChange={inputEvent}
                 autoComplete='off'/>

                <textarea rows=" " column=" " 
                name='content'
                value={note.content}
                onChange={inputEvent}
                placeholder='Write a Note...'></textarea>
                <Button onClick={addEvent}>
                  <AddIcon className="plus_sign"/>
                </Button>
            </form>
        </div>

        </>
    );
};

export default CreateNote;