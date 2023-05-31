import React from "react";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/Twitter.svg";

const Footer = () => {
  return (
    <div className="bg-[#f7f7f7] pb-[56px]">
      <div className="pl-[188px] pr-[188px] grid lg:grid-cols-4 xs:grid-cols-1 xs:pr-0 xs:pl-0 sm:grid-cols-2">
        <div className="xs:text-center">
          <h1 className="font-Gilroy font-extrabold pt-[118px] text-[28px] md:text-[52px] leading-[33px] tracking-[.01em] capitalize">
            Panto
          </h1>
          <h3 className="font-Gilroy pt-[21px] lg:text-[13px] lg:leading-[24px] opacity-80  h-[72px] sm:text-center lg:text-start lg:pl-[90px] ">
            The advantage of hiring a workspace with <br /> us is that givees
            you comfortable service <br /> and all-around facilities.
          </h3>
        </div>

        <div className="pl-[152px]  xs:pl-[120px] sm:pl-[150px] lg:pl-[100px]">
          <ul className="footer-service">
            <li className="footer-services">Service</li>
            <div className="f-service">
              <li>Email Marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
            </div>
          </ul>
        </div>

        <div className=" pl-[120px] sm:pl-[110px] lg:pl-[100px]">
          <ul className="footer-service">
            <li className="footer-services">Furniture</li>
            <div className="f-service">
              <li>Beds</li>
              <li>Chairs</li>
              <li>All</li>
            </div>
          </ul>
        </div>

        <div className=" pl-[110px] sm:pl-[140px] lg:pl-[100px]">
          <ul className="footer-service">
            <li className="footer-services">Follow Us</li>
            <div className="f-service">
              <li>
                <img className="pr-[18px]" src={facebook} alt="" />
                Facebook
              </li>
              <li>
                <img className="pr-[11px]" src={twitter} alt="" />
                Twitter
              </li>
              <li>
                <img className="pr-[11px]" src={instagram} alt="" />
                Instagram
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex justify-between font-normal text-[15px] leading-[20px] tracking-[-0.204545px] pt-[100px] px-[188px] xs:px-0 lg:px-[50px]">
        <div className="">
          <h6 className="font-Dm font-normal text-[15px] leading-[20px] tracking-[-0.204545px] opacity-50 mix-blend-normal">
            Copyright &#169; 2021
          </h6>
        </div>
        <div className="flex">
          <h6 className="font-Dm font-normal text-[15px] leading-[20px] tracking-[-0.204545px] opacity-50 mix-blend-normal">
            Terms & Conditions
          </h6>
          <h6 className="text-[15px] text-[#1e2833] opacity-50 pl-[40px]">
            Privacy Policy
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
