import React, { FunctionComponent } from 'react';

import {Section } from '@/components/section'
import { Layout } from '@/components/root';
import { LargeText, SmallText } from '@/components/text';
import { Mapear } from '@/components/util';

const metaData:MetaData = {
    title: 'Contato',
    description: '',
    keywords:'',
    robots:''
}




const Contato = () => {
    return (
        <Layout meta={metaData}>
            <Section>
            </Section>
        </Layout>
    )
}

export default Contato;