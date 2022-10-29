import { Section } from '../../components/Main'

import React from 'react';
import { Layout, MetaData } from '../../components/Root';
import { LargeText } from '../../components/Text';


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