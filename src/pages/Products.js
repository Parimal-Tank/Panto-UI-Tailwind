import React, { useState } from "react";
import Slider from "react-slick";
import Img1 from "../assets/images/1.png";
import Img2 from "../assets/images/2.png";
import Img3 from "../assets/images/3.png";
import Img4 from "../assets/images/4.png";
import vetorArraw from "../assets/images/VectorArraw.svg";
import cardAdd from "../assets/images/card-plas.svg";

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const CardDataArray = [
    {
      image: Img1,
      chairName: "Sakarias Armchair",
      price: 392,
    },
    {
      image: Img2,
      chairName: "Baltsar Chair",
      price: 299,
    },
    {
      image: Img3,
      chairName: "Anjay Chair",
      price: "519",
    },
    {
      image: Img4,
      chairName: "Nyantuy Chair",
      price: "921",
    },
    {
      image: Img3,
      chairName: "Anjay Chair",
      price: "519",
    },
    {
      image: Img3,
      chairName: "Anjay Chair",
      price: "519",
    },
    {
      image: Img3,
      chairName: "Anjay Chair",
      price: "519",
    },
  ];

  const [tab, setTab] = useState("1");

  return (
    <div className=" m-auto bg-[#F7F7F7]">
      <div className="text-center">
        <p className="font-Gilroy font-extrabold text-[42px] leading-[49px] pt-[50px] pb-[32px]">
          Best Selling Products
        </p>
      </div>

      <div>
        <ul
          className="flex justify-center flex-wrap text-sm font-medium text-center text-gray-500  pb-[18px]"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className={`${
                tab === "1" ? "active-tab" : ""
              } inline-block font-medium text-[18px] leading-[33px] px-4 py-3 text-[#1E1E1E] rounded-[32px]  hover:bg-white`}
              id="chair-tab"
              data-tabs-target="#chair"
              type="button"
              role="tab"
              aria-controls="chair"
              aria-selected="false"
              onClick={() => setTab("1")}
            >
              Chair
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`${
                tab === "2" ? "active-tab" : ""
              } inline-block font-medium text-[18px] leading-[33px] px-4 py-3 text-[#1E1E1E] rounded-[32px] hover:bg-white`}
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
              onClick={() => setTab("2")}
            >
              Beds
            </button>
          </li>
          <li className="mr-2 " role="presentation">
            <button
              href="#1"
              className={`${
                tab === "3" ? "active-tab" : ""
              } inline-block font-medium text-[18px] leading-[33px] px-4 py-3 text-[#1E1E1E] rounded-[32px]  hover:bg-white`}
              onClick={() => setTab("3")}
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Sofa
            </button>
          </li>
          <li className="mr-2 " role="presentation">
            <button
              href="#1"
              className={`${
                tab === "4" ? "active-tab" : ""
              } inline-block font-medium text-[18px] leading-[33px] px-4 py-3 text-[#1E1E1E] rounded-[32px]  hover:bg-white`}
              onClick={() => setTab("4")}
              id="contacts-tab"
              data-tabs-target="#contacts"
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected="false"
            >
              Lamp
            </button>
          </li>
        </ul>

        <div id="myTabContent">
          <div id="chair" role="tabpanel" aria-labelledby="chair-tab">
            <div>
              <div className="product-slider">
                <Slider {...settings}>
                  {CardDataArray.map((data) => {
                    return (
                      <div className=" bg-white min-w-[268px]  ">
                        {/* <div className="mt-[-100px] w-[100%]"> */}
                        <img
                          className="p-8  rounded-t-lg  w-[217.9px] mt-[-100px]"
                          src={data.image}
                          alt="product"
                        />
                        {/* </div> */}

                        <div className="px-5 pb-5">
                          <div className="font-Inter font-normal text-[17px] leading-[20px] text-[#8D8D8D] pb-[6px]">
                            Chair
                          </div>
                         
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                              {data.chairName}
                            </h5>
                       
                          <div className="flex items-center mt-2.5 mb-5">
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-yellow-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <title>First star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-yellow-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <title>Second star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-yellow-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <title>Third star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-yellow-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <title>Fourth star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-yellow-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <title>Fifth star</title>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-Inter font-normal  leading-[26px] text-[21px] text-3xl  text-gray-900 ">
                              ${data.price}
                            </span>
                            <a
                              href="#1"
                              className="flex justify-center items-center rounded-[50%] h-[48px] w-[48px]  text-white bg-[#0D1B39] hover:bg- focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center"
                            >
                              <img
                                src={cardAdd}
                                className="w-[25px] h-[25px]"
                                alt="card-add"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>

          <div id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
            <div className="grid grid-cols-2">
              <div>Beds Description</div>
              <div>Beds Description</div>
            </div>
          </div>

          <div
            class="hidden p-4 rounded-lg bg-gray-50 "
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <p class="text-sm text-gray-500 ">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 ">
                Settings tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            class="hidden p-4 rounded-lg bg-gray-50 "
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <p class="text-sm text-gray-500">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 ">
                Contacts tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center item-center"
        id="contacts"
        role="tabpanel"
        aria-labelledby="contacts-tab"
      >
        <h3 className="font-Inter text-[18px] leading-[33px] text-[#E58411] pt-[70px] pr-[16px]">
          View All
        </h3>
        <img className=" pt-[79px] pb-[76px]" src={vetorArraw} alt="" />
      </div>
    </div>
  );
};

export default Products;
