"use client";

import Counter from "@/components/Counter/Counter";
import GeneralLayout from "@/components/GeneralLayout/GeneralLayout";
import classNames from "classnames";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link";
import "../styles/home.scss";

export default function Home() {
  const TRANSACTIONS = useRef(null);
  const COUNTRIES = useRef(null);
  const TWENTY = useRef(null);
  const THAN = useRef(null);

  const [
    parrafoRef, // Esto lo añades como ref={} en el componente que quieres que detecte.
    parrafoOnBoard, // Este es el boolean que te dice si esta o no.
  ] = useInView({
    // Detecta si el componente está en el viewport
    triggerOnce: false, // Esto hace que la detección solo ocurra una vez cuando el elemento entra en el viewport
    threshold: 0.5, // Define el umbral de visibilidad (0.5 significa que al menos la mitad del elemento debe estar en el viewport)
  });

  useEffect(() => {
    if (!parrafoOnBoard) return;

    if (!TRANSACTIONS.current || !THAN.current || !TWENTY.current || !COUNTRIES.current) return;

    const transactions = new Typed(TRANSACTIONS.current, {
      strings: ["DEALS^100 IN^100 OVER^100"],
      typeSpeed: 30,
      loop: false,
      showCursor: false,
    });

    const than = new Typed(THAN.current, {
      strings: ["THAN"],
      typeSpeed: 30,
      loop: false,
      showCursor: false,
    });

    const twentyfive = new Typed(TWENTY.current, {
      strings: ["25"],
      typeSpeed: 20,
      loop: false,
      showCursor: false,
    });

    const countries = new Typed(COUNTRIES.current, {
      strings: ["NA^100TIONS"],
      typeSpeed: 30,
      loop: false,
      showCursor: false,
    });

    return () => {
      transactions.destroy();
      than.destroy();
      twentyfive.destroy();
      countries.destroy();
    };
  }, [parrafoOnBoard]);

  const weCanDo = [
    {
      title: "Expert consultation",
      url: "",
      color: "#003989d4",
      initialHeight: 0,
      finalHeight: 300,
    },
    {
      title: "Sourcing and purchasing",
      url: "",
      color: "#0043a1d4",
      initialHeight: 0,
      finalHeight: 300,
    },
    {
      title: "Planning",
      url: "",
      color: "#004fbed4",
      initialHeight: 0,
      finalHeight: 300,
    },
    {
      title: "Implementation",
      url: "",
      color: "#0156ced4",
      initialHeight: 0,
      finalHeight: 300,
    },
  ];

  const ourProductsIndustry = [
    {
      title: "Aluminum",
      url: "aluminium.webp",
      color: "#003889",
    },
    {
      title: "Steel",
      url: "steel.webp",
      color: "#003889",
    },
    {
      title: "Ferrous",
      url: "iron_2.webp",
      color: "#003889",
    },
    {
      title: "Caustic Soda",
      url: "caustic_soda.webp",
      color: "#003889",
    },
    {
      title: "Aluminum Fluoride",
      url: "aluminum_fluoride.webp",
      color: "#003889",
    },
  ];

  const ourProductsConstruction = [
    {
      title: "Power distribution",
      url: "energy_distribution.webp",
      color: "#003889",
    },
    {
      title: "Asphalt coating",
      url: "asphalt_layer.webp",
      color: "#003889",
    },
    {
      title: "Glass & aluminium",
      url: "glass_aluminum.webp",
      color: "#003889",
    },
    {
      title: "Elevator",
      url: "elevators.webp",
      color: "#003889",
    },
    {
      title: "Organic turf",
      url: "natural_grass.webp",
      color: "#003889",
    },
    {
      title: "Timber flooring",
      url: "wooden_floors.webp",
      color: "#003889",
    },
    {
      title: "Climate control",
      url: "air_conditioners.webp",
      color: "#003889",
    },
    {
      title: "Fire protection systems",
      url: "fire_fighting.webp",
      color: "#003889",
    },
    {
      title: "Power generators",
      url: "electric_generators.webp",
      color: "#003889",
    },
    {
      title: "Water filtration",
      url: "filtration_systems.webp",
      color: "#003889",
    },
    {
      title: "Water treatment systems",
      url: "wastewater_treatments.webp",
      color: "#003889",
    },
  ];

  const [
    toneladasTransportadasRef, // Esto lo añades como ref={} en el componente que quieres que detecte.
    tonsOnBoard, // Este es el boolean que te dice si esta o no.
  ] = useInView({
    // Detecta si el componente está en el viewport
    triggerOnce: false, // Esto hace que la detección solo ocurra una vez cuando el elemento entra en el viewport
    threshold: 0.5, // Define el umbral de visibilidad (0.5 significa que al menos la mitad del elemento debe estar en el viewport)
  });

  const [
    millasRecorridasRef, // Esto lo añades como ref={} en el componente que quieres que detecte.
    milesOnBoard, // Este es el boolean que te dice si esta o no.
  ] = useInView({
    // Detecta si el componente está en el viewport
    triggerOnce: false, // Esto hace que la detección solo ocurra una vez cuando el elemento entra en el viewport
    threshold: 0.3, // Define el umbral de visibilidad (0.5 significa que al menos la mitad del elemento debe estar en el viewport)
  });

  const [
    operacionesDirigidasRef, // Esto lo añades como ref={} en el componente que quieres que detecte.
    opOnBoard, // Este es el boolean que te dice si esta o no.
  ] = useInView({
    // Detecta si el componente está en el viewport
    triggerOnce: false, // Esto hace que la detección solo ocurra una vez cuando el elemento entra en el viewport
    threshold: 0.2, // Define el umbral de visibilidad (0.5 significa que al menos la mitad del elemento debe estar en el viewport)
  });

  const [
    containerRef, // Esto lo añades como ref={} en el componente que quieres que detecte.
  ] = useInView({
    // Detecta si el componente está en el viewport
    triggerOnce: false, // Esto hace que la detección solo ocurra una vez cuando el elemento entra en el viewport
    threshold: 0.2, // Define el umbral de visibilidad (0.5 significa que al menos la mitad del elemento debe estar en el viewport)
  });

  const [
    cargoRef, // Esto lo añades como ref={} en el componente que quieres que detecte.
    cargoOnBoard, // Este es el boolean que te dice si esta o no.
  ] = useInView({
    // Detecta si el componente está en el viewport
    triggerOnce: false, // Esto hace que la detección solo ocurra una vez cuando el elemento entra en el viewport
    threshold: 0.2, // Define el umbral de visibilidad (0.5 significa que al menos la mitad del elemento debe estar en el viewport)
  });

  const numStasts = [
    {
      title: "Tonnes shipped",
      amount: 3500000,
      color: "#003989d4",
      show: tonsOnBoard,
      ref: toneladasTransportadasRef,
    },
    {
      title: "Kilometers covered",
      amount: 550000,
      color: "#0043a1d4",
      show: milesOnBoard,
      ref: millasRecorridasRef,
    },
    {
      title: "Managed projects",
      amount: 300,
      color: "#0156ced4",
      show: opOnBoard,
      ref: operacionesDirigidasRef,
    },
  ];

  return (
    <div className={classNames("homeWrapper")}>
      <GeneralLayout>
        <div className={classNames("flex", "flex-col", "md:gap-8", "md:gap-5", "gap-12")}>
          <section className={classNames("homTitWra")}>
            <div className={classNames("homTitBox")}>
              <div className={classNames("titBox", "fade-on")}>
                <h1>Material commerce</h1>
                <h2>for metallic and steel materials</h2>
                <Link href={"/contact"} className={classNames("butTalYou", "transition-all")}>
                  How can we assist?
                </Link>
              </div>
              <div
                ref={containerRef}
                className={classNames(
                  "imgBox",
                  "slide-left",
                  "flex",
                  "items-center",
                  "justify-center"
                )}
              >
                <Image
                  src={"/img/container_blanco.webp"}
                  width={580}
                  height={760}
                  alt="container"
                  className={classNames("z-0")}
                />
              </div>
            </div>
          </section>

          <section className={classNames("ourProWraBox")}>
            <h3
              className={classNames("bolder", "primary", "md:text-6xl", "text-4xl", "sm:leading-9")}
            >
              OUR CATALOG
            </h3>
            <div className={classNames("infBox")}>
              <div className={classNames("titBox")}>
                <p className={classNames("sm:text-2xl", "text-xl", "bolder")}>
                  We offer an extensive range of complete and partial products.
                </p>
                <p className={classNames("sm:text-xl", "text-sm")}>
                  Metal goods, steel waste, base materials, processed metals, mineral concentrates
                  and associated derivatives.{" "}
                </p>
              </div>
              <div className={classNames("flex", "items-center", "justify-start", "w-full")}>
                <p className={classNames("bolder", "text-4xl")}>Industrial materials</p>
              </div>
              <div className={classNames("imgWraBox")}>
                {ourProductsIndustry.map((item, key) => {
                  return (
                    <div
                      key={key}
                      className={classNames("iteBox", "transition-all", "cursor-pointer")}
                    >
                      <div className={classNames("boxScr")}>
                        <div className={classNames("iteBoxBac", "transition-all")} />
                      </div>

                      <button
                        onClick={() => {}}
                        style={{
                          backgroundImage: `url(img/home/${item.url})`,
                        }}
                      >
                        <p>{item.title}</p>
                      </button>
                    </div>
                  );
                })}
              </div>
              <div
                className={classNames("flex", "items-center", "justify-start", "w-full", "mt-20")}
              >
                <p className={classNames("bolder", "text-4xl")}>Construction supplies</p>
              </div>
              <div className={classNames("imgWraBox")}>
                {ourProductsConstruction.map((item, key) => {
                  return (
                    <div
                      key={key}
                      className={classNames("iteBox", "transition-all", "cursor-pointer")}
                    >
                      <div className={classNames("boxScr")}>
                        <div className={classNames("iteBoxBac", "transition-all")} />
                      </div>

                      <button
                        onClick={() => {}}
                        style={{
                          backgroundImage: `url(img/home/${item.url})`,
                        }}
                      >
                        <p>{item.title}</p>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className={classNames("whyHrkBox")}>
            <div className="infBox">
              <div
                ref={cargoRef}
                className={classNames("conImg", cargoOnBoard ? "slide-left" : "hidden")}
              >
                <Image
                  src={"/img/cargo_perforado_v4.webp"}
                  width={699}
                  height={330}
                  alt={"operador"}
                  className={classNames("z-0")}
                />
              </div>
            </div>

            <div className="titBox">
              <h2 className={classNames("strong m0")}>OPTIMIZE COST EFFICIENCY.</h2>
              <h2 className={classNames("strong m0")}>REDUCE HAZARDS.</h2>

              <p className={classNames("reg")}>
                Regardless of shipment or location, We provide guidance through every stage,
                covering{" "}
                <span className={classNames("strong")}>
                  both metallic and steel materials throughout
                </span>
              </p>

              <p className={classNames("reg")}>
                Our goal is to partner with your business providing tailored solutions for each
                project
              </p>
            </div>
          </section>

          <section className={classNames("anyWraBox")}>
            <div
              className={classNames(
                "flex",
                "flex-col",
                "justify-center",
                "md:items-start",
                "items-center"
              )}
            >
              <Image
                src={"/img/ten_years_black.svg"}
                alt="10_anyos"
                height={40}
                width={250}
                className="w-4"
              />

              <p className={classNames("strong", "text-2xl", "primary", "max-w-[300px]")}>
                BUSINESS IN OUR AREA
              </p>
            </div>

            <div className={classNames("splBox")} />

            <div
              ref={parrafoRef}
              className={classNames(
                "flex",
                "flex-col",
                "md:items-start",
                "items-center",
                parrafoOnBoard ? "slide-left" : "hidden"
              )}
            >
              <p
                ref={TRANSACTIONS}
                style={{ fontFamily: "popLig" }}
                className={classNames(
                  "primary",
                  "md:text-5xl",
                  "text-2xl",
                  "max-w-[300px]",
                  "md:text-left",
                  "text-center"
                )}
              />
              <div className={classNames("flex", "items-center", "justify-start", "gap-4")}>
                <p
                  ref={THAN}
                  style={{ fontFamily: "popLig" }}
                  className={classNames(
                    "primary",
                    "md:text-5xl",
                    "text-2xl",
                    "max-w-[300px]",
                    "md:text-left",
                    "text-center"
                  )}
                />
                <span
                  ref={TWENTY}
                  style={{ fontFamily: "popBold" }}
                  className={classNames(
                    "primary",
                    "md:text-5xl",
                    "text-2xl",
                    "max-w-[300px]",
                    "md:text-left",
                    "text-center"
                  )}
                />
              </div>
              <p
                ref={COUNTRIES}
                style={{ fontFamily: "popLig" }}
                className={classNames(
                  "primary",
                  "md:text-5xl",
                  "text-2xl",
                  "max-w-[300px]",
                  "md:text-left",
                  "text-center"
                )}
              />
            </div>
          </section>

          <section className={classNames("whaCanWeDo")}>
            <h3
              className={classNames("bolder", "primary", "md:text-6xl", "text-4xl", "sm:leading-9")}
            >
              HOW CAN WE HELP?
            </h3>

            <div className={classNames("griWhaWra")}>
              {weCanDo.map((item, key) => {
                return (
                  <div key={key} className={classNames("iteBox", "transition-all")}>
                    <button onClick={() => {}}>
                      <p>{item.title}</p>
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          <section className={classNames("numStats", "hidden")}>
            {numStasts.map((item, key) => {
              return (
                <div
                  ref={item.ref}
                  key={key}
                  className={classNames("iteNumBox", item.show ? "slide-bottom" : "hidden")}
                >
                  <Counter
                    startCount={item.show}
                    className={classNames("titTex", "text-9xl", "font-bold", "primary")}
                    value={item.amount}
                  />
                  {/* <p className={classNames('titTex','text-9xl', 'font-bold', 'primary')}>{item.amount > 9000 ? <>{item.amount / 1000}<span className="font-light text-5xl">K</span></>: item.amount }</p> */}
                  <p className={classNames("text-2xl", "primary")}>{item.title}</p>
                </div>
              );
            })}
          </section>
        </div>
      </GeneralLayout>
    </div>
  );
}
