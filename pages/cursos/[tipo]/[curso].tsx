// TODO: rota dinamica do curso

import { Section } from '@/components/section';

import React, { useEffect, useState } from 'react';
import { BlogLayout } from '@/components/root';
import { cursos } from '@/data/cursosData';
import { MainTitle, MediumText } from '@/components/text';
import Image from "next/image";

const metaData: MetaData = {
    title: 'Cursos',
    description: '',
    keywords: '',
    robots: 'index'
}

const Curso = (props: { curso: CursoData }) => {
    return (
        <BlogLayout meta={metaData}>
                <MainTitle text={props.curso.nome} />
                <Image priority className='image' src={props.curso.img} width={200} height={100} alt={props.curso.path}/>
                <MediumText text={props.curso.descricao} />
                <ul>
                    <li>Eixo Tecnológico: {props.curso.eixoTecnologico}</li>
                    <li>Mercado de Trabalho: {props.curso.mercadoDeTrabalho}</li>
                    <li>Período: {props.curso.periodo}</li>
                    <li>Tipo de Curso:{props.curso.tipoDeCurso}</li>
                </ul>
        </BlogLayout>
    )
}

export async function getStaticPaths() {
    const data = getCursos(cursos)

    return {
        paths: data,
        fallback: false
    }
}

export async function getStaticProps({ params }: any) {

    const data: CursoData | undefined = cursos.find((val:any) => {
        if (val.tipoDeCurso === params.tipo) {
            if (val.path === params.curso) {
                return true
            }
        }
    })

    return {
        props: { curso: data }
    }
}

function getCursos(cursosList: CursoData[]) {
    const map = cursosList.map(curso => {
        const params = {
            params: {
                curso: curso.path,
                tipo: curso.tipoDeCurso
            }
        };
        return params;
    })
    return map;
}

export default Curso;
