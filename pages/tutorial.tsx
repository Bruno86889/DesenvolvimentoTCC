import React from "react"
import { Section } from "../components/Main"
import { TutorialSection } from "../components/TutorialSection"

import type { TutorialSectionData } from '../components/TutorialSection';

//TODO: dados serão pegos do BD
import { tutoriais } from "../data/tutorial"
import { Layout, MetaData } from "../components/Root"

const metaData: MetaData = {
    title: 'Plataformas e Tutoriais',
    description: '',
    keywords: '',
    robots: ''
}

const Tutorial = () => {
    return (
        <Layout meta={metaData}>
            <Section>
                {tutoriais.map((section: TutorialSectionData, i: number) => {
                    return <TutorialSection key={i} data={section} />
                })}
            </Section>
        </Layout>
    )
}

export default Tutorial;