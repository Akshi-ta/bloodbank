import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login()
{
  const navigate = useNavigate();
    const [loginInfo , setLoginInfo] = useState(
        {
            email:"",
            password:""
        }
    )
    function doLogin(event)
    {
        const {name , value} = event.target;
        setLoginInfo({...loginInfo, [name]:value});
    }

    async function doLoginInfo()
    {
        const url = "http://localhost:2004/product/dologin";
        const servermesg = await axios.post(url ,loginInfo);
        if(servermesg.data.status === true)
        {
            // alert(JSON.stringify(servermesg.data));
            localStorage.setItem("email" , loginInfo.email);
            // alert("login successfull");
            alert("welcome "+localStorage.getItem("email"));
            // if(servermesg.data.type === "Grower")
            // {
            //   navigate("/DashBoard_g");
            // }
        }else{

            alert(servermesg.data.res);
        }
    }

    return (
        <>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-20">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Log in to your account
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      onChange={doLogin}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      onChange={doLogin}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div> 
                </div>
    
                <div>
                  <button
                    type="submit"
                    onClick={doLoginInfo}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* {JSON.stringify(loginInfo)}; */}
        </>
      )
}