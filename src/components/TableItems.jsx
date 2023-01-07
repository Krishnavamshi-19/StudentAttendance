import React from "react"

function TableItem(props){

    function Chkingin(){
        props.functin(props.rollnum,props.studname);
    }
    
    function Chkingout(){
        props.functout(props.rollnum);
    }

   return(
   <tr>
        <td>{props.rollnum}</td>
        <td>{props.studentname}</td>
        <td><button className="checkin" onClick={Chkingin} >Checkin</button></td>
        <td>{props.checkintim}</td>
        <td><button className="checkout" onClick={Chkingout} >CheckOut</button></td>
        <td>{props.checkouttim}</td>

    </tr>
    );
}

export default TableItem;
