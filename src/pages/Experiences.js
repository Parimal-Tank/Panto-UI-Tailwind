import React from "react";
import M1 from "../assets/images/M1.svg";
import M2 from "../assets/images/M2.svg";
import vetorArraw from "../assets/images/VectorArraw.svg";

const Experiences = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <img className="M1 img-fluid" src={M1} alt="" />
        </div>

        <div>
          <div className="pl-[56px] pt-[80px] pr-[160px]">
            <div>
              <h5 className="text-titles-exe-mat">EXPERIENCE</h5>
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
              <h2 className="more-info-text">
                More Info
                <img className="pl-[13px]" src={vetorArraw} alt="more"></img>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 pr-[94px] pl-[80px]">
        <div className="pl-[37px]">
          <div>
            <h3 className="text-titles-exe-mat">MATERIALS</h3>
          </div>
          <div>
            <h1 className="text-sub-titles-exe-mat">
              Very serious <br /> materials for making furniture
            </h1>
          </div>
          <div>
            <h4 className="text-description">
              Because panto was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price
            </h4>
          </div>

          <div>
            <h2 className="more-info-text">
              More Info
              <img className="pl-[13px]" src={vetorArraw} alt="more"></img>
            </h2>
          </div>
        </div>

        <div>
          <img className="M2 img-fluid" src={M2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
