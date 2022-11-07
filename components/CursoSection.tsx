import { LargeText, MainTitle, MediumText, SmallText } from "./text";
import Image from "next/image";
import Link from "next/link";
import cursos from "../styles/cursos.module.scss";
import { Section } from "./section";

export interface CardCursoData {
    nome: string,
    img: string,
    description: string,
    page: string
}

export type CardCursoDataList = {
    cursos:CardCursoData[]
}

export type CursoPageData = {
    tipoDeCurso: string,
    descricao: string,
    cursos: CardCursoData[]
}

export type CursoPageDataList = CursoPageData[]


const CursoPageSection = (props:{data:CursoPageData})=>{
    return (
        <Section className={cursos.cursoPageSection}>
                <MainTitle text={props.data.tipoDeCurso}/>
                <MediumText text={props.data.descricao}/>
                <CursoSection cursos={props.data.cursos} />
        </Section>
    )
}

const CursoSection =(props:CardCursoDataList)=>{
    return (
        <div className={cursos.cursoSection}>
            {props.cursos.map((curso,i)=>{
                return <CardCurso key={i} nome={curso.nome} img={curso.img} description={curso.description} page={curso.page}/>
            })}
        </div>
    )
}

const CardCurso = (props:CardCursoData)=>{
    return (
            <div className={cursos.cardCurso}>
                <MediumText text={props.nome} />
                <Image src={props.img} alt={""} width={100} height={100}/>
                <div className={cursos.description}>
                    <MediumText text={props.description}/>
                </div>
                <Link href={props.page}>
                    <SmallText text={"saiba mais"} />
                </Link>
            </div>
    )
}

export default CursoPageSection;