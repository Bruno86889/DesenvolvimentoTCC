import React from 'react';
import Navbar from '../components/Navbar'
import { Section } from '../components/Main'
import { MediumText, SmallText } from '../components/Text';
import Image from 'next/image';
import { MetaData, RootLayout } from '../components/Root';
import sobre from '../styles/sobre.module.scss';
import { NextPage } from 'next';

const metaData:MetaData = {
    title: 'Etec Ferrúcio Humberto Gazzetta',
    description: '',
    keywords:'',
    robots:''
}

const Sobre:NextPage = () => {
    return (
        <RootLayout meta={metaData}>
            <Navbar transparent={true} />
                <Section className={sobre.section} >
                    <div className={sobre.backgroundImage}>
                        <Image alt="" src='/etec2.svg' width={100} height={100}/>
                    </div>
                    <div className={sobre.descriptionSquare}>
                        <div className={sobre.textContainer}>
                            <SmallText
                                text='Com a abertura do mercado interno brasileiro, Nova Odessa passa a receber grandes corporações devido à sua localização estratégica, estando próxima às principais rodovias paulistas, infraestrutura e população com alto nível de instrução. O município de Nova Odessa se caracterizava de praticamente 90% da mão de obra voltada para o ramo da Indústria Têxtil. Com o decorrer dos anos, esse quadro vem se modificando, mantendo os níveis de emprego e gerando a vinda de novas empresas através de algumas particularidades, como localização, mananciais de água, rodovias próximas, mão de obra etc. Muitos desses recursos gerados pela própria administração.'
                            />
                            <SmallText
                                text='É neste contexto que em 2005, através de um convênio entre a Prefeitura Municipal de Nova Odessa e o Centro Estadual de Educação Tecnológica Paula Souza, instala-se a Classe Descentralizada da ETEC Polivalente de Americana, que mais tarde em 2010 se transforma na ETEC de Nova Odessa.A unidade conta hoje com 08 (oito) cursos Técnicos Profissionalizantes oferecidos a comunidade na Unidade. A Unidade escolar está localizada numa avenida de fácil acesso e os alunos são atendidos por5 (cinco) linhas de ônibus que circulam por todos os bairros da cidade'
                            />
                        </div>
                    </div>
                </Section>
        </RootLayout>
    )
}

export default Sobre;