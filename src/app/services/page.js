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
              Any assignment you need,<span> We manage</span>{" "}
              <span
                ref={EVERYTHING}
                style={{ fontFamily: "popRare" }}
                className={classNames("text-orangePrimary", "eveTex")}
              />
            </h1>

            <div className={classNames("butBox", "transition-all")}>
              <Link href={"/contact"} className={classNames("conBot", "transition-all")}>
                Get in Touch
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
            <h3>Risk Management</h3>

            <p>
              At <span>Industrial Supply Network</span> we understand that risk management is crucial to
              achieve our corporate goals, which is why the organization implements strict internal
              control systems to{" "}
              <span> ensure that risk is significantly minimized or eliminated</span>.
            </p>
            <p>
              <span>We focus on our client's protection</span> and that is why we develop contract
              terms which reinforce our processes and minimize commercial risk. Additionally We have
              established a solid financial position with banks and other financial institutions
              that allow us to <span>provide ideal solutions for our clients</span>.
            </p>

            <div className={classNames("icoBox")}>
              <RiAlarmWarningLine size={30} className={classNames("text-primary")} />
              <AiOutlineWarning size={30} className={classNames("text-primary")} />
              <FaCheckDouble size={25} className={classNames("text-primary")} />
            </div>
          </div>

          <div className={classNames("infBox")}>
            <h3>Quality Control</h3>

            <p>
              At <span>Industrial Supply Network</span> one of our fundamental pillars is <span>Quality Control</span>, we
              succeed in most of our activities because we organize our processes together with our
              team of professionals, monitoring elements including:
            </p>
            <p>
              <span>Weight validation:</span> When handling raw materials, insufficient weight
              validation leads to higher costs, which is why at <span>Industrial Supply Network</span> we
              make sure that the delivery of minerals matches our contracts.{" "}
              <span>How do we accomplish this?</span> Our group of specialists has developed relationships
              with validation companies that will verify the delivery.
            </p>

            <div className={classNames("icoBox")}>
              <HiOutlineClipboardCheck size={30} className={classNames("text-primary")} />
              <GiWeight size={30} className={classNames("text-primary")} />
              <IoSpeedometerOutline size={25} className={classNames("text-primary")} />
            </div>
          </div>
          <div className={classNames("infBox")}>
            <h3>Contract Negotiations</h3>

            <p>
              We provide expert advice on contract negotiations and review of terms,
              helping you to avoid 'hidden' information. We offer knowledge and reasoning{" "}
              <span>creating appropriate and advantageous solutions</span>. We enable you to remain in
              control of your own destiny, with{" "}
              <span>complete transparency maintained during every step</span>.
            </p>
            <p>
              We also provide <span>risk minimization of potential contract issue points</span>.
            </p>
            <p>
              We comprehensively explain{" "}
              <span>Shipping and Charter Party terms (spot or C.O.A.)</span> and negotiate to
              ensure minimized conflicts between ship owner and purchaser.
            </p>

            <div className={classNames("icoBox")}>
              <FaBusinessTime size={30} className={classNames("text-primary")} />
              <FaFileContract size={30} className={classNames("text-primary")} />
              <GoLaw size={25} className={classNames("text-primary")} />
            </div>
          </div>

          <div className={classNames("infBox")}>
            <h3>Client Relationships</h3>

            <p>
              <span>We understand how important relationships are</span>. We work in accordance with your
              company's values and are confident that{" "}
              <span>We can further enhance and expand your global network</span>{" "}
              generating new and exciting opportunities. All operational staff will interact
              and convene regularly <span>to ensure total client satisfaction</span>, confidence and
              partnership.
            </p>

            <div className={classNames("icoBox")}>
              <BiCart size={30} className={classNames("text-primary")} />
              <BiCommentDetail size={30} className={classNames("text-primary")} />
              <BiSolidPlaneAlt size={25} className={classNames("text-primary")} />
            </div>
          </div>

          <div className={classNames("infBox")}>
            <h3>Problem Solving</h3>

            <p>
              We have over <span>20 years' experience in problem solving</span> and provide{" "}
              <span>realistic solutions</span>. Our experienced team can manage legal conflicts,
              shipping issues/commitments and support with a range of maritime
              lawyers. <span>Expert consultation</span> is offered on potential future issues
              with current contracts and methods for avoiding renegotiation problems.
            </p>

            <div className={classNames("icoBox")}>
              <BiSolidExtension size={30} className={classNames("text-primary")} />
              <AiFillMedicineBox size={30} className={classNames("text-primary")} />
              <LuShip size={25} className={classNames("text-primary")} />
            </div>
          </div>

          <div className={classNames("infBox")}>
            <h3>Consultations</h3>

            <p>
              We provide <span>review and evaluation of contracts</span> and issues arising
              during contract execution.
            </p>

            <p>
              We also{" "}
              <span>help in getting ready for future consultations with potential buyers</span>{" "}
              and offer recommendations on terms and reliability of partners.
            </p>

            <div className={classNames("icoBox")}>
              <TbPigMoney size={30} className={classNames("text-primary")} />
              <FiTarget size={30} className={classNames("text-primary")} />
              <FiUmbrella size={25} className={classNames("text-primary")} />
            </div>
          </div>

          <div className={classNames("infBox")}>
            <h3>Market Analysis</h3>

            <p>
              Through continuous participation in the international markets and years of data and research,{" "}
              <span>We are proud of our information flow</span>.{" "}
              <span>Clients will receive weekly updates</span> through reports highlighting
              market trends and developments, with instant alerts on relevant topics.
            </p>

            <div className={classNames("icoBox")}>
              <IoBarChart size={30} className={classNames("text-primary")} />
              <TbDeviceAnalytics size={30} className={classNames("text-primary")} />
              <FaInfoCircle size={25} className={classNames("text-primary")} />
            </div>
          </div>

          <div className={classNames("infBox")}>
            <h3>Insurance Services</h3>

            <p>
              <span>We can organize suitable insurance protection for deliveries</span> and present a
              variety of choices for you to choose from.
            </p>

            <p>
              We offer <span>support and knowledge on submitting insurance claims</span>, collection
              of documents and interaction with insurance companies and loss assessors.
            </p>

            <div className={classNames("icoBox")}>
              <FaHandsHelping size={30} className={classNames("text-primary")} />
              <BiSolidHelpCircle size={30} className={classNames("text-primary")} />
              <FaInfoCircle size={25} className={classNames("text-primary")} />
            </div>
          </div>

          <div className={classNames("infBox")}>
            <h3>Shipping Strategy</h3>

            <p>
              <span>Industrial Supply Network</span> works with a{" "}
              <span>wide network of chartering companies</span> to ensure all shipping
              needs.
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
            <h3>Services include</h3>

            <ul>
              <li>
                <span>Route evaluation</span> and planning
              </li>
              <li>
                <span>Review of sales terms</span> – establishing commercial protections
              </li>
              <li>
                Evaluation of proposed vessels for <span>suitability</span> and{" "}
                <span>safety</span>
              </li>
              <li>
                <span>Competitive comparison</span> to assist sales activities – consultation and advice
                on freight rates
              </li>
              <li>
                <span>Fixed</span> and <span>flexible</span> price shipping options
              </li>
              <li>
                <span>Consultation</span> and <span>guidance</span> on port service agreements
              </li>
              <li>
                <span>Strong alliances</span> with local ship owners
              </li>
            </ul>
          </div>

          <div className={classNames("serBox")}>
            <h3>Administrative Management</h3>
            <ul>
              <li>
                <span>Regular meetings with our clients</span>, for data exchange and
                management discussions{" "}
              </li>
              <li>
                <span>Bilingual</span> <span>English</span> and <span>Spanish</span> staff
              </li>
              <li>
                <span>Full administrative management</span> of all decision-making processes{" "}
              </li>
              <li>
                Full and <span>continuous access</span> to global connections{" "}
              </li>
              <li>
                Documentation of all digital communications and{" "}
                <span>daily/weekly status reports</span>{" "}
              </li>
              <li>Premium reporting systems </li>
              <li>
                <span>Auditors</span> or financial specialists{" "}
                <span>are welcome at our headquarters</span>
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
