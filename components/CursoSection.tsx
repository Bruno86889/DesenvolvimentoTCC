import { LargeText, MediumText, SmallText } from "./Text";
import Image from "next/image";
import Link from "next/link";
import cursos from "../styles/cursos.module.scss";

export interface CardCursoData {
    nome: string,
    img: string,
    description: string,
    page: string
}

type CardCursoDataList = {
    cursos:CardCursoData[]
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

// export async function getStaticProps({params}) {
    
// }
export default CursoSection;