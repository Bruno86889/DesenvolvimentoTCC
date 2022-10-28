import React from "react"
import { Footer } from "../components/Footer"
import { Section, Main } from "../components/Main"
import { Navbar } from "../components/Navbar"
import { TutorialSection } from "../components/TutorialSection"

//TODO: dados serão pegos do BD
import { tutoriais } from "../data/tutorial"

const Tutorial = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Section>
                    {tutoriais.map((section, i) => {
                        return <TutorialSection data={section} />
                    })}
                </Section>
            </Main>
            <Footer />
        </>
    )
}

export default Tutorial;