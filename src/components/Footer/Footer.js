import classNames from "classnames";
import Image from "next/image";
import React from "react";
import dayjs from "dayjs";

const Footer = ({ show = true }) => {
  const currentYear = dayjs().year();

  return (
    <>
      {show && (
        <div className={classNames("responsiveWidth")}>
          <div className={classNames("footerWrapper")}>
            <div className={classNames("ofiBox")}>
              <div className={classNames("imgBox", "overflow-hidden")}>
                <Image
                  src={"/img/industrial_gear.svg"}
                  alt={"Industrial Supply Network logo"}
                  width={200}
                  height={200}
                />
              </div>

              <div className={classNames("infBox")}>
                <p className={classNames("text-xs")}>
                  <span>Industrial Supply Network</span> main operations center is located in{" "}
                  <span>Miami, United States</span> with regional and branch locations based in{" "}
                  <span>Panama City, Panama</span> and <span>Ciudad Guayana, Venezuela</span>.
                </p>
              </div>
            </div>

            <div className="addBox">
              <p className={classNames("titTex")}>Office address</p>
              <p className={classNames("text-xs")}>2627 NE 203RD ST STE 209</p>
              <p className={classNames("text-xs")}>Aventura, FL 33180</p>
            </div>

            <div className="redSocBox">
              {/* <div
                className={classNames("botWra", "flex", "w-1/2", "items-center", "justify-center")}
              >
                {redSocItems.map((red, key) => {
                  return (
                    <div key={key} className={classNames("botBox")}>
                      <button className={classNames("flex", "justify-center", "items-center")}>
                        {red.icon}
                      </button>
                    </div>
                  );
                })}
              </div> */}

              <p>
                <span>{`${currentYear} ©`}</span> All rights reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
