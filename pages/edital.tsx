import React from 'react';

import { Section } from '@/components/section';
import { Layout } from '@/components/root';
import { LargeText, MainTitle, MediumText, SectionTitle, SmallText, SubTitle } from '@/components/text';




const metaData: MetaData = {
    title: 'Editais',
    description: '',
    keywords: '',
    robots: ''
}

const Edital = () => {
    return (
        <Layout meta={metaData}>
            <Section>
                <div>
                    Processos seletivos em aberto

                    <div>
                        <p>20/12/2022</p>
                        <strong>Processo seletivo Simplificado</strong>
                    </div>
                </div>
                <div>
                    Ultimas atualizações

                    <div></div>
                </div>
                <div className="pesquisa">
                    
                    <label htmlFor="">
                        <input type="text" />
                        <button>Pesquisar</button>
                    </label>
                    <select name="" id="">
                        <option value="">Ano</option>
                        <option value="">2022</option>
                        <option value="">2021</option>
                        <option value="">2020</option>
                    </select>
                    <select name="" id="">
                        <option value="">Tipo de Documento</option>
                        <option value="">Processo Seletivo</option>
                        <option value="">Plano de aulas</option>
                        <option value="">Vagas Remanecentes</option>
                        <option value="">Outros</option>
                    </select>
                </div>
                <div className="tudo">
                    todos os documentos pesquisados

                    <table>
                        <thead>
                            <th>Data</th>
                            <th>Documento</th>
                        </thead>
                    </table>
                    <button>
                    mostrar mais
                    </button>

                </div>
            </Section>
        </Layout>
    )
}

export default Edital;