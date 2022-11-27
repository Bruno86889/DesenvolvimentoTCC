export { };

declare global {

    type MetaData = {
        title: string | undefined,
        keywords: string | undefined,
        robots: "noindex" | "index" | "nofollow" | "all" | "none" | "noarchive" | string,
        description: string | undefined
    }

    // 
    type NewsData = {
        data: string,
        titulo: string,
        subtitulo?: string,
        url: string,
        src: string
    }


    // 
    type CursoData = {
        nome: string,
        descricao: string,
        periodo: string,
        vagas: number,
        duracao: string,
        eixoTecnologico: string,
        mercadoDeTrabalho: string,
        tipoDeCurso: string,
        ativo: boolean,
        path: string,
        img: string
    }

    type CardCursoData = {
        nome: string,
        img: string,
        description: string,
        page: string
    }

    type CursoPageData = {
        tipoDeCurso: string,
        descricao: string,
        cursos: CardCursoData[]
    }
}