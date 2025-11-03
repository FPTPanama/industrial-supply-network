import FormHrk from '@/components/Form/FormHrk';
import GeneralLayout from '@/components/GeneralLayout/GeneralLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '../../styles/contact.scss';
import '../../styles/form-hrk.scss';

const Contact = () => {
  return (
    <GeneralLayout>
      <div className="contactWrapper">
        <section className="conWraBox">
          <div className="infBox">
            <div className="imgBox">
              <Image src={'/img/industrial_gear.svg'} alt={'Industrial Supply Network logo'} width={200} height={200} />
            </div>
            <p>
              <span>Industrial Supply Network</span> primary operations hub is situated in <span>Miami</span>, <span>United States</span> with regional and
              branch offices situated in <span>Panama City</span>, <span>Panamá</span> and <span>Ciudad Guayana</span>, Venezuela.{' '}
            </p>
            <div className="infTex">
              <Link href={'tel:+507-3886501'}>
                <span className="telLink">+507-3886501</span>
              </Link>
              <Link href={'mailto:info@hrkglobaltrade.com'}>
                <span className="emailLink">info@hrkglobaltrade.com</span>
              </Link>
            </div>
          </div>

          <FormHrk />
        </section>
      </div>
    </GeneralLayout>
  );
};

export default Contact;
