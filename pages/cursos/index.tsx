import React from 'react';

import { Layout } from '@/components/root';
import CursoPageSection from '@/components/cursoSection';
import { etim, modular } from '@/data/cursoPage';

const metaData: MetaData = {
    title: 'Modalidades e Cursos',
    description: 'descrição do curso',
    keywords: 'curso, ensino médio, técnico intergado',
    robots: 'index'
}

const Curso = (props: { cursoPageSectionData: [] }) => {
    return (
        <Layout meta={metaData}>
            {props.cursoPageSectionData.map((cursoPageSection, i) => {
                return (
                    <CursoPageSection key={i} data={cursoPageSection} />
                )
            })}
        </Layout>
    )
}

export async function getStaticProps() {
    return {
        props: { cursoPageSectionData: [etim, modular] }
    }
}
export default Curso;