import React from "react";
import tranquilmindss from "../assets/tranquilmindss.jpg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";



const GetStarted = () => {
 const navigate = useNavigate()
   const [inputs,setInputs] = React.useState({
    email:"",
    phone:null,
    password:"",
    comfirmPassword:"",
    terms:false
})
console.log(inputs)
const getInputs = (event) =>{
  setInputs(prev=>{
    return {
      ...prev,
      [event.target.name]: event.target.value,
      terms: event.target.checked
    }
  })
}

const onRegistration = (e) =>{
  // let completeData = inputs.email !== "" && inputs.password !== "" && inputs.comfirmPassword !== "" && inputs.comfirmPassword !== "" 
  // e.preventDefault()
  // if(completeData){
    // console.log(inputs)
    fetch("https://therapy.onrender.com/users/register",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(inputs)
    }
    ).then((res)=>{
      console.log(res)
      navigate("/LoginTwo")
    }).catch((err)=>{
      console.error(err)
    })

  // }

  // else{
    alert("Registration Successful")
  // }
}
  return (
    <div>
      <nav className="flex justify-between m-auto w-11/12 items-center h-20 navflex ">
        {/* <div className="w-1/5 "> */}
        <a href="/" class="flex items-center">
          <img src={tranquilmindss} class="h-10 mr-3" alt="Tranquil Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Tranquil
          </span>
        </a>

        {/* <a href="/Faq" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">Home</a>
    <a href="/team" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">About Us</a>
    <a href="/projects" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">Our Services</a>
    <a href="/reports" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">Contact Us</a>
    <a href="/reports" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75] border border-sky-500">Login</a> */}
        {/* <a href="/reports" class="font-bold px-10 py-3  rounded-full bg-[#2d4b75] hover:text-slate-900 hover:bg-slate-100 text-[#fff] ml-20">Get Started</a> */}
        <a
          href="/LogIn"
          class="font-bold logbold px-3 py-3 w-1/5 text-center rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75] border border-sky-500"
        >
          Login
        </a>
      </nav>
      <h1 className="w-full flex justify-center text-3xl boldtext">
        Wait!, Just before you create an account
      </h1>
      <p className="w-3/4 m-auto mb-6">
        Please fill out this short questionnaire to provide some background
        information about. This will help us match you with the most suitable
        therapist for you and help your therapist get to know you.
      </p>
      <Link to="https://forms.gle/WuFdSnJxnGaDJtZb9">
        {" "}
        <button
          type="button"
          class="upbutton text-white flex justify-center  bg-[#694b94]  mr-2 mb-2 w-2/5 rounded-md py-2 px-3 m-auto"
        >
          Complete the survey
        </button>{" "}
      </Link>
      <div className="mt-10 formheight">
        <form 
        onSubmit={(e)=>onRegistration (e)}
        className="w-3/5 m-auto border-solid border-2 border-[#694b94] rounded-md p-5 formsmall">
          <h1>Create your account</h1>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 outline-0 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
              value={inputs.email}
              onChange={(e)=>getInputs(e)}
            />
          </div>
          <div class="mb-6">
            <label
              for="phone-number"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone-number"
              name="phone"
              value={inputs.phone}
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 outline-0 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
              onChange={(e)=>getInputs(e)}
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-blue-500 block w-full p-2.5 outline-0 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="password"
              required
              value={inputs.password}
              onChange={(e)=>getInputs(e)}
            />
          </div>
          <div class="mb-6">
            <label
              for="repeat-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Repeat password
            </label>
            <input
              type="password"
              id="repeat-password"
              name="comfirmPassword"
              value={inputs.comfirmPassword}
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-0 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="confirm password"
              required
              onChange={(e)=>getInputs(e)}
            />
          </div>
          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                name="terms"
                checked={inputs.terms}
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
                onChange={(e)=>getInputs(e)}
              />
            </div>
            <label for="terms" class="ml-2 text-sm font-medium text-[#694b94]">
              I agree with the{" "}
              <a href="/" class="text-[#694b94] hover:underline">
                terms and conditions
              </a>
            </label>
          </div>

            <button
              type="submit"
              class="text-white w-full bg-[#694b94] hover:bg-[#d7cbe9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Register new account
            </button>

        </form>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default GetStarted;
