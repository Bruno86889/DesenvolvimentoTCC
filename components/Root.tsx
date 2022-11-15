import { MDXProvider } from '@mdx-js/react';
import Navbar from './navbar';
import Footer from './footer'
import React from 'react';
import Head from 'next/head';
import { MainTitle, MediumText, SectionTitle, SubTitle } from './text';
import { Section } from './section';
import Image from 'next/image';

type LayoutType = {
    children: JSX.Element | JSX.Element[],
    meta: MetaData
}

const RootLayout = ({ children, meta }: LayoutType) => {
    return (
        <>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="description" content={meta.description || ""} />
                <meta name="keywords" content={meta.keywords || ""} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content={meta.robots || ""} />

                <link rel="icon" href="/logo.svg" type="image/x-icon" />

                <title>{meta.title || ""}</title>
            </Head>

            {children}
        </>
    )
}

const Layout = ({ children, meta }: { children: JSX.Element | JSX.Element[], meta: MetaData }) => {

    return (
        <RootLayout meta={meta}>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </RootLayout>
    )
}

const components: any = {
    h1: MainTitle,
    h2: SubTitle,
    h3: SectionTitle,
    p: MediumText
}

const BlogLayout = ({ children, meta }: { children: JSX.Element | JSX.Element[], meta: MetaData }) => {
    return (
        <Layout meta={meta}>
            <Section>
                <div className="blog-container">
                    <MDXProvider components={components}>
                        {children}
                    </MDXProvider>
                </div>
            </Section>
        </Layout>
    )
}

export { RootLayout, Layout, BlogLayout }