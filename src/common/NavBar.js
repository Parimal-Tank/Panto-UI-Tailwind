import React from "react";
import bag from "../assets/images/Bag.png";
import search from "../assets/images/Vector.svg";
import arrow from "../assets/images/VectorArraw.svg";
import furnitureImg from "../assets/images/Rectangle.png";

const NavBar = () => {
  return (
    <div>
      <section
        className="min-h-[1084px]"
        style={{ background: `url(${furnitureImg}) no-repeat center/cover` }}
      >
        <nav className=" border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#1" className="flex items-center">
              <span class="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Panto
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
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
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-dropdown"
            >
              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="text-white flex items-center justify-between w-full py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Furniture{" "}
                    <svg
                      class="w-5 h-5 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    id="dropdownNavbar"
                    class="z-10 hidden font-normal  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="bg-slate-600 py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="#1"
                          className="text-white block px-4 py-2 hover:bg-blue-600 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#1"
                          className="text-white block px-4 py-2 hover:bg-blue-600 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#1"
                          className="text-white block px-4 py-2 hover:bg-blue-600 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Earnings
                        </a>
                      </li>
                    </ul>
                    <div class="py-1">
                      <a
                        href="#1"
                        className="text-white block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#1"
                    class="text-white block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                    aria-current="page"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#1"
                    className="text-white block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#1"
                    className="text-white block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <a href="#1" class="flex items-center relative">
              <img src={bag} className="" alt="Logo" />
              <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-orange-400 rounded-full -top-0 -right-1 dark:border-gray-900">
                0
              </div>
            </a>
          </div>
        </nav>

        <div className="min-h-[500px] text-center pt-[84px] ">
          <p className="text-white font-Gilroy font-extrabold text-7xl leading-[104px] ">
            Make Your Interior More <br /> Minimalistic & Modern
          </p>
          <p className="text-white font-Gilroy font-medium text-2xl leading-[38px] ">
            Turn your room with panto into a lot more minimalist <br /> and
            modern with ease and speed
          </p>

          <form className="pt-[45px]">
            <div class="flex justify-between max-w-[344px] min-h-[56px] m-auto bg-transparent border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <input
                type="text"
                id="voice-search"
                class="bg-transparent text-white focus:outline-none placeholder:text-white w-full"
                placeholder="Search furniture"
                required
              />

              <div className="bg-orange-400 rounded-[24px]">
                <button
                  type="button"
                  class="flex items-center justify-center pt-2 pl-3"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 mr-2 -ml-1 text-white  rounded-[24px]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <div className="grid grid-cols-4 pt-[120px] pb-[120px] grid-cols-2">
        <div className="">
          <h3 className="font-Gilroy font-extrabold text-[42px] pl-[15px] leading-[49px] ">
            Why <br /> Choosing Us
          </h3>
        </div>

        <div className="pr-[28px] flex flex-col justify-center">
          <h3 className="home-title-text">Luxury facilities</h3>
          <p className="home-subtext">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
          <h2 className="more-info-text">
            More Info
            <img className="pl-[13px]" src={arrow} alt="more"></img>
          </h2>
        </div>

        <div className="pr-[28px]">
          <h3 className="home-title-text">Affordable Price</h3>
          <p className="home-subtext">
            You can get a workspace of the highst quality at an affordable price
            and still enjoy the facilities that are oly here.
          </p>
          <h2 className="more-info-text">
            More Info
            <img className="pl-[13px]" src={arrow} alt="more"></img>
          </h2>
        </div>

        <div className="pr-[28px]">
          <h3 className="home-title-text">Many Choices</h3>
          <p className="home-subtext">
            We provide many unique work space choices so that you can choose the
            workspace to your liking.
          </p>
          <h2 className="more-info-text">
            More Info
            <img className="pl-[13px]" src={arrow} alt="more"></img>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
