import React from "react";
import M1 from "../assets/images/M1.svg";
import M2 from "../assets/images/M2.svg";
import vetorArraw from "../assets/images/VectorArraw.svg";

const Experiences = () => {
  return (
    <div className="pt-[239px] pb-[240px]">
      <div className="grid lg:grid-cols-2 pb-[239px]  xs:grid-cols-1 xs:pb-[100px]">
        <div>
          <img className="M1 img-fluid" src={M1} alt="" />
        </div>

        <div>
          <div className="pl-[56px] pt-[80px] pr-[160px]   xs:pr-8 ">
            <div>
              <h5 className="text-titles-exe-mat xs:text-center lg:text-start">
                EXPERIENCE
              </h5>
            </div>
            <div>
              <h1 className="text-sub-titles-exe-mat">
                We Provide You The <br /> Best Experience
              </h1>
            </div>
            <div>
              <h4 className="text-description">
                You don't have to worry about the result because all of these
                interiors are made by people who are professionals in their
                fields with an elegant and lucurious style and with premium
                quality materials
              </h4>
            </div>

            <div>
              <h2 className="more-info-text xs:pt-[15px]">
                More Info
                <img className="pl-[13px]" src={vetorArraw} alt="more"></img>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:grid lg:grid-cols-2 xs:grid-cols-1   ">
        <div className="pl-[37px] xs:order-2 lg:order-1">
          <div>
            <h3 className="text-titles-exe-mat xs:mt-[50px] xs:text-center lg:text-start">
              MATERIALS
            </h3>
          </div>
          <div>
            <h1 className="text-sub-titles-exe-mat ">
              Very serious <br /> materials for making furniture
            </h1>
          </div>
          <div>
            <h4 className="text-description">
              Because panto was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              <br />
              relatively low price
            </h4>
          </div>

          <div>
            <h2 className="more-info-text xs:pt-[15px]">
              More Info
              <img
                className="img-fluid pl-[13px]"
                src={vetorArraw}
                alt="more"
              ></img>
            </h2>
          </div>
        </div>

        <div className="xs:order-1 lg:order-2 xs:flex xs:justify-end">
          <img className="img-fluid" src={M2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
