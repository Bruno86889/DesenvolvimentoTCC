import { Section } from '../../components/Main'

import React from 'react';
import { Layout, MetaData } from '../../components/Root';
import { LargeText, MainTitle, MediumText, SectionTitle, SmallText, SubTitle } from '../../components/Text';


const metaData: MetaData = {
    title: 'Fotos da escola',
    description: '',
    keywords: '',
    robots: ''
}

const Login = () => {
    return (
        <Layout meta={metaData}>
            <Section>
                <SmallText text='SmallText'/>
                <MediumText text='MediumText'/>
                <LargeText text='LargeText'/>

                <MainTitle text='MainTitle'/>
                <SubTitle text='SubTitle'/>
                <SectionTitle text='SectionTitle'/>
            </Section>
        </Layout>
    )
}

export default Login;