import { Section } from '../components/section'

import React from 'react';
import { Layout, MetaData } from '../components/root';
import { LargeText, SmallText } from '../components/text';
import { Feed } from '../components/feed';


import Image from 'next/image';
import institucional from '../styles/institucional.module.scss';


const metaData: MetaData = {
    title: 'Editais',
    description: '',
    keywords: '',
    robots: ''
}

const Edital = () => {
    return (
        <Layout meta={metaData}>
            <Section>
                
            </Section>
        </Layout>
    )
}

export default Edital;