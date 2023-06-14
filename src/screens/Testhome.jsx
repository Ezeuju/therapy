import React from "react";
import { Link} from "react-router-dom";
// import logos from "../assets/logos.png";
import counselling from "../assets/counselling.jpg";
import faceOne from "../assets/faceOne.jpeg";
import faceTwo from "../assets/faceTwo.jpeg";
import faceThree from "../assets/faceThree.jpeg";
import faceFour from "../assets/faceFour.jpeg";
import faceFive from "../assets/faceFive.jpeg";
import faceSix from "../assets/faceSix.jpeg";
import howOne from "../assets/howOne.png";
import howTwo from "../assets/howTwo.png";
import howThree from "../assets/howThree.png";
import { FaArrowDown } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { MdWhatsapp } from "react-icons/md";
// import simcha from '../assets/simcha.png';
// import sim from '../assets/sim.png';
// import { Collapse } from 'flowbite';
import tranquilmindss from "../assets/tranquilmindss.jpg";
// import { useNavigate } from 'react-router-dom';
// import { Navbar } from `flowbite-react`;

// import Navbar from 'flowbite-react'
// import { Flowbite } from 'flowbite-react';
// import counselling from '../assets/counselling.jpg'
import Carousal from "../components/Carousal";
// import Footer from '../components/Footer'
// import { Link } from 'react-router-dom'

