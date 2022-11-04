import { Section } from '../components/section'

import React from 'react';
import { Layout, MetaData } from '../components/root';
import { LargeText, MainTitle, MediumText, SectionTitle, SmallText, SubTitle } from '../components/text';
import Loading from '../components/Loading';


const metaData: MetaData = {
    title: 'Fotos da escola',
    description: '',
    keywords: '',
    robots: ''
}

// TODO: pegar imagens do BD
const Galeria = () => {
    return (
        <Layout meta={metaData}>
            <Section>
                <SmallText text='SmallText'/>
                <MediumText text='MediumText'/>
                <LargeText text='LargeText'/>

                <MainTitle text='MainTitle'/>
                <SubTitle text='SubTitle'/>
                <SectionTitle text='SectionTitle'/>
                <Loading/>
            </Section>
        </Layout>
    )
}

export default Galeria;