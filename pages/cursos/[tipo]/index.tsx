// TODO: rota dinamica do curso

import { Section } from '../../../components/Main'

import React from 'react';
import { Layout, MetaData } from '../../../components/Root';
import { LargeText, MainTitle, MediumText, SectionTitle, SmallText, SubTitle } from '../../../components/Text';
import CursoSection, { CardCursoData, CursoPageData } from '../../../components/CursoSection';
import CursoPageSection from '../../../components/CursoSection';
import { useRouter } from 'next/router';
import {etim,modular} from '../../../data/cursoPage';

const metaData:MetaData = {
    title: 'Modalidades e Cursos',
    description: 'descrição do curso',
    keywords:'curso, ensino médio, técnico intergado',
    robots:'index'
}

const Curso = () => {
    const router = useRouter()
    const {tipo} = router.query

    return (
        <Layout meta={metaData}>
            <Section>
                <CursoPageSection data={tipo === 'etim' ? etim : modular}/>
            </Section>
        </Layout>
    )
}

export async function getStaticPaths(){
    return {
        paths: [{params: {tipo: 'etim'}}, {params: {tipo: 'modular'}}],
        fallback: false,
    }
}

export async function getStaticProps(){
    return {
        props:{}
    }
}
export default Curso;