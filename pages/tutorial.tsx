import React from "react"
import { Section } from "../components/section"
import { TutorialSection } from "../components/tutorialSection"

import type { TutorialSectionData } from '../components/tutorialSection';

//TODO: dados serão pegos do BD
import { tutoriais } from "../data/tutorial"
import { Layout, MetaData } from "../components/root"

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