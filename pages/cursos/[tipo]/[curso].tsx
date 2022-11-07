// TODO: rota dinamica do curso

import { Section } from '../../../components/section'

import React, { useEffect, useState } from 'react';
import { Layout, MetaData } from '../../../components/root';
import { cursos } from '../../../data/cursosData';
import { MainTitle, MediumText } from '../../../components/text';

const metaData:MetaData = {
    title: 'Cursos',
    description: '',
    keywords:'',
    robots:'index'
}

const Curso = (props:{curso:CursoData}) => {

    useEffect(()=>{console.log(props.curso)},[])
    return (
        <Layout meta={metaData}>
            <Section>
               <MainTitle text={props.curso.nome}/>
               <MediumText text={props.curso.descricao}/>
               <ul>
                <li>Eixo Tecnológico: {props.curso.eixoTecnologico}</li>
                <li>Mercado de Trabalho: {props.curso.mercadoDeTrabalho}</li>
                <li>Período: {props.curso.periodo}</li>
                <li>Tipo de Curso:{props.curso.tipoDeCurso}</li>
               </ul>
            </Section>
        </Layout>
    )
}

export async function getStaticPaths(){
    const data = getCursos(cursos)

    return {
        paths: data,
        fallback: false
    }
}

export async function getStaticProps({params}:any){

    const data:CursoData | undefined = cursos.find((val)=>{
        if(val.tipoDeCurso === params.tipo){
            if(val.path === params.curso){
                return true
            }
        }
    })
    console.info(data,params)
    return {
        props: {curso: data}
    }
}
export default Curso;

type CursoData = {
    nome: string,
    descricao:string,
    periodo: string,
    vagas: number,
    duracao: string,
    eixoTecnologico: string,
    mercadoDeTrabalho: string,
    tipoDeCurso: string,
    ativo: boolean,
    path: string
}

function getCursos(cursosList:CursoData[]){
    const map = cursosList.map(curso => {
        const params = {params:{curso:curso.path,tipo:curso.tipoDeCurso}}
        return params
    })
    return map
}
