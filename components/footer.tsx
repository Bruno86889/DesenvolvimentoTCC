import React from 'react';
import { SmallText } from './text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="text">
                <SmallText text='2022. ETEC Ferrúcio Humberto Gazzetta'/>
                <SmallText text='Av São Gonçalo, 2770 - Jardim da alvorada, Nova odessa, SP'/>
                <SmallText text='CEP 13460-000 - (19) 3498-1709 (19) 3476-5074'/>
            </div>
            <div className="socialMedia">

                <Link href={'https://www.facebook.com/etecdenovaodessa'} target="_blank">
                    <FontAwesomeIcon icon={faFacebook} width="16" />
                </Link>
                <Link href={'https://www.instagram.com/etecferrucio_no/#'} target="_blank">
                    <FontAwesomeIcon icon={faInstagram} width="16" />
                </Link>
                <Link href={'mailto:secretaria.odessa@etec.sp.gov.br'} target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} width="16" />
                </Link>
            </div>
        </footer>
    )
}
export default Footer;
