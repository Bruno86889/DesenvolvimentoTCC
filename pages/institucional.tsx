import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';

import Navbar from '@/components/navbar';;
import { Section } from '@/components/section';
import { LargeText, MainTitle, MediumText, SectionTitle, SmallText } from '@/components/text';
import { RootLayout } from '@/components/root';

import Footer from '@/components/footer';
import Galeria from '@/components/galeria';

import institucional from '@/styles/institucional.module.scss';
import Link from 'next/link';

const metaData: MetaData = {
    title: 'Etec Ferrúcio Humberto Gazzetta',
    description: '',
    keywords: '',
    robots: '',
};

const Institucional: NextPage = () => {
    return (
        <RootLayout meta={metaData}>
            <Navbar />
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

            <Section>
                <div className={institucional.textDoc}>
                    <MainTitle>Plano Plurianual de Gestão</MainTitle>
                    <MediumText>De acordo com o disposto no Capítulo II do <Link target={'_blank'} href={'https://etecdenovaodessa.com.br/wp-content/uploads/2021/05/Regimento-Comum-das-Etecs.pdf'}>Regimento Comum das Escolas Técnicas do CEETEPS</Link>, o Plano Plurianual de Gestão – PPG apresenta a proposta de trabalho da ETEC. Conta, como eixo norteador, com o Projeto Político Pedagógico – PPP, no qual são explicitados os valores, as crenças e os princípios pedagógicos da escola.</MediumText>
                    <MediumText>A concepção coletiva dos projetos a serem desenvolvidos parte, necessariamente, do PPP, dos objetivos e metas estabelecidos por meio da análise dos contextos interno e externo, da reflexão sobre o instituído e da escola almejada pela comunidade.</MediumText>
                    <MediumText>O Plano Plurianual de Gestão tem uma vigência de cinco anos, com replanejamento, no mínimo, anual. A atualização anual, com inclusão de novos projetos, garante o horizonte permanente de cinco anos.</MediumText>

                    <cite>“Todo projeto supõe rupturas com o presente e promessas para o futuro. Projetar significa tentar quebrar um estado confortável para arriscar-se, atravessar um período de instabilidade e buscar uma nova estabilidade em função da promessa que cada projeto contém de estado melhor do que o presente. Um projeto educativo pode ser tomado como promessa frente a determinadas rupturas. As promessas tornam visíveis os campos de ação possível, comprometendo seus atores e autores”. (GADOTTI, 2000)</cite>

                    <Link target={'_blank'} href={'https://www.etecdenovaodessa.com.br/wp-content/uploads/2020/06/PPG_2019-2023_E234.pdf'}>Plano Plurianual de Gestão 2019 – 2023 | Etec Ferrúcio Humberto Gazzetta</Link>
                </div>
            </Section>
            <Section>
                <div className={institucional.textDoc}>
                    <MainTitle>Projeto MSDNAA</MainTitle>
                    <MediumText>O MSDNAA (Microsoft Developers Network Academic Alliance) é uma parceria entre o Centro Paula Souza e a Microsoft que proporciona aos estudantes, professores e servidores das Escolas Técnicas (Etecs) estaduais, das Faculdades de Tecnologia (Fatecs) do Estado de São Paulo download gratuito dos produtos de desenvolvimento e infraestrutura Microsoft para a instalação em equipamentos pessoais, visando o aprendizado das ferramentas e a instalação dos programas nos laboratórios de informática institucionais. Todos com chaves de instalações originais e licenciados.</MediumText>

                    <LargeText className='bold'>O programa tem dois objetivos básicos:</LargeText>
                    <ul>
                        <li>Facilitar e tornar mais barata a obtenção de ferramentas de desenvolvimento, plataformas e servidores para fins educacionais e de pesquisa;</li>
                        <li>Formar uma comunidade de instrutores que possam compartilhar seus programas de aula e outros recursos de aprendizagem para dar suporte ao uso destas tecnologias.</li>
                    </ul>

                    <LargeText className='bold'>Como Funciona?</LargeText>
                    <MediumText>Como associado, os alunos e professores recebem um e-mail institucional que dá acesso ao projeto MSDNAA, que inclui a plataforma Microsoft, servidores e ferramentas de desenvolvimento e infraestrutura. Todo o conjunto de software pode ser instalado nas máquinas pessoais dos alunos e professores, desde que usado exclusivamente para fins educacionais e de pesquisa.</MediumText>

                    <Link target={'_blank'} href={'http://www.etec.sp.gov.br/view/Default.aspx'}>Cofira os recursos oferecidos pelo Projeto MSDNAA</Link>
                </div>
            </Section>
            <Footer />
        </RootLayout>
    )
}

export default Institucional;