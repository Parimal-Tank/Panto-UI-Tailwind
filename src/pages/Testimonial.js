import React from "react";
import Slider from "react-slick";
import P1 from "../assets/images/P1.svg";
import P2 from "../assets/images/P2.png";
import P3 from "../assets/images/P3.svg";

import S1 from "../assets/images/S1.png";
import S2 from "../assets/images/S2.png";
import S3 from "../assets/images/S3.png";

const Testimonial = () => {
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
      backimage: S1,
      userimg: P1,
      userName: "Bang Upin",
      position: "Pedagang Asongan",
      testimonial: `“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“`,
    },
    {
      backimage: S2,
      userimg: P2,
      userName: "Ibuk Sukijan",
      position: "Ibu Rumah Tangga",
      testimonial: `“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“`,
    },
    {
      backimage: S3,
      userimg: P3,
      userName: "Mpok Ina",
      position: "Karyawan Swasta",
      testimonial: `“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“`,
    },
    {
      backimage: S1,
      userimg: P1,
      userName: "Bang Upin",
      position: "Pedagang Asongan",
      testimonial: `“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“`,
    },
    {
      backimage: S1,
      userimg: P1,
      userName: "Bang Upin",
      position: "Pedagang Asongan",
      testimonial: `“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“`,
    },
  ];

  return (
    <div className="pt-[240] pb-[214px]">
      <h6 className="font-Gilroy text-center text-[18px] leading-[21px] text-[#E58411] uppercase tracking-[.175em] pb-[20px]">
        TESTIMONIALS
      </h6>

      <div className="font-Gilroy font-bold text-[42px] leading-[49px] capitalize pb-[60px] text-center">
        Our Client Review
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {CardDataArray.map((data) => {
            return (
              <div>
                <div
                  style={{
                    background: `url(${data.backimage}) no-repeat center/cover`,
                  }}
                  className="flex items-end w-[370px] h-[506px] rounded-[18px] mt-0 m-auto  max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="flex flex-col items-center justify-center w-[95%] h-[206px] m-auto mb-[22px] bg-white  text-center rounded-[10px]">
                    <img
                      className="w-[50px] h-[50px] inline-block rounded-[50%] mt-[-19px] border border-[6px]
                    border-white "
                      alt="Card  cap"
                      src={data.userimg}
                    />
                    <div>
                      <p className="font-Gilroy text-[18px] leading-[21px] text-center capitalize pt-[8px] font-extrabold">
                        {data.userName}
                      </p>

                      <p className="mb-2 text-muted font-Gilroy font-medium text-[12px] leading-[14px] opacity-60 pt-[6px]">
                        {data.position}
                      </p>

                      <p className="mb-2 text-muted font-Gilroy font-medium text-[14px] leading-[16px] opacity-80 px-[14px] py-[22px]">
                        {data.testimonial}
                      </p>

                      <div className="flex items-center justify-center mt-2.5 mb-5">
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
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
