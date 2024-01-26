import React, {useState} from 'react';

const App = ()=>{
  const[fullName,setFullName] = useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
  });
  

  const inputEvent=(event)=>{
    //  setFullName(event.target.value);
    const value=event.target.value;
    const name=event.target.name;
    // const[value,name] = event.target;

    setFullName((preValue) => {
      if(name==="fname"){
        return{
        fname:value,
        lname:preValue.lname,
        email:preValue.email,
        phone:preValue.phone,
        };
      } else if(name==="lname"){
        return{
          fname:preValue.fname,
          lname:value,
          email:preValue.email,
          phone:preValue.phone,
        };
      } else if(name==="email"){
        return{
          fname:preValue.fname,
          lname:preValue.lname,
          email:value,
          phone:preValue.phone,
        };
        } else if(name==="phone"){
          return{
            fname:preValue.fname,
            lname:preValue.lname,
            email:preValue.email,
            phone:value,
          };
        }
    });
  };


  const onSubmit= (event)=>{
    event.preventDefault(); // submit hokr auto refresh nhi hoga
    alert('form submitted');
  };

  return(
    <>
    <div className='main_div'>
    <form onSubmit={onSubmit}>
      <div>
        <h1> Hello {fullName.fname} {fullName.lname} </h1>
        <p>{fullName.email}</p>
        <p>{fullName.phone}</p>
        <input type="text" placeholder ='Enter Your Name' name="fname"
          onChange={inputEvent} 
          value={fullName.fname}
          />
          {/* <br/> */}
          <input type="text" placeholder ='Enter Last Name' name="lname"
          onChange={inputEvent}
           value={fullName.lname}
          />   

          <input type="email" placeholder ='Enter Your Email' name="email"
          onChange={inputEvent} 
          value={fullName.email}
          // autoComplete='off'
          />

          <input type="number" placeholder ='Enter Mobile Number' name="phone"
          onChange={inputEvent} 
          value={fullName.phone}
          />

        <button type ='submit' onClick ={onSubmit}> Submit 😸 </button>
      </div>
    </form>
     </div>
    </>
   );
};

export default App;