"use client";
import GeneralLayout from "@/components/GeneralLayout/GeneralLayout";
import classNames from "classnames";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "../../styles/services.scss";
import { RiAlarmWarningLine } from "react-icons/ri";
import { AiOutlineWarning } from "react-icons/ai";
import { FaCheckDouble } from "react-icons/fa";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { GiWeight } from "react-icons/gi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaBusinessTime, FaFileContract } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { BiCommentDetail, BiSolidPlaneAlt, BiSolidExtension, BiCart } from "react-icons/bi";
import { AiFillMedicineBox } from "react-icons/ai";
import { LuShip } from "react-icons/lu";
import { IoBarChart } from "react-icons/io5";
import { TbDeviceAnalytics } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";
import { BiSolidHelpCircle } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { PiStrategyBold } from "react-icons/pi";
import { TbNetwork } from "react-icons/tb";
import { PiShareNetworkBold } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";
import { FiTarget } from "react-icons/fi";
import { FiUmbrella } from "react-icons/fi";
import Link from "next/link";
import Typed from "typed.js";

const Services = () => {
  const EVERYTHING = useRef(null);

  useEffect(() => {
    if (!EVERYTHING.current) return;

    const everything = new Typed(EVERYTHING.current, {
      strings: ["ever^200ything."],
      typeSpeed: 100,
      loop: false,
      showCursor: false,
    });

    return () => {
      everything.destroy();
    };
  }, []);

  return (
    <GeneralLayout>
      <div className={"servicesWrapper"}>
        <section className={classNames("serTitWra")}>
          <div className={classNames("infBox")}>
            <h1>
              Whatever task you require,<span> We handle</span>{" "}
              <span
                ref={EVERYTHING}
                style={{ fontFamily: "popRare" }}
                className={classNames("text-orangePrimary", "eveTex")}
              />
            </h1>

            <div className={classNames("butBox", "transition-all")}>
              <Link href={"/contact"} className={classNames("conBot", "transition-all")}>
                Contact Us
              </Link>
            </div>
          </div>

          <div className={classNames("imgBox")}>
            <div className={classNames("bluBox", "absolute", "w-64", "", "h-40")} />

            <Image
              width={600}
              height={353}
              alt={"cargo"}
              src={"/img/hombre-almacen-trabajando_v2.webp"}
              className="mix-blend-multiply"
            />
          </div>
        </section>

        <section className={classNames("tecAdvWra")}>
          <div className={classNames("infBox")}>
            <h3>Risk Mitigation</h3>

            <p>
              At <span>HRK Global Trading</span> we recognize that risk mitigation is essential to
              reach our business objectives, which is why the company enforces rigorous internal
              control mechanisms to{" "}
              <span> guarantee that risk is substantially reduced or removed</span>.
            </p>
            <p>
              <span>We prioritize our client's security</span> and that is why we create contract
              clauses which support our procedures and reduce the business risk. Similarly We have
              built a strong financial standing together with banks and other financial entities
              that enable us to <span>deliver optimal solutions for our clients</span>.
            </p>

            <div className={classNames("icoBox")}>
              <RiAlarmWarningLine size={30} className={classNames("text-primary")} />
              <AiOutlineWarning size={30} className={classNames("text-primary")} />
              <FaCheckDouble size={25} className={classNames("text-primary")} />
            </div>
          </div>

          <div className={classNames("infBox")}>
            <h3>Quality Assurance</h3>

            <p>
              At <span>HKR</span> one of our core foundations is <span>Quality Assurance</span>, we
              excel in most of our operations because we coordinate our procedures alongside our
              team of specialists, overseeing aspects including:
            </p>
            <p>
              <span>Weight verification:</span> When dealing raw materials, inadequate weight
              verification results in increased expenses, which is why at <span>HRK Global</span> we
              ensure that the shipment of minerals aligns with our agreements.{" "}
              <span>How is this achieved?</span> Our team of experts has established connections
              with verification firms that will validate the shipment.
            </p>

            <div className={classNames("icoBox")}>
              <HiOutlineClipboardCheck size={30} className={classNames("text-primary")} />
              <GiWeight size={30} className={classNames("text-primary")} />
              <IoSpeedometerOutline size={25} className={classNames("text-primary")} />
            </div>
          </div>
          <div className={classNames("infBox")}>
            <h3>Agreement Discussions</h3>

            <p>
              We offer professional guidance on agreement discussions and examination of clauses,
              assisting you to bypass 'concealed' details. We bring expertise and logic{" "}
              <span>enabling suitable and beneficial solutions</span>. We allow you to stay in
              command of your own future, with{" "}
              <span>full openness ensured throughout every phase</span>.
            </p>
            <p>
              We also offer <span>risk reduction of possible agreement problem areas</span>.
            </p>
            <p>
              We thoroughly describe{" "}
              <span>Transportation and Charter Party clauses (spot or C.O.A.)</span> and discuss to
              guarantee reduced discrepancies between vessel owner and buyer.
            </p>

            <div className={classNames("icoBox")}>
              <FaBusinessTime size={30} className={classNames("text-primary")} />
              <FaFileContract size={30} className={classNames("text-primary")} />
              <GoLaw size={25} className={classNames("text-primary")} />
            </div>
          </div>

          <div className={classNames("infBox")}>
            <h3>Customer Relations</h3>

            <p>
              <span>We recognize how vital connections are</span>. We operate aligned with your
              organization's principles and are certain that{" "}
              <span>We can additionally strengthen and grow your international network</span>{" "}
              creating fresh and promising possibilities. All operations personnel will communicate
              and meet frequently <span>to guarantee complete customer contentment</span>, trust and
              collaboration.
            </p>

            <div className={classNames("icoBox")}>
              <BiCart size={30} className={classNames("text-primary")} />
              <BiCommentDetail size={30} className={classNames("text-primary")} />
              <BiSolidPlaneAlt size={25} className={classNames("text-primary")} />
            </div>
          </div>

          <div className={classNames("infBox")}>
            <h3>Issue Resolution</h3>

            <p>
              We possess over <span>20 years' expertise in issue resolution</span> and deliver{" "}
              <span>practical solutions</span>. Our skilled team can handle legal disputes,
              transportation matters/obligations and assistance with a selection of maritime
              attorneys. <span>Specialist guidance</span> is provided on potential upcoming concerns
              with existing agreements and approaches for preventing renegotiation difficulties.
            </p>

            <div className={classNames("icoBox")}>
              <BiSolidExtension size={30} className={classNames("text-primary")} />
              <AiFillMedicineBox size={30} className={classNames("text-primary")} />
              <LuShip size={25} className={classNames("text-primary")} />
            </div>
          </div>

          <div className={classNames("infBox")}>
            <h3>Discussions</h3>

            <p>
              We offer <span>examination and assessment of agreements</span> and problems occurring
              during agreement implementation.
            </p>

            <p>
              We additionally{" "}
              <span>assist in preparing for upcoming discussions with prospective purchasers</span>{" "}
              and provide suggestions on clauses and trustworthiness of counterparties.
            </p>

            <div className={classNames("icoBox")}>
              <TbPigMoney size={30} className={classNames("text-primary")} />
              <FiTarget size={30} className={classNames("text-primary")} />
              <FiUmbrella size={25} className={classNames("text-primary")} />
            </div>
          </div>

          <div className={classNames("infBox")}>
            <h3>Market Research</h3>

            <p>
              Through ongoing engagement in the global markets and years of information and studies,{" "}
              <span>We take pride in our data stream</span>.{" "}
              <span>Customers will be informed of weekly updates</span> through reports emphasizing
              market changes and patterns, with immediate notifications on pertinent matters.
            </p>

            <div className={classNames("icoBox")}>
              <IoBarChart size={30} className={classNames("text-primary")} />
              <TbDeviceAnalytics size={30} className={classNames("text-primary")} />
              <FaInfoCircle size={25} className={classNames("text-primary")} />
            </div>
          </div>

          <div className={classNames("infBox")}>
            <h3>Insurance</h3>

            <p>
              <span>We can arrange appropriate insurance coverage for shipments</span> and display a
              range of options for you to select from.
            </p>

            <p>
              We supply <span>assistance and expertise on filing insurance claims</span>, gathering
              of paperwork and communication with insurers and damage evaluators.
            </p>

            <div className={classNames("icoBox")}>
              <FaHandsHelping size={30} className={classNames("text-primary")} />
              <BiSolidHelpCircle size={30} className={classNames("text-primary")} />
              <FaInfoCircle size={25} className={classNames("text-primary")} />
            </div>
          </div>

          <div className={classNames("infBox")}>
            <h3>Transportation Strategy</h3>

            <p>
              <span>HRK Global Trading</span> collaborates with a{" "}
              <span>extensive network of chartering firms</span> to guarantee all transportation
              requirements.
            </p>

            <div className={classNames("icoBox")}>
              <PiStrategyBold size={30} className={classNames("text-primary")} />
              <TbNetwork size={30} className={classNames("text-primary")} />
              <PiShareNetworkBold size={25} className={classNames("text-primary")} />
            </div>
          </div>
        </section>

        <section className={classNames("serIncWra")}>
          <div className={classNames("serBox", "items-end", "text-right")}>
            <h3>Services comprise</h3>

            <ul>
              <li>
                <span>Route planning</span> assessment
              </li>
              <li>
                <span>Examination of sales clauses</span> – securing business safeguards
              </li>
              <li>
                Inspection of suggested ships for <span>appropriateness</span> and{" "}
                <span>security</span>
              </li>
              <li>
                <span>Comparative analysis</span> to support sales efforts – discussion and guidance
                on shipping rates
              </li>
              <li>
                <span>Locked</span> and <span>variable</span> price transportation coverage
              </li>
              <li>
                <span>Discussion</span> and <span>counsel</span> on port handling agreements
              </li>
              <li>
                <span>Solid partnerships</span> with regional vessel owners
              </li>
            </ul>
          </div>

          <div className={classNames("serBox")}>
            <h3>Administrative Oversight</h3>
            <ul>
              <li>
                <span>Frequent meetings with our customers</span>, for information sharing and
                executive talks{" "}
              </li>
              <li>
                <span>Bilingual</span> <span>English</span> and <span>Spanish</span> personnel
              </li>
              <li>
                <span>Complete administrative oversight</span> of all choice-making procedures{" "}
              </li>
              <li>
                Complete and <span>ongoing access</span> to international connections{" "}
              </li>
              <li>
                Records of all electronic communications and{" "}
                <span>daily/weekly progress reports</span>{" "}
              </li>
              <li>Top class reporting structures </li>
              <li>
                <span>Inspectors</span> or financial experts{" "}
                <span>are invited to our main office</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </GeneralLayout>
  );
};

export default Services;

export const dynamic = "force-dynamic";
