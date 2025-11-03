import FormHrk from '@/components/Form/FormHrk';
import GeneralLayout from '@/components/GeneralLayout/GeneralLayout';
import classNames from 'classnames';
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
              <Image src={'/img/hrk_logo_lineas_azul.svg'} alt={'logo hrk'} width={200} height={200} />
            </div>
            <p>
              <span>HRK Global Trading</span> main contracting center is located in <span>Miami</span>, <span>United States</span> with local and
              representative offices located in <span>Panama City</span>, <span>Panamá</span> and <span>Ciudad Guayana</span>, Venezuela.{' '}
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
