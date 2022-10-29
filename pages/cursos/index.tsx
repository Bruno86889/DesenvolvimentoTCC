// TODO: rota dinamica do curso

import { Section } from '../../components/Main'

import React from 'react';
import { Layout, MetaData } from '../../components/Root';
import { MediumText, SectionTitle } from '../../components/Text';
import CursoSection from '../../components/CardCurso';

const metaData:MetaData = {
    title: 'Nome do curso',
    description: 'descrição do curso',
    keywords:'curso, ensino médio, técnico intergado',
    robots:'index'
}

const Curso = () => {
    return (
        <Layout meta={metaData}>
            <Section>
                <SectionTitle text='Ensino Técnico Integrado Ao Ensino Médio'/>
                <MediumText text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quasi ad unde quibusdam repudiandae cum nesciunt, esse excepturi dicta, perferendis mollitia quae provident laboriosam consequuntur modi voluptatem sunt libero odit.'/>
                <CursoSection nome={'Um curso qualquer'} img={'/etec2.svg'} description={'texto que vai em um curso'} page={'/erro'}/>
            </Section>
            <Section>
                <SectionTitle text='Ensino Técnico Módular'/>
                <MediumText text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quasi ad unde quibusdam repudiandae cum nesciunt, esse excepturi dicta, perferendis mollitia quae provident laboriosam consequuntur modi voluptatem sunt libero odit.'/>
                <CursoSection nome={'mais uma seção'} img={'/etec1.svg'} description={'texto que vai em um curso'} page={'/erro'}/>
            </Section>
            <Section>
                <SectionTitle text='NovoTec'/>
                <MediumText text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quasi ad unde quibusdam repudiandae cum nesciunt, esse excepturi dicta, perferendis mollitia quae provident laboriosam consequuntur modi voluptatem sunt libero odit.'/>
                <CursoSection nome={'mais uma seção'} img={'/etec1.svg'} description={'texto que vai em um curso'} page={'/erro'}/>
            </Section>
        </Layout>
    )
}

export default Curso;