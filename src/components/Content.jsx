import React,{useState} from "react";
import TableItem from "./TableItems";
import NewStudent from "./NewStudent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Content(){

    const [arr,updateArr]=useState([]);
    // roll,studname,checkintime,checkouttime
    const [prarr,updateabsnt]=useState([]);
    // newrol,newname


   function adder(info){
    if(info.roll==="" || info.studname===""){
      toast.warn("Please enter all the fields");
    }else{
        const dup=arr.find((items)=>{
            return items.roll===info.roll;
        })
        if(dup){
            toast.error("Roll.No already exists");
       }else{
       updateArr((prevval)=>{
           return [...prevval,info];
       })
         toast.success("Student added");
    }
    } 
    }



    function Addfunction(newrol,newname){

        const date=new Date();
        const chker=prarr.find((item)=>{
            return item.newrol===newrol;
        })
        if(chker){
            toast.warn("You are already in !");
        }else{

            const newState=arr.map(item=>{
                if(item.roll===newrol){
                    return {...item,checkintime:date.toLocaleTimeString("en-GB"),checkouttime:"-"};
                }
                return item;
            })

            updateArr(newState);

            updateabsnt((prevval)=>{
                return [...prevval,{newrol,newname}]
            })

        }
    }

    function delfunction(rollnum){
        const date=new Date();
        const chker=prarr.find((item)=>{
            return item.newrol===rollnum;
        })

        if(chker){
            const newState=arr.map(item=>{
                if(item.roll===rollnum){
                    return {...item,checkouttime:date.toLocaleTimeString("en-GB")};
                }
                return item;
            })
            updateArr(newState);
         updateabsnt((prevval)=>{
            return prevval.filter((singleinfo)=>{
                return rollnum!=singleinfo.newrol;
            })
         })}else{
               toast.warn("please checkin first !"); 
         }
    }




    return <div className="infostab">
    <table>
        <tbody>
       { arr.map((singleinfo)=>{
        return (
            <TableItem
            key={singleinfo.roll}
            rollnum={singleinfo.roll}
            studentname={singleinfo.studname}
            functin={Addfunction}
            checkintim={singleinfo.checkintime}
            checkouttim={singleinfo.checkouttime}
            functout={delfunction}
            />
        )
       })
       }
        </tbody>
    </table>
    <ToastContainer
    position="top-center"
    />
    {(prarr.length)?<p>Total number of students present in class : {prarr.length}</p>: <p>No student is present in class</p>}
    <NewStudent
        onAdd={adder}
        />
    </div>
}

export default Content;









