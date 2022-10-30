// TODO: rota dinamica do curso

import { Section } from '../../../components/Main'

import React from 'react';
import { Layout, MetaData } from '../../../components/Root';
import { MediumText } from '../../../components/Text';
import { useRouter } from 'next/router';


const metaData:MetaData = {
    title: 'Página não encontrada',
    description: '',
    keywords:'',
    robots:'noIndex'
}

const Curso = () => {
    const route = useRouter()
    const {curso} = route.query

    return (
        <Layout meta={metaData}>
            <Section>
                <MediumText text={curso?.toString()}/>
            </Section>
        </Layout>
    )
}

export default Curso;