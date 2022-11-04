import { Section } from '../../components/section'

import React from 'react';
import { Layout, MetaData } from '../../components/root';
import { LargeText } from '../../components/text';


const metaData:MetaData = {
    title: 'Nome do curso',
    description: 'descrição do curso',
    keywords:'curso, ensino médio, técnico intergado',
    robots:'index'
}

const Projeto = () => {
    return (
        <Layout meta={metaData}>
            <Section>
                <LargeText text='Os projetos vão aqui'/>
            </Section>
        </Layout>
    )
}

export default Projeto;