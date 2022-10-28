import React from 'react';
import { Navbar } from '../components/Navbar'
import { Main, Section } from '../components/Main'
import { MediumText } from '../components/Text';
import {Image} from '../components/Image'

import etec from '../publics/etec2.svg';

// texto estático

const Sobre = () => {
    return (
        <>
            <Navbar transparent={true} />
            <Main>
                <Section>
                    <Image src={etec} /> {/* trocar para SVG */}
                    <div className="description-square">
                        <div className="text">
                            <MediumText>
                                Com a abertura do mercado interno brasileiro, Nova Odessa passa a receber grandes corporações devido à sua localização estratégica, estando próxima às principais rodovias paulistas, infraestrutura e população com alto nível de instrução. O município de Nova Odessa se caracterizava de praticamente 90% da mão de obra voltada para o ramo da Indústria Têxtil. Com o decorrer dos anos, esse quadro vem se modificando, mantendo os níveis de emprego e gerando a vinda de novas empresas através de algumas particularidades, como localização, mananciais de água, rodovias próximas, mão de obra etc. Muitos desses recursos gerados pela própria administração.
                            </MediumText>
                            <MediumText>
                                É neste contexto que em 2005, através de um convênio entre a Prefeitura Municipal de Nova Odessa e o Centro Estadual de Educação Tecnológica Paula Souza, instala-se a Classe Descentralizada da ETEC Polivalente de Americana, que mais tarde em 2010 se transforma na ETEC de Nova Odessa.
                                A unidade conta hoje com 08 (oito) cursos Técnicos Profissionalizantes oferecidos a comunidade na Unidade. A Unidade escolar está localizada numa avenida de fácil acesso e os alunos são atendidos por5 (cinco) linhas de ônibus que circulam por todos os bairros da cidade
                            </MediumText>

                        </div>
                    </div>
                </Section>
            </Main>

        </>
    )
}

export default Sobre