const testHome = () => {
  return (
    <div>
      <nav class="bg-white   w-full  top-0 left-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
          <Link to="/" class="flex items-center">
            <img src={tranquilmindss} class="h-10 mr-3" alt="Tranquil Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tranquil
            </span>
          </Link>

          <div class="flex md:order-2 py-4">
            <Link to="/GetStarted">
              <button
                type="button"
                class="text-white  bg-[#694b94] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </button>
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hamburger w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <Link
                to="/Faq"
                className="block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 rounded md:bg-transparent md:text-[#694b94] md:p-0"
                aria-current="page"
              >
                About Us
              </Link>

              <Link
                to="/Reviews"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#694b94] md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Reviews
              </Link>

              <Link
                to="/ContactUs"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#694b94] md:p-0   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Us
              </Link>

              <Link
                to="/LogIn"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#694b94] md:p-0   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                LogIn
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className=" w-full h-full bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply"
        style={{ backgroundImage: `url(${counselling})` }}
      >
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white mt-10 md:text-3xl lg:text-5xl">
            Over 13,000 licensed therapists can help you thrive.
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Professional therapy by text, phone, and video calls.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              to="/GetStarted"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#694b94] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              to="/Faq"
              class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:[#694b94] focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-screen bg-[#694b94]  view">
        <h2 className="text-[#fff] text-center pt-10 font-sans text-3xl font-bold ">
          Professional and credentialled therapists who you can trust
        </h2>
        <div className="w-3/5  flex  justify-center m-auto pt-12 ">
          <img
            src={faceOne}
            alt=""
            className="w-1/5 rounded-full border-solid border-4 border-sky-500 show"
          />
          <img
            src={faceTwo}
            alt=""
            className="w-1/5  rounded-full ml-[-1rem] border-4 border-sky-500 show"
          />
          <img
            src={faceThree}
            alt=""
            className="w-1/5   rounded-full ml-[-1rem] border-4 border-sky-500 show"
          />
          <img
            src={faceFour}
            alt=""
            className="w-1/5  rounded-full ml-[-1rem] border-4 border-sky-500 none"
          />
          <img
            src={faceFive}
            alt=""
            className="w-1/5  rounded-full ml-[-1rem] border-4 border-sky-500 none"
          />
          <img
            src={faceSix}
            alt=""
            className="w-1/5  rounded-full ml-[-1rem] border-4 border-sky-500 none"
          />
        </div>
        <p className="text-[#fff] w-3/5 flex justify-center pt-10 m-auto text-xl leading-8 font-sans pb-2">
          Tap into a network of credentialled, accredited, and experienced
          therapists who can help you and your child with a range of issues
          including depression, anxiety, relationships, bullying, trauma, and
          more. With our therapists, you get the same professionalism and
          quality you would expect from an in-office therapist, but with the
          ability to communicate when and how you want.
        </p>
        <Link to="/GetStarted">
          <button class="font-sans text-xl rounded-md bg-[#fff] mt-2 py-2 text-[#2d4b75]  hover:bg-sky-500 hover:text-slate-100 flex justify-center w-1/4 m-auto text-center  buttonget ">
            Get matched to a therapist
          </button>
        </Link>
      </div>
      <div className="w-full h-[1650px] bg-slate-100 ">
        <h1 className="text-center font-sans text-4xl txt text-[#694b94] pt-10">
          How it works
        </h1>
        <div className="flex w-4/5  m-auto justify-between mt-16 items-center mobile-flex sm:w-full">
          <img src={howOne} alt="" className="w-3/5 draw" />
          <div className="headtext">
            <h2 className="font-sans text-3xl w-3/4 text-[#694b94] straight">
              Get matched to the best therapist for you.
            </h2>
            <p className="font-sans text-xl w-3/4 text-[#694b94]">
              Answer a few questions to find a credentialled
              <br /> therapist who fits your needs and preferences.
              <br /> Tap into the largest network of credentialled
              <br /> professionals.
            </p>
          </div>
        </div>
        <div className="flex w-4/5 justify-center m-auto pt-20 pb-20 arrow">
          <FaArrowDown className="text-6xl text-[#694b94] arr" />
        </div>
        <div className="flex w-4/5 m-auto justify-between mt-16 items-center mobile-flex">
          <img src={howTwo} alt="" className="w-3/5 draw" />
          <div className=" headtext">
            <h2 className="font-sans text-3xl txt text-[#694b94] straight">
              Communicate your way
            </h2>
            <p className="font-sans text-xl txt text-[#694b94]">
              Talk to your therapist however you feel comfortable text, chat,
              phone, or video.
            </p>
          </div>
        </div>
        <div className="flex w-4/5 justify-center m-auto pt-20 pb-20 arrow">
          <FaArrowDown className="text-6xl text-[#694b94] arr" />
        </div>
        <div className="flex w-4/5 m-auto justify-between mt-16 items-center mobile-flex">
          <img src={howThree} alt="" className="w-3/5 draw" />
          <div className=" headtext">
            <h2 className="font-sans text-3xl txt text-[#694b94] straight">
              Therapy when you need it
            </h2>
            <p className="font-sans text-xl txt text-[#694b94]">
              You can message your therapist at anytime, from anywhere. You also
              get to schedule live sessions when it's convenient for you, and
              can connect from any mobile device or computer.
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen caroh relative">
        <Carousal />
      </div>

      <footer class="bg-[#694b94]">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                {/* <img src={tranquilmindss} class="h-8 mr-3" alt="Logo" /> */}
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Tranquil
                </span>
              </Link>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white ">Resources</h2> */}
                <ul class="text-gray-600 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <Link to="/Faq" class="hover:text-[#93c5fd] text-[#fff]">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Reviews"
                      class="hover:hover:text-[#93c5fd] text-[#fff]"
                    >
                      Reviews
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2> */}
                <ul class="text-gray-600 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <Link
                      to="/ContactUs"
                      class="hover:hover:text-[#93c5fd] text-[#fff]"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/GetStarted"
                      class="hover:hover:text-[#93c5fd] text-[#fff]"
                    >
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                {/* <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2> */}
                <ul class="text-gray-600 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <Link
                      to="/dashboard"
                      class="hover:hover:text-[#93c5fd] text-[#fff]"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard"
                      class="hover:text-[#93c5fd] text-[#fff]"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a
                href="https://flowbite.com/"
                class="hover:underline hover:text-[#cbd5e1]"
              >
                Tranquil™
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 ">
              <a
                href="/dashboard"
                class="text-[#fff] hover:text-gray-900 dark:hover:text-white"
              >
                {/* <svg class="w-11 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg> */}
                <MdFacebook className="text-2xl" />
                <span class="sr-only">Facebook page</span>
              </a>
              <Link
                to="/dashboard"
                class="text-[#fff] hover:text-gray-900 dark:hover:text-white"
              >
                {/* <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg> */}
                <MdWhatsapp className="text-2xl" />
                <span class="sr-only">Instagram page</span>
              </Link>
              <Link
                to="/dashboard"
                class="text-[#fff] hover:text-gray-900 dark:hover:text-white"
              >
                {/* <svg class=" text-2xl w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg> */}
                <FaTwitter className="text-2xl" />
                <span class="sr-only">Twitter page</span>
              </Link>
              <Link
                to="/dashboard"
                class="text-[#fff] hover:text-gray-900 dark:hover:text-white"
              >
                {/* <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg> */}
                <FaInstagram className="text-2xl" />
                <span class="sr-only">GitHub account</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default testHome;
