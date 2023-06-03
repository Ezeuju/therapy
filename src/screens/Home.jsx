import React from 'react'
import logos from '../assets/logos.png'
import faceOne from '../assets/faceOne.jpeg'
import faceTwo from '../assets/faceTwo.jpeg'
import faceThree from '../assets/faceThree.jpeg'
import faceFour from '../assets/faceFour.jpeg'
import faceFive from '../assets/faceFive.jpeg'
import faceSix from '../assets/faceSix.jpeg'
import howOne from '../assets/howOne.png'
import howTwo from '../assets/howTwo.png'
import howThree from '../assets/howThree.png'
import { FaArrowDown } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { MdWhatsapp } from "react-icons/md";
import counselling from '../assets/counselling.jpg'
import Carousal from '../components/Carousal'
// import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

// import { Carousel } from 'flowbite';
// import Carousel from '../index.css';

const Home = () => {
    
  return (
    <div>
      
     
     <nav className="flex justify-around space-x-4 w-full items-center h-20  ">
        <div className="w-1/5 logo">
            <img src={logos} alt="" className='w-1/5  h-12 object-contain'/>
        </div>
          <div className='Ulinks w-3/5 flex justify-around max-w-screen-xl flex-wrap mx-auto'>
            <Link to="/Faq" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">Home</Link>
            <Link to="Reviews" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">About Us </Link>
            <a href="/ContactUs" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">Our Services</a>
            <a href="/LogIn" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">Contact Us</a>
            <a href="/GetStarted" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75] border border-sky-500">Login</a>
            <Link to="/Testhome" class="font-bold px-5 py-3  rounded-full bg-[#2d4b75] hover:text-slate-900 hover:bg-slate-100 text-[#fff] ml-10">Get Started</Link>
          </div>
</nav>
{/* <div className="you w-full h-screen bg-no-repeat bg-cover flex items-center"
  style={{backgroundImage:`url(${counselling})`}}>
    <div className='square border-solid border-8 border-sky-500 w-4/5 m-auto h-1/2 bg-[#fff]'>
      <h1 className='text-[#fff] text-center'>Over 13,000 licensed therapists who help teens thrive</h1>
      <p className='text-[#fff] text-center'>Professional therapy by text, phone, and video</p> 
      <div className=' flex w-2/5 justify-between m-auto'>
      <button className="rounded-full bg-[#2d4b75] px-10 py-3 text-[#fff]  hover:bg-slate-100
      hover:text-slate-900 w-40 font-bold">Individual</button>
      <button className="rounded-full bg-[#2d4b75] px-10 py-3 text-[#fff]  hover:bg-slate-100 hover:text-slate-900 w-40 font-bold">Couple</button>
      </div>
      </div>
</div> */}
<div className='w-full h-screen bg-[#2d4b75] flex-col '>
<h2 className='text-[#fff] text-center pt-10 font-sans text-3xl font-bold'>
Professional and credentialled therapists who you can trust</h2>
<div className='w-3/5  flex  justify-center m-auto pt-12 '>
<img src={faceOne} alt="" className='w-1/5 rounded-full border-solid border-4 border-sky-500'/>
<img src={faceTwo} alt="" className='w-1/5  rounded-full ml-[-1rem] border-4 border-sky-500'/>
<img src={faceThree} alt="" className='w-1/5   rounded-full ml-[-1rem] border-4 border-sky-500'/>
<img src={faceFour} alt="" className='w-1/5  rounded-full ml-[-1rem] border-4 border-sky-500 '/>
<img src={faceFive} alt="" className='w-1/5  rounded-full ml-[-1rem] border-4 border-sky-500'/>
<img src={faceSix} alt="" className='w-1/5  rounded-full ml-[-1rem] border-4 border-sky-500'/>
</div>
<p className='text-[#fff] w-3/5 flex justify-center pt-10 m-auto text-2xl leading-8 font-sans text-justify pb-2'>Tap into a network of credentialled, accredited, and experienced therapists who can help you and your child with a range of issues including depression, anxiety, relationships, bullying, trauma, and more. With our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate when and how you want.</p>
<button class="font-sans text-2xl rounded-md bg-[#fff] px-2 py-2 text-[#2d4b75]  hover:bg-sky-500 hover:text-slate-100 flex justify-center w-1/4 m-auto text-center ">Get matched to a therapist</button>
</div>
<div className='w-full h-[1650px] bg-slate-100'>
  <h1 className='text-center font-sans text-4xl txt text-[#2d4b75] pt-10'>How it works</h1>
  <div className='flex w-4/5 m-auto justify-between mt-16 items-center'>
  <img src={howOne} alt="" className='w-3/5'/>
  <div className='w-2/5'>
    <h2 className='font-sans text-3xl  text-[#2d4b75] straight'>Get matched to the best therapist for you</h2>
    <p className='font-sans text-xl  text-slate-700'>Answer a few questions to find a credentialled therapist who fits your needs and preferences. Tap into the largest network of credentialled professionals.</p>
  </div>
  </div>
  <div className='flex w-4/5 justify-center m-auto pt-20 pb-20'><FaArrowDown className='text-6xl text-[#2d4b75]'/></div>
  <div className='flex w-4/5 m-auto justify-between mt-16 items-center'>
  <img src={howTwo} alt="" className='w-3/5'/>
  <div className=''>
    <h2 className='font-sans text-3xl txt text-[#2d4b75]'>Communicate your way</h2>
    <p className='font-sans text-xl txt text-slate-700'>Talk to your therapist however you feel comfortable — text, chat, phone, or video.</p>
  </div>
  </div>
  <div className='flex w-4/5 justify-center m-auto pt-20 '><FaArrowDown className='text-6xl text-[#2d4b75]'/></div>
  <div className='flex w-4/5 m-auto justify-between mt-16 items-center'>
  <img src={howThree} alt="" className='w-3/5'/>
  <div className=''>
    <h2 className='font-sans text-3xl txt text-[#2d4b75]'>Therapy when you need it</h2>
    <p className='font-sans text-xl txt text-slate-700'>You can message your therapist at anytime, from anywhere. You also get to schedule live sessions when it's convenient for you, and can connect from any mobile device or computer.</p>
  </div>
  </div>

</div>
<div className='h-screen'>
{/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      Slide 1
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      Slide 2
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      Slide 3
    </div>
  </Carousel>
  </div> */}
  
{/* <div id="default-carousel" class="relative w-full" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
<Carousal />
   

</div>



<footer class="bg-[#2d4b75]">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <img src={logos} class="h-8 mr-3" alt="Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tranquil</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white ">Resources</h2> */}
                  <ul class="text-gray-600 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:text-[#93c5fd] text-[#fff]">About Us</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:hover:text-[#93c5fd] text-[#fff]">Our Services</a>
                      </li>
                  </ul>
              </div>
              <div>
                  {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2> */}
                  <ul class="text-gray-600 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:hover:text-[#93c5fd] text-[#fff]">Contact Us</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:hover:text-[#93c5fd] text-[#fff]">Get Started</a>
                      </li>
                  </ul>
              </div>
              <div>
                  {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2> */}
                  <ul class="text-gray-600 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="/dashboard" class="hover:hover:text-[#93c5fd] text-[#fff]">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="/dashboard" class="hover:text-[#93c5fd] text-[#fff]">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline hover:text-[#cbd5e1]">Tranquil™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 ">
              <a href="/dashboard" class="text-[#fff] hover:text-gray-900 dark:hover:text-white">
                  {/* <svg class="w-11 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg> */}
                 < MdFacebook className='text-2xl'/>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="/dashboard" class="text-[#fff] hover:text-gray-900 dark:hover:text-white">
                  {/* <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg> */}
                  <MdWhatsapp className='text-2xl'/>
                  <span class="sr-only">Instagram page</span>
              </a>
              <a href="/dashboard" class="text-[#fff] hover:text-gray-900 dark:hover:text-white">
                  {/* <svg class=" text-2xl w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg> */}
                  <FaTwitter className='text-2xl'/>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="/dashboard" class="text-[#fff] hover:text-gray-900 dark:hover:text-white">
                  {/* <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg> */}
                  <FaInstagram  className='text-2xl'/>
                  <span class="sr-only">GitHub account</span>
              </a>
           
          </div>
       
      </div>
    </div>
</footer>

</div>

  );
};

export default Home




// //Responsive
// import React from 'react';
// import logos from '../assets/logos.png';
// import faceOne from '../assets/faceOne.jpeg';
// import faceTwo from '../assets/faceTwo.jpeg';
// import faceThree from '../assets/faceThree.jpeg';
// import faceFour from '../assets/faceFour.jpeg';
// import faceFive from '../assets/faceFive.jpeg';
// import faceSix from '../assets/faceSix.jpeg';
// import howOne from '../assets/howOne.png';
// import howTwo from '../assets/howTwo.png';
// import howThree from '../assets/howThree.png';
// import { FaArrowDown } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
// import { FaTwitter } from 'react-icons/fa';
// import { MdFacebook } from 'react-icons/md';
// import { MdWhatsapp } from 'react-icons/md';
// import counselling from '../assets/counselling.jpg';
// import Carousal from '../components/Carousal';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="min-h-screen">
//       <nav className="flex justify-around items-center h-20">
//         <div className="flex items-center flex-shrink-0">
//           <img src={logos} alt="" className="w-20 h-10 object-contain" />
//         </div>
//         <div className="flex items-center justify-between w-3/5 space-x-4 max-w-screen-xl mx-auto">
//           <Link
//             to="/Faq"
//             className="font-bold px-3 py-3 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]"
//           >
//             Home
//           </Link>
//           <Link
//             to="Reviews"
//             className="font-bold px-3 py-3 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]"
//           >
//             About Us
//           </Link>
//           <a
//             href="/ContactUs"
//             className="font-bold px-3 py-3 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]"
//           >
//             Our Services
//           </a>
//           <a
//             href="/LogIn"
//             className="font-bold px-3 py-3 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]"
//           >
//             Contact Us
//           </a>
//           <a
//             href="/GetStarted"
//             className="font-bold px-3 py-3 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75] border border-sky-500"
//           >
//             Login
//           </a>
//           <a
//             href="/"
//             className="font-bold px-5 py-3 rounded-full bg-[#2d4b75] hover:text-slate-900 hover:bg-slate-100 text-[#fff] ml-10"
//           >
//             Get Started
//           </a>
//         </div>
//       </nav>
//       <div
//         className="h-screen bg-no-repeat bg-cover flex items-center"
//         style={{ backgroundImage: `url(${counselling})` }}
//       >
//         <div className="flex w-2/5 justify-between m-auto">
//           <button className="rounded-full bg-[#2d4b75] px-10 py-3 text-[#fff] hover:bg-slate-100 hover:text-slate-900 w-.

