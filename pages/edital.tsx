import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Section } from '@/components/section';
import { Layout } from '@/components/root';
import { LargeText, MainTitle, MediumText, SectionTitle, SmallText, SubTitle } from '@/components/text';
import Link from 'next/link';
import Select from 'react-select';
import edital from "@/styles/edital.module.scss";

const metaData: MetaData = {
    title: 'Editais',
    description: '',
    keywords: '',
    robots: ''
}

const tipoList = [
    { value: '0', label: "Nunhum" },
    { value: '', label: "Todos" },
    { value: 'processo-seletivo', label: "Processo Seletivo" },
    { value: 'plano-de-curso', label: "Plano de Curso" },
    { value: 'vagas-remancentes', label: "Vagas Remancentes" },
    { value: 'outro', label: "Outro" },
]

const situacaoList = [
    { value: '0', label: "Nenhum" },
    { value: '', label: "Todos" },
    { value: 'aberto', label: "Em aberto" },
    { value: 'encerrado', label: "Encerrado" },
    { value: 'resultado', label: "Resultado" },
]

const Edital = () => {
    const tipo = useRef('0')
    const situacao = useRef('0')
    const nome = useRef('')
    const [search, setSearch] = useState(false)

    const [data, setData] = useState(editalData)

    const filteredData = useMemo(() =>
        data?.filter((doc) => doc.tipo.includes(tipo.current) && doc.situacao.includes(situacao.current))
        , [search])

    return (
        <Layout meta={metaData}>
            <Section>
                <div className={edital.editais}>

                    <div className={edital.pesquisa}>
                        <label htmlFor="">Tipo de documento</label>
                        <Select options={tipoList} onChange={(e) => tipo.current = e?.value || ''} placeholder/>

                        <label htmlFor="">Situação</label>
                        <Select options={situacaoList} onChange={(e) => situacao.current = e?.value || ''} placeholder/> 
                        
                        <button className={edital.button} onClick={() => setSearch(!search)}>Pesquisar</button>
                    </div>

                    <div className={edital.containerDocumentos}>
                        <SubTitle>EDITAIS E DOCUMENTOS</SubTitle>
                        {Object.keys(filteredData.reduce((acc:any, obj) => {
                            let key = obj.tipo
                            if (!acc[key]) {
                                acc[key] = []
                            }

                            acc[key].push(obj)
                            return acc
                        }, {})).map((tipo) => {
                            return <>
                                <SectionTitle text={tipo.replace("-", " ").toUpperCase()} />
                                <div className={edital.secaoDocumento}>
                                    {filteredData.map((doc,i) => {
                                        if(doc.tipo === tipo) return <SecaoDocumento key={i} {...doc} />
                                    })}
                                </div>
                            </>
                        })}
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

const SecaoDocumento = (props: EditalDocumento) => {
    return (
        <div className={edital.secaoDocumento}>
            <Link target={'_blank'} href={props.url}>{props.situacao == 'resultado' ? `(RESULTADO) ${props.label}` :props.label}</Link>
        </div>
    )
}

export default Edital;

interface EditalDocumento {
    numero: string,
    label: string,
    url: string,
    tipo: 'processo-seletivo' | 'plano-de-curso' | 'vagas-remancentes' | 'outros',
    situacao: 'aberto' | 'encerrado' | 'resultado',
    ano: number,
    semestre: 0 | 1
}


const editalData: EditalDocumento[] = [
    {
        numero: "234/06/2022",
        label: "Edital n° 12 Operação e Configuração de Aplicativos II (Informática)",
        url: "https://etecdenovaodessa.com.br/wp-content/uploads/2022/03/234-06-2022-PSS-DEFERIMENTO_INDEFERIMENTO-SEM-PPI.pdf",
        tipo: "processo-seletivo",
        situacao: "resultado",
        ano: 2022,
        semestre: 1
    },
    {
        numero: "1234",
        label: "Edital n°1234 Processo Seletivo Simplificado",
        url: "https://etecdenovaodessa.com.br/wp-content/uploads/2022/05/2022-04-29-Ricardo_ProcSeletivo-CORRIGIDO.pdf",
        tipo: "processo-seletivo",
        situacao: "aberto",
        ano: 2022,
        semestre: 1
    },
    {
        numero: "234/06/2022",
        label: "Edital n°234/06/2022 Operação e Configuração de Aplicativos II (Informática)",
        url: "https://etecdenovaodessa.com.br/wp-content/uploads/2022/02/PPS_Edital-de-Abertura_Edital_-234_06_2022.pdf",
        tipo: "processo-seletivo",
        situacao: "encerrado",
        ano: 2022,
        semestre: 1
    },

    {
        ano: 2022,
        semestre: 0,
        label: "Edital n°12 ETIM Desenvolvimento de Sistemas",
        numero: "12",
        situacao: "resultado",
        tipo: "vagas-remancentes",
        url: "https://etecdenovaodessa.com.br/wp-content/uploads/2021/12/Edital-12-VAGAS-REMANESCENTES-ETIM-DESENV.-SISTEMAS.pdf"
    },

    {
        ano: 2022,
        semestre: 0,
        label: "Edital n°12 ETIM Desenvolvimento de Sistemas",
        numero: "12",
        situacao: "encerrado",
        tipo: "vagas-remancentes",
        url: "https://etecdenovaodessa.com.br/wp-content/uploads/2021/12/Edital-12-VAGAS-REMANESCENTES-ETIM-DESENV.-SISTEMAS.pdf"
    },
    {
        ano: 2019,
        semestre: 0,
        label:'Regimento Comum das Etecs',
        numero: '',
        situacao: 'aberto',
        tipo: 'outros',
        url: 'https://etecdenovaodessa.com.br/wp-content/uploads/2021/05/Regimento-Comum-das-Etecs.pdf'
    }
]