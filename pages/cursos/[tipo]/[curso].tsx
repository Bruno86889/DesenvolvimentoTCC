// TODO: rota dinamica do curso

import { Section } from '../../../components/section'

import React from 'react';
import { Layout, MetaData } from '../../../components/root';
import { MediumText } from '../../../components/text';



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
               
            </Section>
        </Layout>
    )
}

export default Curso;
