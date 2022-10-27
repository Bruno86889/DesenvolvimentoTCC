import React from "react"
import { Footer } from "../componentes/Footer"
import { Section, Main } from "../componentes/Main"
import { Navbar } from "../componentes/Navbar"
import { TutorialSection } from "../componentes/TutorialSection"

//TODO: dados serão pegos do BD
import { tutoriais } from "../data/tutorial"

const Tutorial = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Section>
                    {tutoriais.map((section, i) => {
                        return <TutorialSection data={tutoriais} />
                    })}
                </Section>
            </Main>

            <Footer />
        </>
    )
}

export default Tutorial;