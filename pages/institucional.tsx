import React from 'react';
import Navbar from '../components/navbar'
import { Section } from '../components/section'
import { MediumText, SmallText } from '../components/text';
import Image from 'next/image';
import { MetaData, RootLayout } from '../components/root';
import institucional from '../styles/institucional.module.scss';
import { NextPage } from 'next';
import Footer from '../components/footer';
import Feed from '../components/feed';
import Galeria from '../components/galeria';

const metaData: MetaData = {
    title: 'Etec Ferrúcio Humberto Gazzetta',
    description: '',
    keywords: '',
    robots: ''
}

const Institucional: NextPage = () => {
    return (
        <RootLayout meta={metaData}>
            <Navbar transparent={true} />
            <Section className={institucional.section} >
                <div className={institucional.backgroundImage}>
                    <Image alt="" src='/etec2.svg' width={100} height={100} priority />
                </div>
                <div className={institucional.descriptionSquare}>
                    <div className={institucional.textContainer}>
                        <SmallText
                            text='Com a abertura do mercado interno brasileiro, Nova Odessa passa a receber grandes corporações devido à sua localização estratégica, estando próxima às principais rodovias paulistas, infraestrutura e população com alto nível de instrução. O município de Nova Odessa se caracterizava de praticamente 90% da mão de obra voltada para o ramo da Indústria Têxtil. Com o decorrer dos anos, esse quadro vem se modificando, mantendo os níveis de emprego e gerando a vinda de novas empresas através de algumas particularidades, como localização, mananciais de água, rodovias próximas, mão de obra etc. Muitos desses recursos gerados pela própria administração.'
                        />
                        <SmallText
                            text='É neste contexto que em 2005, através de um convênio entre a Prefeitura Municipal de Nova Odessa e o Centro Estadual de Educação Tecnológica Paula Souza, instala-se a Classe Descentralizada da ETEC Polivalente de Americana, que mais tarde em 2010 se transforma na ETEC de Nova Odessa.A unidade conta hoje com 08 (oito) cursos Técnicos Profissionalizantes oferecidos a comunidade na Unidade. A Unidade escolar está localizada numa avenida de fácil acesso e os alunos são atendidos por5 (cinco) linhas de ônibus que circulam por todos os bairros da cidade'
                        />
                    </div>
                </div>
            </Section>

            <Section>
                <Galeria />
            </Section>
            <Footer />
        </RootLayout>
    )
}

export default Institucional;