import React from 'react';
import type { NextPage } from 'next'

import { Layout } from '@/components/root'
import { LargeText } from '@/components/text'
import { Section } from '@/components/section'

const metaData:MetaData = {
  title: 'Página não encontrada',
  description: '',
  keywords:'',
  robots:'noIndex',
}

const Page404: NextPage = () => {
  return (
    <Layout meta={metaData}>
      <Section>
        <LargeText text='404, Página não encontrada' />
      </Section>
    </Layout>
  )
}

export default Page404
