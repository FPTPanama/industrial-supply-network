"use client";
import classNames from "classnames";
import React, { useMemo } from "react";
import { ConfigProvider } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { PiRoadHorizonFill } from "react-icons/pi";
import {
  MdConstruction,
  MdOutlineEnergySavingsLeaf,
  MdOutlineFilterAlt,
  MdOutlineWaterDamage,
} from "react-icons/md";
import { GiHighGrass } from "react-icons/gi";
import { FaElevator } from "react-icons/fa6";
import { BsBricks } from "react-icons/bs";
import { FaRegSnowflake, FaFireExtinguisher } from "react-icons/fa";
import { TbWavesElectricity } from "react-icons/tb";

import { Menu } from "antd";
import "../../styles/products-menu.scss";

const MenuProducts = ({ productType, setProductType }) => {
  // Obtener variables CSS sincronizadas con _font-variables.scss
  const themeColors = useMemo(() => {
    if (typeof window !== "undefined") {
      return {
        primary:
          getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() ||
          "#252525",
        orangePrimary:
          getComputedStyle(document.documentElement).getPropertyValue("--orangePrimary").trim() ||
          "#bf6e15",
        thirdy:
          getComputedStyle(document.documentElement).getPropertyValue("--thirdy").trim() ||
          "#eee8e8",
      };
    }
    // Fallback para SSR
    return {
      primary: "#252525",
      orangePrimary: "#bf6e15",
      thirdy: "#eee8e8",
    };
  }, []);

  const onClick = (e) => {
    setProductType(e.key);
  };

  const items = [
    {
      label: (
        <div
          className={classNames("flex", "items-center", "justify-start", "gap-2", "w-full")}
          onClick={(e) => {
            e.stopPropagation();
            setProductType("construction");
          }}
        >
          <div className={classNames("flex", "items-center", "justify-center", "w-4")}>
            <MdConstruction size={20} />
          </div>
          <span>Building materials</span>
        </div>
      ),
      key: "construction",
    },
    {
      label: (
        <div
          className={classNames("flex", "items-center", "justify-start", "gap-2", "w-full")}
          onClick={(e) => {
            e.stopPropagation();
            setProductType("energy");
          }}
        >
          <div className={classNames("flex", "items-center", "justify-center", "w-4")}>
            <MdOutlineEnergySavingsLeaf size={20} />
          </div>
          <span>Electrical distribution</span>
        </div>
      ),
      key: "energy",
    },
    {
      label: (
        <div
          className={classNames("flex", "items-center", "justify-start", "gap-2", "w-full")}
          onClick={(e) => {
            e.stopPropagation();
            setProductType("manto_asfaltico");
          }}
        >
          <div className={classNames("flex", "items-center", "justify-center", "w-4")}>
            <PiRoadHorizonFill size={20} />
          </div>
          <span>Bitumen membrane</span>
        </div>
      ),
      key: "manto_asfaltico",
    },
    {
      label: (
        <div
          className={classNames("flex", "items-center", "justify-start", "gap-2", "w-full")}
          onClick={(e) => {
            e.stopPropagation();
            setProductType("glass_aluminium");
          }}
        >
          <div className={classNames("flex", "items-center", "justify-center", "w-4")}>
            <SettingOutlined />
          </div>
          <span>Glass and aluminium</span>
        </div>
      ),
      key: "glass_aluminium",
    },
    {
      label: (
        <div
          className={classNames("flex", "items-center", "justify-start", "gap-2", "w-full")}
          onClick={(e) => {
            e.stopPropagation();
            setProductType("ascensores");
          }}
        >
          <div className={classNames("flex", "items-center", "justify-center", "w-4")}>
            <FaElevator size={20} />
          </div>
          <span>Lifts</span>
        </div>
      ),
      key: "ascensores",
    },
    {
      label: (
        <div
          className={classNames("flex", "items-center", "justify-start", "gap-2", "w-full")}
          onClick={(e) => {
            e.stopPropagation();
            setProductType("pasto_natural");
          }}
        >
          <div className={classNames("flex", "items-center", "justify-center", "w-4")}>
            <GiHighGrass size={20} />
          </div>
          <span>Natural turf</span>
        </div>
      ),
      key: "pasto_natural",
    },
    {
      label: (
        <div
          className={classNames("flex", "items-center", "justify-start", "gap-2", "w-full")}
          onClick={(e) => {
            e.stopPropagation();
            setProductType("piso_madera");
          }}
        >
          <div className={classNames("flex", "items-center", "justify-center", "w-4")}>
            <BsBricks size={20} />
          </div>
          <span>Wood flooring</span>
        </div>
      ),
      key: "piso_madera",
    },
    {
      label: (
        <div
          className={classNames("flex", "items-center", "justify-start", "gap-2", "w-full")}
          onClick={(e) => {
            e.stopPropagation();
            setProductType("aire_acondicionado");
          }}
        >
          <div className={classNames("flex", "items-center", "justify-center", "w-4")}>
            <FaRegSnowflake size={20} />
          </div>
          <span>Air conditioning</span>
        </div>
      ),
      key: "aire_acondicionado",
    },
    {
      label: (
        <div
          className={classNames("flex", "items-center", "justify-start", "gap-2", "w-full")}
          onClick={(e) => {
            e.stopPropagation();
            setProductType("contraincendios");
          }}
        >
          <div className={classNames("flex", "items-center", "justify-center", "w-4")}>
            <FaFireExtinguisher size={20} />
          </div>
          <span>Fire safety systems</span>
        </div>
      ),
      key: "contraincendios",
    },
    {
      label: (
        <div
          className={classNames("flex", "items-center", "justify-start", "gap-2", "w-full")}
          onClick={(e) => {
            e.stopPropagation();
            setProductType("generadores_electricos");
          }}
        >
          <div className={classNames("flex", "items-center", "justify-center", "w-4")}>
            <TbWavesElectricity size={20} />
          </div>
          <span>Power generators</span>
        </div>
      ),
      key: "generadores_electricos",
    },
    {
      label: (
        <div
          className={classNames("flex", "items-center", "justify-start", "gap-2", "w-full")}
          onClick={(e) => {
            e.stopPropagation();
            setProductType("filtracion");
          }}
        >
          <div className={classNames("flex", "items-center", "justify-center", "w-4")}>
            <MdOutlineFilterAlt size={20} />
          </div>
          <span>Water filtering</span>
        </div>
      ),
      key: "filtracion",
    },
    {
      label: (
        <div
          className={classNames("flex", "items-center", "justify-start", "gap-2", "w-full")}
          onClick={(e) => {
            e.stopPropagation();
            setProductType("aguas_residuales");
          }}
        >
          <div className={classNames("flex", "items-center", "justify-center", "w-4")}>
            <MdOutlineWaterDamage size={20} />
          </div>
          <span>Wastewater treatment</span>
        </div>
      ),
      key: "aguas_residuales",
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            colorBgContainer: themeColors.thirdy,
            fontFamily: "popBlack",
            colorText: themeColors.primary,
            itemSelectedBg: "transparent",
            itemSelectedColor: themeColors.orangePrimary,
            colorBgElevated: themeColors.thirdy,
            lineWidth: 0,
            itemHoverBg: "transparent",
            itemActiveBg: "transparent",
            itemPaddingInline: "12px",
            itemMarginInline: "0px",
            borderRadius: 4,
          },
        },
      }}
    >
      <div className={classNames("pr-5", "menu-products-wrapper")}>
        <Menu
          onClick={(e) => onClick(e)}
          selectedKeys={[productType]}
          mode="vertical"
          items={items}
          className="products-menu"
        />
      </div>
    </ConfigProvider>
  );
};

export default MenuProducts;
