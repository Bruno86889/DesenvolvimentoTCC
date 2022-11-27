import { BlogLayout, Layout } from '@/components/root';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import {MainTitle, SubTitle} from "@/components/text";

const meta:MetaData = {
    title: 'Contato',
    description: '',
    keywords:'',
    robots:'index'
}

const Contato = ()=>{
    return (
        <BlogLayout meta={meta}>
            <MainTitle>Contato</MainTitle>

            <div style={{margin:"8px 0"}}>
            <SubTitle>Telefones</SubTitle>

                <Link style={{display: "flex", justifyContent:"left",width:"max-content"}} href={'tel:+551934765074'} target="_blank">
                    <FontAwesomeIcon icon={faPhone} width="24" />
                    <p style={{textIndent: "12px"}}>(19) 3476-5074</p>
                </Link>

                <Link style={{display: "flex", justifyContent:"left",width:"max-content"}} href={'tel:+551934981709'} target="_blank">
                    <FontAwesomeIcon icon={faPhone} width="24" />
                    <p style={{textIndent: "12px"}}>(19) 3498-1709</p>
                </Link>

                <Link style={{display: "flex", justifyContent:"left",width:"max-content"}} href={'tel:+5519992157441'} target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} width="24" />
                    <p style={{textIndent: "12px"}}>(19) 99215-7441</p>
                </Link>
            </div>
            
            <div style={{margin:"8px 0"}}>
                <SubTitle>
                    Email
                </SubTitle>
                <Link style={{display: "flex", justifyContent:"left",width:"max-content"}} href={'mailto:secretaria.odessa@etec.sp.gov.br'} target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} width="24" />
                    <p style={{textIndent: "12px"}}>secretaria.odessa@etec.sp.gov.br</p>
                </Link>
            </div>
            
            <div style={{margin:"8px 0"}}>
                <SubTitle>
                    Redes Sociais
                </SubTitle>

                <Link style={{display: "flex", justifyContent:"left",width:"max-content"}} href={'https://www.facebook.com/etecdenovaodessa'} target="_blank">
                    <FontAwesomeIcon icon={faFacebook} width="24" />
                    <p style={{textIndent: "12px"}}>Facebook</p>
                </Link>

                <Link style={{display: "flex", justifyContent:"left",width:"max-content"}} href={'https://www.instagram.com/etecferrucio_no/#'} target="_blank">
                    <FontAwesomeIcon icon={faInstagram} width="24" />
                    <p style={{textIndent: "12px"}}>Instagram</p>
                </Link>
            </div>

            <div style={{margin:"8px 0"}}>
                <SubTitle>
                    Endereço
                </SubTitle>
                <p style={{textIndent:"0px"}}>Av São Gonçalo, 2770 - Jardim da alvorada, Nova odessa, SP</p>
                <p style={{textIndent:"0px"}}>CEP 13460-000</p>
            </div>
        </BlogLayout>
    )
}

export default Contato;