import React, { useEffect } from 'react';

import {GetStaticProps,GetStaticPaths} from 'next';

import { Section } from '@/components/section';
import { BlogLayout, Layout } from '@/components/root';
import { LargeText } from '@/components/text';
import {promises as fs} from 'fs'
import path from 'path';
import matter from 'gray-matter';

async function getPosts(dir:string){
    const dirs = fs.readdir(path.join(process.cwd(),"posts",dir))
    return (await dirs).map(dir=>dir.replace(".mdx",""))
}

const getPost = async (dir:string,file:string) => {
    const _dir = path.join(process.cwd(),"posts",dir)
    const _data = (await fs.readFile(path.join(_dir,`${file}.mdx`),'utf-8'))

    return matter(_data)
}

const metaData:MetaData = {
    title: 'Nome do curso',
    description: 'descrição do curso',
    keywords:'curso, ensino médio, técnico intergado',
    robots:'index'
}

const Projeto = (props:{data:any,content: any}) => {
    return (
        <BlogLayout meta={metaData}>
            {props.content}
        </BlogLayout>
    )
}

export const getStaticProps:GetStaticProps = async () =>{
    const data = await getPost("projetos","msdnaa")

    return {
        props: {meta: data.data, content: data.excerpt}
    }
}

export const getStaticPaths:GetStaticPaths<any> = async () =>{
    return {
        paths: [{params:{projeto:"1"}}],
        fallback: false   
    }
}

export default Projeto;