import React from 'react';

import { Section } from '@/components/section';
import { Layout } from '@/components/root';
import { LargeText, MainTitle, MediumText, SectionTitle, SmallText, SubTitle } from '@/components/text';
import Link from 'next/link';

const metaData: MetaData = {
    title: 'Editais',
    description: '',
    keywords: '',
    robots: ''
}
const InputPesquisa = () => {
    return (
        <div className='inputPesquisa'>
            <input type="text" />
            <button>Pesquisar</button>
        </div>
    )
}

const Select = () => {
    return (
        <div className='inputSelect'>
            <select name="" id="">
                
            </select>
        </div>
    )
}

const SecaoDocumentos = ()=>{
    return (
        <div className='secaoDocumentos'>

        </div>
    )
}
const Edital = () => {
    return (
        <Layout meta={metaData}>
            <Section>
                <div className='avisos'>
                    Processos seletivos em aberto

                    <div className='aviso'>
                        <p>20/12/2022</p>
                        <strong>Processo seletivo Simplificado</strong>
                    </div>
                </div>

                <div>
                    Ultimas atualizações
                </div>

                <div className="pesquisa">

                    <InputPesquisa />
                    <label htmlFor="ano">Ano</label>
                    <select name="ano" id="ano">
                        <option value="">Ano</option>
                        <option value="">2022</option>
                        <option value="">2021</option>
                        <option value="">2020</option>
                    </select>

                    <label htmlFor="tipo">Tipo de documento</label>
                    <select name="tipo" id="tipo">
                        <option value="">Tipo de Documento</option>
                        <option value="">Processo Seletivo</option>
                        <option value="">Plano de curso</option>
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
                        <tbody>
                            <tr>
                                <td>20/10/2022</td>
                                <td>
                                    <Link target="_blank" rel="noopener noreferer" href={'adm.jpg'}>T96</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button>mostrar mais</button>
                </div>
            </Section>
        </Layout>
    )
}

const TabelaDocumentos = ()=>{
    return (
        <div className='tabelaDocumentos'>
             
        </div>
    )
}
export default Edital;