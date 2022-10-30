// TODO: rota dinamica do curso

import { Section } from '../../components/Main'

import React from 'react';
import { Layout, MetaData } from '../../components/Root';
import { LargeText, MainTitle, MediumText, SectionTitle, SmallText, SubTitle } from '../../components/Text';
import CursoSection, { CardCursoData } from '../../components/CursoSection';

const metaData:MetaData = {
    title: 'Modalidades e Cursos',
    description: 'descrição do curso',
    keywords:'curso, ensino médio, técnico intergado',
    robots:'index'
}

const cursos:CardCursoData[] = [
        {
            nome: "Administração",
            description: '',
            img: '',
            page: ""
        },
        {
            nome: "Desenvolvimento de Sistemas",
            description: '',
            img: '',
            page: ""
        },
        {
            nome: "Marketing",
            description: '',
            img: '',
            page: ""
        },
        {
            nome: "Marketing",
            description: '',
            img: '',
            page: ""
        },
        {
            nome: "Marketing",
            description: '',
            img: '',
            page: ""
        },
    ]

const Curso = () => {
    return (
        <Layout meta={metaData}>
            <Section>
                <MainTitle text='maintitle'/>
                <SubTitle text='subtitle'/>
                <SectionTitle text='sectionTitle'/>
                <LargeText text='largetext'/>
                <MediumText text='mediumtext'/>
                <SmallText text='smalltext'/>
                <MainTitle text='Ensino Técnico Integrado Ao Ensino Médio'/>
                <MediumText text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quasi ad unde quibusdam repudiandae cum nesciunt, esse excepturi dicta, perferendis mollitia quae provident laboriosam consequuntur modi voluptatem sunt libero odit.'/>
                <CursoSection cursos={cursos} />
            </Section>
        </Layout>
    )
}

export default Curso;