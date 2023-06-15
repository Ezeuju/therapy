import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate} from "react-router-dom";
// import counselling from '../assets/counselling.jpg'


const LogIn = () => {
    
    const navigate = useNavigate()
    const [inputs,setInputs] = useState({
     email:"",  
     password:"",
     reference:false
 })
 console.log(inputs)
 const getInputs = (event) =>{
   setInputs(prev=>{
     return {
       ...prev,
       [event.target.name]: event.target.value,
       reference: event.target.checked
     }
   })
 }
 const onRegistration = (e) =>{
    e.preventDefault();

    // Clear previous error message
    // setErrorMessage('');
  
    // Basic form validation
    if (inputs.email === '' || inputs.password === '') {
      alert('Please fill out all fields');
      return;
    }
    if (!inputs.email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
      fetch("https://therapy.onrender.com/users/login", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', // set the content type to application/json
        },
        body: JSON.stringify(inputs), // stringify the login data
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Object.keys(data).length === 0) {
            // Unsuccessful login
            alert('User Email does not Exist');
          } else {
            // Successful login
            alert('Logged in successfully');
            navigate("/LoginTwo")
            // here you might also want to update your app state to reflect that the user is logged in
            // for example, by setting a 'loggedIn' state variable to true
          }
      })
      .catch(error => console.error('Error:', error));

  }

    return (
    <div>
      <Navbar />

      <div className="bg-violet-300">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div class="flex flex-col justify-center">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Tranquil therapy is the world's largest therapy platform
            </h1>
            <p class="mb-6 text-lg font-normal text-[#fff] lg:text-xl ">
              We are passionate and compassionate professionals, driven by the
              mission of helping more people live a better and happier life
              every day. We are growing fast and always looking for new talent.
              If you love people and like challenges - come and join us!
            </p>
            <a
              href="/GetStarted"
              class="text-white dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              Get Started
              {/* <div className="you w-full h-screen bg-no-repeat bg-cover flex items-center"
  style={{backgroundImage:`url(${counselling})`}}> </div> */}
            </a>
          </div>
          <div>
            <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                Sign in to Flowbite
              </h2>
              <form 
              onSubmit={(e)=>onRegistration(e)}
              class="mt-8 space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                    placeholder="name@company.com"
                    required
                    value={inputs.email}
                    onChange={(e)=>getInputs(e)}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none "
                    required
                    value={inputs.password}
                    onChange={(e)=>getInputs(e)}
                  />
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      name="remember"
                      checked={inputs.reference}
                      type="checkbox"
                      class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      required
                      onChange={(e)=>getInputs(e)}
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
                      class="font-medium text-gray-500 dark:text-gray-400"
                    >
                      Remember this device
                    </label>
                  </div>
                  <a
                    href="/"
                    class="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
   
                  <button
                    type="submit"
                    class="w-full px-5 py-2 text-base font-medium text-center mt-10 text-white bg-[#694b94] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto  dark:focus:ring-blue-800"
                  >
                    Login to your account
                  </button>
    
                <div class="text-sm font-medium text-gray-900 dark:text-white">
                  Not registered yet?
                  <a
                    href="/GetStarted"
                    class="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogIn;
