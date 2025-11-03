"use client";
import GeneralLayout from "@/components/GeneralLayout/GeneralLayout";
import MenuProducts from "@/components/ProductsMenu/menu_product";
import classNames from "classnames";
import React, { useState } from "react";
import { productos } from "@/utils/products";

const Products = () => {
  const [productType, setProductType] = useState("construction");

  return (
    <GeneralLayout showFooter={false}>
      <div className={classNames("productsWrapper")}>
        <div className={classNames("layGenPro")}>
          <div
            className={classNames(
              "overflow-y-scroll",
              "md:w-3/12",
              "w-full",
              "h-1/2",
              "scrollbar-track-transparent",
              "scrollbar-thin",
              "scrollbar-thumb-primary",
              "bg-thirdy"
            )}
          >
            <MenuProducts productType={productType} setProductType={setProductType} />
          </div>

          <div
            className={classNames(
              "conBox",
              "gap-10",
              "md:h-full",
              "md:w-9/12",
              "w-full",
              "overflow-y-scroll",
              "h-40"
            )}
          >
            <div className={classNames("titBox", "h-auto", "max-w-[600px]")}>
              <p className={classNames("titTex")}>{productos[productType].slug}</p>
              <p className={classNames("text-primary", "text-sm")}>
                {productos[productType].description}
              </p>
            </div>
            <div className={classNames("griProWra")}>
              {productos[productType].data.map((item, key) => {
                return (
                  <div
                    key={key}
                    className={classNames(
                      "flex",
                      "flex-col",
                      "justify-center",
                      "items-start",
                      "w-full",
                      "h-auto",
                      "rounded-2xl",
                      "border",
                      "border-primary",
                      "md:overflow-hidden",
                      "gap-3",
                      "mb-3"
                    )}
                  >
                    <div
                      style={{ backgroundImage: `url(${item.imgSrc})`, height: 200 }}
                      className={classNames(
                        "w-full",
                        "rounded-2xl",
                        "bg-cover",
                        "bg-center",
                        "flex"
                      )}
                    />
                    <div
                      className={classNames("flex", "flex-col", "w-full", "p-3", "gap-3", "h-full")}
                    >
                      <p
                        style={{ fontFamily: "popBlack" }}
                        className={classNames("text-xl", "text-primary", "leading-5")}
                      >
                        {item.name}
                      </p>
                      <p className={classNames("text-md", "text-primary")}>{item.description}</p>
                      {item.applications && (
                        <div className={classNames("w-full", "flex", "flex-col", "p-3")}>
                          <p style={{ fontFamily: "popBlack" }} className={classNames("")}>
                            Applications
                          </p>
                          <ul className={classNames("list-disc")}>
                            {item.applications.map((_app, key_app) => {
                              return <li key={key_app}>{_app}</li>;
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Products;
