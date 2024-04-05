import axios from "axios";
import { useState, useEffect } from "react";

export default function Requests()
{
    const [list , setList] = useState([]);
    
    async function dofetchdata()
    {
        const url = "http://localhost:2004/product/fetchdata";
        const email = localStorage.getItem("email");
        const obj = {"email" : email};
        const servermesg = await axios.post(url , obj);
        // alert(JSON.stringify(servermesg));
        if(servermesg.data.status === true){
            alert(JSON.stringify(servermesg.data.res));
            setList(servermesg.data.res);
        }
        else{
            alert("error");
        }
    }

    return (
        <>
        <div className="flex justify-center mt-24">
            <button class="mt-5 mb-10 ml-20 flex w-28 h-10 justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={dofetchdata} > Fetch data </button>
        </div>
         <div>
      {list.map((dataItem, index) => (
        <div key={index}>
          <p>ID: {dataItem._id.toString()}</p>
          <p>Name: {dataItem.pName}</p>
          <p>Age: {dataItem.pAge}</p>
          <p>Gender: {dataItem.pGender}</p>
          <p>Blood Group: {dataItem.bloodGroup}</p>
          <p>Email: {dataItem.pEmail}</p>
          <p>Phone: {dataItem.pPhone}</p>
          <p>Address: {dataItem.pAddress}</p>
          <br></br>
        </div>
      ))}
    </div>
        </>
    );
}