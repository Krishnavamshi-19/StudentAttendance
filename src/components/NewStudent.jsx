import React, {useState} from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from "@mui/material";

function NewStudent(props) {
  const [info,updateinfo]=useState({roll:"",studname:"",checkintime:"-",checkouttime:"-"});
  const [isExpanded,expandchngr]=useState(false);

//   const [arr,updateArr]=useState([]);

//   function adder(info){
//     updateArr((prevval)=>{
//         return [...prevval,info];
//     })
//     }

function changer(event){
   const {name,value}=event.target;
             updateinfo((preval)=>{
               return {
                 ...preval,
                 [name]:value
               };
             })
 }

 function submitter(event){
      props.onAdd(info);
      event.preventDefault();
      updateinfo({roll:"",studname:"",checkintime:"-",checkouttime:"-"})
      canceller();
 }


 function expander(){
    expandchngr(true);
 }

 function canceller(){
    expandchngr(false);
 }
 return (
  <>
     <div>
        <p id="newstud" onClick={expander}>New student?</p>
      {isExpanded && (<form className="newstudent" >
        < input onChange={changer} name="roll" value={info.roll} placeholder="Roll.No"/>  

        <textarea 
        onChange={changer} 
        name="studname" 
        value={info.studname} placeholder="Student's Name" rows="3" />
        
      <Zoom in={isExpanded} >
       <button
       className="btn1"
       onClick={submitter}> <AddIcon/></button>
        </Zoom>

        <Zoom in={isExpanded} >
        <button
        className="btn2"
        onClick={canceller}><CancelIcon/>
        </button>
        </Zoom>
      </form>)}
    </div>
    </>
  );
}

export default NewStudent;
