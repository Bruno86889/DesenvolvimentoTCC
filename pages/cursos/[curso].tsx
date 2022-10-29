// TODO: rota dinamica do curso

import { Section } from '../../components/Main'

import React from 'react';
import { Layout, MetaData } from '../../components/Root';
import { MediumText } from '../../components/Text';


const metaData:MetaData = {
    title: 'Página não encontrada',
    description: '',
    keywords:'',
    robots:'noIndex'
}

const Curso = () => {
    return (
        <Layout meta={metaData}>
            <Section>
                <MediumText text='cursos vem dinamicamete para cá pelo BD'/>
            </Section>
        </Layout>
    )
}

export default Curso;