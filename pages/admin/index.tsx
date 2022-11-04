import { Section } from '../../components/section'

import React from 'react';
import { Layout, MetaData } from '../../components/root';
import { LargeText, MainTitle, MediumText, SectionTitle, SmallText, SubTitle } from '../../components/text';


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