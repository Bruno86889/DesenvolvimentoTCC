// TODO: rota dinamica do curso

import React from 'react';

import { Section } from '../../components/section'
import { Layout, MetaData } from '../../components/root';
import CursoPageSection from '../../components/cursoSection';
import {etim,modular,novoTec} from '../../data/cursoPage';

const metaData:MetaData = {
    title: 'Modalidades e Cursos',
    description: 'descrição do curso',
    keywords:'curso, ensino médio, técnico intergado',
    robots:'index'
}

const Curso = (props:{cursoPageSectionData:[]}) => {
    return (
        <Layout meta={metaData}>
            {props.cursoPageSectionData.map((cursoPageSection,i)=>{
                return (
                    <CursoPageSection key={i} data={cursoPageSection}/>
                )
            })}
        </Layout>
    )
}

export async function getStaticProps(){
    return {
        props:{cursoPageSectionData:[etim,modular,novoTec]}
    }
}
export default Curso;