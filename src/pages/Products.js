import React from "react";
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
    slidesToShow: 3,
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

  return (
    <div className="container m-auto bg-[#F7F7F7]">
      <div>
        <h2>Best Selling Products</h2>
      </div>
      {/* <div className="flex justify-center">
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">
            Select your country
          </label>
          <select
            id="tabs"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Char</option>
            <option>Bed</option>
            <option>Sofa</option>
            <option>Lamp</option>
          </select>
        </div>
        <ul class="border-none shadow-none products-ul hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          <li class="w-full border-none">
            <a href="#1" class="product-select-tab-li" aria-current="page">
              Char
            </a>
          </li>
          <li class="w-full border-none">
            <a href="#1" class="product-select-tab-li">
              Bed
            </a>
          </li>
          <li class="w-full border-none">
            <a href="#1" class="product-select-tab-li">
              Sofa
            </a>
          </li>
          <li class="w-full border-none">
            <a href="#1" class="product-select-tab-li">
              Lamp
            </a>
          </li>
        </ul>
      </div> */}

      <ul class="flex justify-center flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li class="mr-2">
          <a
            href="#1"
            class="inline-block px-4 py-3 text-[#1E1E1E] rounded-[32px] active hover:bg-white"
            aria-current="page"
          >
            Char
          </a>
        </li>
        <li class="mr-2">
          <a
            href="#1"
            class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Bed
          </a>
        </li>
        <li class="mr-2 ">
          <a
            href="#1"
            class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Sofa
          </a>
        </li>
        <li class="mr-2 ">
          <a
            href="#1"
            class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Lamp
          </a>
        </li>
      </ul>

      <Slider {...settings}>
        {CardDataArray.map((data) => {
          return (
            <div>
              <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#1">
                  <img
                    class="p-8 rounded-t-lg"
                    src={data.image}
                    alt="product image"
                  />
                </a>
                <div class="px-5 pb-5">
                  <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {data.chairName}
                    </h5>
                  </a>
                  <div class="flex items-center mt-2.5 mb-5">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">
                      ${data.price}
                    </span>
                    <a
                      href="#1"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Products;
