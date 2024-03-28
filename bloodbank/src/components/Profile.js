import React, { useState } from "react";
import axios from "axios";
export default function Profile() {

    const [imgg, setImg] = useState("");
    const [obj, setObj] = useState({
        email: "",
        fn: "",
        ln: "",
        address: "",
        city: "",
        state: "",
        aadharcardnumber:"",
        hdn: "",
        pic: null
    })


    function doupdate(event) {
        var { name, value } = event.target;
        setObj({ ...obj, [name]: value });
    }

    function doupdatepic(event) {
        setObj({ ...obj, ["pic"]: event.target.files[0] });
        setImg(URL.createObjectURL(event.target.files[0]))
    }

    async function doFind() {
        const url = "http://localhost:2004/product/one";
        const servermesg = await axios.post(url, obj);
        var ans = servermesg.data.res[0];
        if (servermesg.data.status === true) {
            alert(JSON.stringify(ans));
            setObj(ans);
            alert(servermesg.data.res[0].picpath);
            setImg(`http://localhost:2004/uploads/${servermesg.data.res[0].picpath}`);
            obj.hdn = servermesg.data.res[0].picpath;
            alert("found");
        }
        else {
            alert("not found");
        }
    }

    async function doupdateinfo() {
        const url = "http://localhost:2004/product/update";
        alert(JSON.stringify(obj));
        var formdata = new FormData();
        for (var prop in obj) {
            formdata.append(prop, obj[prop]);//key value pair
        }
        const servermesg = await axios.post(url, formdata, { headers: { 'Content-Type': 'multipart/form-data' } });

        if (servermesg.data.status === true) {
            alert("data updated successully");
        }
        else {
            alert("error");
        }
    }

    async function dosave() {
        const url = "http://localhost:2004/product/save-info";

        var formdata = new FormData();
        for (var prop in obj) {
            formdata.append(prop, obj[prop]);//key value pair
        }
        alert(JSON.stringify(formdata));
        const servermesg = await axios.post(url, formdata, { headers: { 'Content-Type': 'multipart/form-data' } });
  

        if (servermesg.data.status === true) {
            alert("done");
        }
        else {
            alert(JSON.stringify(servermesg.data.msg) + " " + JSON.stringify(servermesg.data.err))
        }
    }

    return (
        <div>
            <div class="w-full mt-20">
                <input type="hidden" id="hdn" name="hdn"></input>
                <div className="grid grid-cols-2">
                    <div class="mt-10">
                        <p class=" my-2 ml-10">
                            Email
                        </p>
                        <input type="text" name="email" onChange={doupdate} class="ml-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    </div>
                    <button className="mt-20 ml-20 flex w-28 h-10 justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                    onClick={doFind}>Search</button>
                </div>
                <div class="grid md:grid-cols-2 grid-cols-1">
                    <div class="mt-10">
                        <p class="mx-10  my-2">
                            First Name
                        </p>
                        <input type="text" name="fn" value={obj.fn} onChange={doupdate} class="ml-10 block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    </div>
                    <div class="mt-10">
                        <p class="mx-10  my-2">
                            Last Name
                        </p>
                        <input type="text" name="ln" value={obj.ln} onChange={doupdate} class="ml-10 block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    </div>
                </div>
                <div class="grid  grid-cols-1">
                    <div class="mt-10">
                        <p class="mx-10  my-2">
                            Address
                        </p>
                        <input type="text" name="address" value={obj.address} onChange={doupdate} class="ml-10 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    </div>

                </div>
                <div class="grid md:grid-cols-2 grid-cols-1">
                    <div class="mt-10">
                        <p class="mx-10  my-2">
                            City
                        </p>
                        <input type="tel" name="city" value={obj.city} onChange={doupdate} class="ml-10 block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    </div>
                    <div class="mt-10">
                        <p class="mx-10  my-2">
                            State
                        </p>
                        <input type="text" name="state" value={obj.state} onChange={doupdate} class="ml-10 block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    </div>
                </div>
                <div className="grid grid-cols-1  md:grid-cols-2">
                    <div className="mt-10">
                        <p class="mx-10  my-2">
                            Aadhar Card Number
                        </p>
                        <input type="text" name="aadharcardnumber" value={obj.aadharcardnumber} onChange={doupdate} class="ml-10 block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    </div>
                    <div className="mt-10">
                        <p class="mx-10  my-2">
                            Aadhar Card Pic Upload
                        </p>
                        <div className="flex">
                            <input type="file" name="pic" onChange={doupdatepic} ></input>
                            <img src={imgg} id="prev" alt={obj.picpath} className="w-24 h-24"></img>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button class="mt-5 mb-10 ml-20 flex w-28 h-10 justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={dosave}> Submit</button>
                    <button className="mt-5 ml-20 flex w-28 h-10 justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={doupdateinfo}>Update</button>
                </div>
            </div>
            <div>{JSON.stringify(obj)}</div>
        </div>
    )
}