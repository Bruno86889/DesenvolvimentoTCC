import type { NextPage } from 'next'
import { Layout, MetaData } from '../components/Root'
import { LargeText } from '../components/Text'
import { Section } from '../components/Main'

const metaData:MetaData = {
  title: 'Página não encontrada',
  description: '',
  keywords:'',
  robots:'noIndex'
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
