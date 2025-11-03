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
      label: "Construction",
      key: "construction",
      icon: <MdConstruction size={20} />,
    },
    {
      label: "Energy distribution",
      key: "energy",
      icon: <MdOutlineEnergySavingsLeaf size={20} />,
    },
    {
      label: "Asphalt layer",
      key: "manto_asfaltico",
      icon: <PiRoadHorizonFill size={20} />,
    },
    {
      label: "Glass & aluminum",
      key: "glass_aluminium",
      icon: <SettingOutlined />,
    },
    {
      label: "Elevator",
      key: "ascensores",
      icon: <FaElevator size={20} />,
    },
    {
      label: "Natural grass",
      key: "pasto_natural",
      icon: <GiHighGrass size={20} />,
    },
    {
      label: "Wooden floors",
      key: "piso_madera",
      icon: <BsBricks size={20} />,
    },
    {
      label: "Air Conditioners",
      key: "aire_acondicionado",
      icon: <FaRegSnowflake size={20} />,
    },
    {
      label: "Fire fighting systems",
      key: "contraincendios",
      icon: <FaFireExtinguisher size={20} />,
    },
    {
      label: "Electric generators",
      key: "generadores_electricos",
      icon: <TbWavesElectricity size={20} />,
    },
    {
      label: "Filtration systems",
      key: "filtracion",
      icon: <MdOutlineFilterAlt size={20} />,
    },
    {
      label: "Wastewater treatments",
      key: "aguas_residuales",
      icon: <MdOutlineWaterDamage size={20} />,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            colorBgContainer: "transparent",
            fontFamily: "popBlack",
            colorText: themeColors.primary,
            itemSelectedBg: themeColors.orangePrimary,
            itemSelectedColor: themeColors.thirdy,
            groupTitleColor: themeColors.primary,
            colorBgElevated: themeColors.thirdy,
            lineWidth: 0,
          },
        },
      }}
    >
      <div className={classNames("pr-5")}>
        <Menu
          onClick={(e) => onClick(e)}
          selectedKeys={[productType]}
          mode="vertical"
          items={items}
        />
      </div>
    </ConfigProvider>
  );
};

export default MenuProducts;
