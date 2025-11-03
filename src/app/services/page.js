
'use client';
import GeneralLayout from '@/components/GeneralLayout/GeneralLayout'
import classNames from 'classnames';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import '../../styles/services.scss';
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
import Link from 'next/link';
import Typed from 'typed.js';




const Services = () => {

  const EVERYTHING = useRef(null);

  useEffect(() => {
    if (!EVERYTHING.current) return;
    
    const everything = new Typed( EVERYTHING.current, {
      strings: ['ever^200ything.'],
      typeSpeed: 100,
      loop: false,
      showCursor: false,
    });

    return () => {
      everything.destroy();
    };
  }, [])
  




  return (

    <GeneralLayout>

      <div className={'servicesWrapper'}>

        <section className={classNames('serTitWra')}>

          <div className={classNames('infBox')}>

            <h1>No matter what operation you need to do,<span> We take care of</span> <span ref={EVERYTHING} style={{ fontFamily: 'popRare' }} className={classNames('text-red-primary', 'eveTex')}/></h1>

            <div className={classNames('butBox', 'transition-all')}>
              <Link href={'/contact'} className={classNames('conBot','transition-all')}>Contact US</Link>
            </div>

          </div>

          <div className={classNames('imgBox')}>

            <div className={classNames('bluBox', 'absolute', 'w-64', 'bg-primary', 'h-40')} />

            <Image width={600} height={353} alt={'cargo'} src={'/img/hombre-almacen-trabajando_v2.webp'} className='mix-blend-multiply' />

          </div>

        </section>

        <section className={classNames('tecAdvWra')}>

          <div className={classNames('infBox')}>

            <h3>Risk Management</h3>

            <p>
              In <span>HRK Global Trading</span> we understand that risk management it’s crucial to achieve our trading goals, it is because of this that the company implement tight internal control systems in order to <span> ensure that risk is significantly minimized or eliminated</span>.
            </p>
            <p><span>We take seriously our client’s safety</span> and that is why we develop contract terms which help to ensure our process and mitigate the commercial risk. In the same order We have structured a solid financial reputation hand in hand with banks and other financial institutions that allow us to <span>provide ideal solutions for our clients</span>.</p>

            <div className={classNames('icoBox')}>

              <RiAlarmWarningLine size={30} className={classNames('text-primary')} />
              <AiOutlineWarning size={30} className={classNames('text-primary')} />
              <FaCheckDouble size={25} className={classNames('text-primary')} />

            </div>

          </div>

          <div className={classNames('infBox')}>

            <h3>Quality Control</h3>

            <p>
              At <span>HKR</span> one of our main pillars is <span>Quality Control</span>, we stand out in most of our businesses because we manage our processes hand in hand with our team of experts, taking control of areas such as:
            </p>
            <p><span>Weight control:</span> When trading raw materials, poor weight control leads to higher cost, that is why at <span>HRK Global</span> we make sure that the transportation of minerals corresponds according to our arrangements. <span>How do we do this?</span> Our team of professionals has developed a network with inspection companies that will certify the cargo.</p>

            <div className={classNames('icoBox')}>

              <HiOutlineClipboardCheck size={30} className={classNames('text-primary')} />
              <GiWeight size={30} className={classNames('text-primary')} />
              <IoSpeedometerOutline size={25} className={classNames('text-primary')} />

            </div>

          </div>
          <div className={classNames('infBox')}>

            <h3>Contract Negotiations</h3>

            <p>
              We provide expert advice on contract negotiations and analysis of terms, helping you avoid ‘hidden’ nuances. We have a voice of experience and reason <span>allowing appropriate and healthy solutions</span>. We enable you to remain in control of your own destiny, with <span>complete transparency guaranteed at all stages</span>.
            </p>
            <p>We also provide <span>de-risking of potential contract trouble-spots</span>.</p>
            <p>We fully explain <span>Shipping and Charter Party terms (spot or C.O.A.)</span> and negotiate to ensure minimal differences between ship owner and off-taker.</p>

            <div className={classNames('icoBox')}>

              <FaBusinessTime size={30} className={classNames('text-primary')} />
              <FaFileContract size={30} className={classNames('text-primary')} />
              <GoLaw size={25} className={classNames('text-primary')} />

            </div>

          </div>

          <div className={classNames('infBox')}>

            <h3>Client Liaison</h3>

            <p>
              <span>We know how important relationships are</span>. We act in accordance with your company’s values and are confident that <span>We can further enhance and expand your global network</span> opening up new and exciting opportunities. All logistics staff will interact and visit regularly <span>to ensure total client satisfaction</span>, confidence and team work.
            </p>


            <div className={classNames('icoBox')}>

              <BiCart size={30} className={classNames('text-primary')} />
              <BiCommentDetail size={30} className={classNames('text-primary')} />
              <BiSolidPlaneAlt size={25} className={classNames('text-primary')} />

            </div>

          </div>

          <div className={classNames('infBox')}>

            <h3>Problem Solving</h3>

            <p>
              We have over <span>20 years’ experience in problem solving</span> and provide <span>pragmatic solutions</span>. Our experienced team can deal with legal claims, shipping issues/liabilities and guidance with a choice of marine lawyers. <span>Expert advice</span> is given on possible future issues with current contracts and strategies for avoiding renegotiating problems.
            </p>


            <div className={classNames('icoBox')}>

              <BiSolidExtension size={30} className={classNames('text-primary')} />
              <AiFillMedicineBox size={30} className={classNames('text-primary')} />
              <LuShip size={25} className={classNames('text-primary')} />

            </div>

          </div>

          <div className={classNames('infBox')}>

            <h3>Negotiations</h3>

            <p>
              We provide <span>analysis and review of contracts</span> and issues arising during contract execution.
            </p>

            <p>
              We also <span>help to set the stage for future negotiations with potential buyers</span> and make recommendations on terms and reliability of counter parties.
            </p>


            <div className={classNames('icoBox')}>

              <TbPigMoney size={30} className={classNames('text-primary')} />
              <FiTarget size={30} className={classNames('text-primary')} />
              <FiUmbrella size={25} className={classNames('text-primary')} />

            </div>

          </div>

          <div className={classNames('infBox')}>

            <h3>Market Analysis</h3>

            <p>
              With constant interaction in the worldwide markets and years of data and research, <span>We are proud of our information flow</span>. <span>Clients will be advised of weekly events</span> by bulletins highlighting market developments and trends, with instant alerts on relevant issues.
            </p>


            <div className={classNames('icoBox')}>

              <IoBarChart size={30} className={classNames('text-primary')} />
              <TbDeviceAnalytics size={30} className={classNames('text-primary')} />
              <FaInfoCircle size={25} className={classNames('text-primary')} />

            </div>

          </div>

          <div className={classNames('infBox')}>

            <h3>Insurance</h3>

            <p>
              <span>We can negotiate suitable insurance policies for cargoes</span> and present an array of offers for you to choose from.
            </p>

            <p>
              We provide <span>help and experience on making insurance claims</span>, collecting of documentation and liaison with underwriters and loss-assessors.
            </p>


            <div className={classNames('icoBox')}>

              <FaHandsHelping size={30} className={classNames('text-primary')} />
              <BiSolidHelpCircle size={30} className={classNames('text-primary')} />
              <FaInfoCircle size={25} className={classNames('text-primary')} />

            </div>

          </div>

          <div className={classNames('infBox')}>

            <h3>Shipping Strategy</h3>

            <p>
              <span>HRK Global Trading</span> works along with a <span>great network of chartering companies</span> in order to ensure all shipping needs.
            </p>


            <div className={classNames('icoBox')}>

              <PiStrategyBold size={30} className={classNames('text-primary')} />
              <TbNetwork size={30} className={classNames('text-primary')} />
              <PiShareNetworkBold size={25} className={classNames('text-primary')} />

            </div>

          </div>

        </section>

        <section className={classNames('serIncWra')}>

          <div className={classNames('serBox', 'items-end', 'text-right')}>

            <h3>Services include</h3>

            <ul>
              <li><span>Desktop route</span> evaluation</li>
              <li><span>Review of sales terms</span> – ensuring commercial protection</li>
              <li>Vetting of proposed vessels for <span>suitability</span> and <span>safety</span></li>
              <li><span>Matrix analysis</span> to complement marketing activities – negotiation and advice on freight parities</li>
              <li><span>Fixed</span> and <span>floating</span> price freight cover</li>
              <li><span>Negotiation</span> and <span>advice</span> on stevedoring contracts</li>
              <li><span>Strong relationships</span> with local ship owners</li>
            </ul>

          </div>

          <div className={classNames("serBox")}>

            <h3>Management Control</h3>
            <ul>
              <li><span>Regular visits to our clients</span>, for updating and management discussions </li>
              <li><span>English</span> and <span>Spanish</span> speaking staff</li>
              <li><span>Total management control</span> of all decision-making processes </li>
              <li>Full and <span>constant exposure</span> to worldwide relationships </li>
              <li>Copies of all email correspondence and <span>daily/weekly status updates</span> </li>
              <li>Top class reporting structures </li>
              <li><span>Auditors</span> or accountants <span>are welcome at our head office</span></li>

            </ul>
          </div>


        </section>

      </div>

    </GeneralLayout>
  )
}

export default Services

export const dynamic = 'force-dynamic'