// TODO: rota dinamica do curso

import { Section } from '../../../components/section'

import React from 'react';
import { Layout, MetaData } from '../../../components/root';
import { LargeText, MainTitle, MediumText, SectionTitle, SmallText, SubTitle } from '../../../components/text';
import CursoSection, { CardCursoData, CursoPageData } from '../../../components/cursoSection';
import CursoPageSection from '../../../components/cursoSection';
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